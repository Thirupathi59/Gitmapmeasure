import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Alert, StyleSheet, FlatList, Text, TouchableOpacity, BackHandler, Image } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { getAreaOfPolygon } from 'geolib';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Mapview = () => {

  const navigation = useNavigation(); 

  const [coordinates, setCoordinates] = useState([]);
  const [location, setLocation] = useState(null); // Live location state
  const mapRef = useRef(null); // Reference to MapView for centering

  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Request location permission and get current position
  const requestLocationPermission = async () => {
    const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (response === 'granted') {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          Alert.alert('Error', 'Could not fetch location');
        }
      );
    } else {
      Alert.alert('Location permission not granted');
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setCoordinates([...coordinates, coordinate]);
  };

  const calculatePolygonArea = () => {
    if (coordinates.length < 3) {
      Alert.alert('At least 3 points are required to calculate area');
      return 0;
    }
    const areaInSquareMeters = getAreaOfPolygon(coordinates);
    const areaInAcres = areaInSquareMeters / 4046.86;
    return areaInAcres;
  };

  const handleCalculateArea = async () => {
    if (isPolygonClosed()) {
      const area = calculatePolygonArea();
      if (area) {
        Alert.alert('Area', `The area of the polygon is ${area.toFixed(2)} acres`, [
          {
            text: 'OK',
            onPress: () => addPolygonToList(area), // Add area and polygon boundary to list
          },
        ]);
      }
    } else {
      Alert.alert('Polygon Not Closed', 'Please close the shape to calculate the area.');
    }
  };

  const addPolygonToList = async (area) => {
    const newPolygon = { area, boundary: coordinates };

    // Get existing polygons from AsyncStorage
    const existingPolygons = await AsyncStorage.getItem('polygons');
    const polygonsArray = existingPolygons ? JSON.parse(existingPolygons) : [];

    // Add new polygon to the array (limit to 5)
    if (polygonsArray.length < 5) {
      polygonsArray.push(newPolygon);
      await AsyncStorage.setItem('polygons', JSON.stringify(polygonsArray));
      Alert.alert('Success', 'Polygon saved successfully!');
    } else {
      Alert.alert('Limit Reached', 'You can only save up to 5 polygons.');
    }

    setCoordinates([]); // Clear coordinates for the next shape
  };

  const isPolygonClosed = () => {
    if (coordinates.length < 3) return false;
    const firstPoint = coordinates[0];
    const lastPoint = coordinates[coordinates.length - 1];
    const distanceThreshold = 0.0001;

    const distance = Math.sqrt(
      Math.pow(lastPoint.latitude - firstPoint.latitude, 2) +
      Math.pow(lastPoint.longitude - firstPoint.longitude, 2)
    );

    return distance < distanceThreshold;
  };

  const handleClear = () => {
    setCoordinates([]);
    Alert.alert('Cleared', 'The drawing has been cleared.');
  };

  const handleViewPolygons = () => {
    navigation.navigate('PolygonList'); // Navigate to PolygonList screen
  };

  const handleShowCurrentLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }, 1000); // Center the map on current location
    } else {
      Alert.alert('Error', 'Current location not available ');
    }
  };



  

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home"); // Correctly call navigate
      return true; // Prevent default back action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Attach reference to the MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: location ? location.latitude : 17.487337921369896,
          longitude: location ? location.longitude : 78.39656533383919,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {/* Render live location marker */}
        {location && (
          <Marker coordinate={location} title="You are here" pinColor="#D74028" />
        )}

        {coordinates.length > 0 && (
          <Polyline coordinates={coordinates} strokeColor="#FF0000" strokeWidth={2} />
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleShowCurrentLocation}>
          <Text style={styles.buttonText}>Current Location</Text>
          <Image
          style={styles.icons}
          source={require('../assets/location.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCalculateArea}>
          <Text style={styles.buttonText}>Calculate Area</Text>
          <Image
          style={styles.icons}
          source={require('../assets/area.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
          <Image
          style={styles.icons}
          source={require('../assets/delet.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleViewPolygons}>
          <Text style={styles.buttonText}>Saved Polygons</Text>
          <Image
          style={styles.icons}
          source={require('../assets/saved.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '70%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 5,
  },
  button: {
    flexDirection:'row',
    height: 50,
    width: '45%',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'brown',
    justifyContent: 'space-around',
    backgroundColor: '#4081EC',
    borderRadius: 5,
  },
  button1: {
    flexDirection:'row',
    height: 50,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'brown',
    // backgroundColor: '#4081EC',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons:{
    height:25,
     width:25, 
    resizeMode:'cover', 
  },


});

export default Mapview;
