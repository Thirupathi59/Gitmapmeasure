import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Alert, BackHandler } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const PolygonList = () => {

  const navigation = useNavigation(); 
  const [polygons, setPolygons] = useState([]);


  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Mapview"); // Correctly call navigate
      return true; // Prevent default back action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [navigation]);



  useEffect(() => {
    const fetchPolygons = async () => {
      try {
        const storedPolygons = await AsyncStorage.getItem('polygons');
        if (storedPolygons) {
          setPolygons(JSON.parse(storedPolygons));
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved polygons.');
      }
    };

    fetchPolygons();
  }, []);

  const getPolygonRegion = (coordinates) => {
    const latitudes = coordinates.map(coord => coord.latitude);
    const longitudes = coordinates.map(coord => coord.longitude);
    
    const region = {
      latitude: (Math.max(...latitudes) + Math.min(...latitudes)) / 2,
      longitude: (Math.max(...longitudes) + Math.min(...longitudes)) / 2,
      latitudeDelta: Math.max(...latitudes) - Math.min(...latitudes) + 0.01, // Add a little padding
      longitudeDelta: Math.max(...longitudes) - Math.min(...longitudes) + 0.01, // Add a little padding
    };

    return region;
  };

  // Check if polygons exist and are not empty
  if (!polygons || polygons.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noPolygonsText}>No saved polygons found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={polygons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const region = getPolygonRegion(item.boundary); // Get region for the polygon

          return (
            <View style={styles.polygonItem}>
              <Text style={styles.polygonText}>Area: {item.area.toFixed(2)} acres</Text>
              <MapView
                style={styles.map}
                initialRegion={region} // Set the initial region to fit the polygon
                zoomEnabled={true} // Allow zooming
                scrollEnabled={true} // Allow scrolling
              >
                <Polyline coordinates={item.boundary} strokeColor="#FF0000" strokeWidth={2} />
              </MapView>
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer} // Center the FlatList content
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5', // Optional: Background color for the entire screen
  },
  noPolygonsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  polygonItem: {
    width: '100%', // Use full width for the polygon item
    alignSelf: 'center',
    marginVertical: 10, // Space between items
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5, // Optional: Rounded corners for better appearance
    backgroundColor: 'white', // Optional: Background color for each polygon item
    shadowColor: '#000', // Optional: Shadow effect for elevation
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3, // For Android shadow effect
  },
  polygonText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center', // Center text alignment
  },
  map: {
    width: '100%',
    height: 200, // Adjusted height for better visibility
  },
  listContainer: {
    paddingBottom: 10, // Additional padding at the bottom of the list
  },
});

export default PolygonList;
