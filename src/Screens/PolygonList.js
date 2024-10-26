import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const PolygonList = () => {
  const navigation = useNavigation(); 
  const [polygons, setPolygons] = useState([]);

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
      latitudeDelta: Math.max(...latitudes) - Math.min(...latitudes) + 0.01,
      longitudeDelta: Math.max(...longitudes) - Math.min(...longitudes) + 0.01,
    };

    return region;
  };

  const deletePolygon = async (index) => {
    const updatedPolygons = polygons.filter((_, i) => i !== index);
    setPolygons(updatedPolygons);
    await AsyncStorage.setItem('polygons', JSON.stringify(updatedPolygons));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={polygons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const region = getPolygonRegion(item.boundary);

          return (
            <View style={styles.polygonItem}>
              <View style={styles.infoContainer}>
                <Text style={styles.polygonText}>Area: {item.area.toFixed(2)} acres</Text>
                
                <TouchableOpacity 
                 onPress={() => deletePolygon(index)}
                style={styles.Clearbutton}>
                  <Text style={styles.Clearbuttontext}>
                  Clear
                  </Text>

                  </TouchableOpacity>
                
              </View>
              <MapView
                style={styles.map}
                initialRegion={region}
                zoomEnabled={true}
                scrollEnabled={true}
              >
                <Polyline coordinates={item.boundary} strokeColor="#FF0000" strokeWidth={2} />
              </MapView>
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  polygonItem: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  polygonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  map: {
    width: '100%',
    height: 200,
  },
  listContainer: {
    paddingBottom: 10,
  },
  Clearbutton:
  {height:40, 
    width:90,  
    backgroundColor:'#4081EC',
    alignItems:"center",
     justifyContent:"center",
      borderRadius:10
      },
      Clearbuttontext:
      {color:'white', 
        fontSize:16, 
        fontWeight:'500'},
});

export default PolygonList;
