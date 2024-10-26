

// import 'react-native-gesture-handler';

// import * as React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import { CommonActions } from '@react-navigation/native';


// // Import Custom Sidebar

// import Login from './src/Screens/Login';
// import Home from './src/Screens/Home';
// import Register from './src/Screens/Register';
// import CustomSide from './src/Screens/CustomSide';
// import Splash from './src/Screens/Splash';
// import VehicleMaster from './src/Screens/VehicleMaster/VehicleMaster';
// import Todayquantity from './src/Screens/Vehiclequantity/Todayquantity';
// import Monthquantity from './src/Screens/Vehiclequantity/Monthquantity';
// import Yearquantity from './src/Screens/Vehiclequantity/Yearquantity';
// // import VehicleEdit from './src/Screens/Vehiclehistory/VehicleEdit';
// // import Vehiclehistory from './src/Screens/Vehiclehistory/Vehiclehistory';
// import Strings from './src/Components/Strings';
// import PlannedVehicle from './src/Screens/PlannedVehicles/PlannedVehicle';
// import Total_Deployed_Vehicles from './src/Screens/Total_Deployed_Vehicles/Total_Deployed_Vehicles';
// import Not_Deployed_Vehicles from './src/Screens/Not_Deployed_Vehicles/Not_Deployed_Vehicles';
// import TotalTrips from './src/Screens/TotalTrips/TotalTrips';
// import GVPCleared from './src/Screens/GVPCleared/GVPCleared';
// import TotalCleared from './src/Screens/TotalCleared/TotalCleared';
// import HotspotsCleared from './src/Screens/Hotspots_Cleared/HotspotsCleared';
// import Reports from './src/Screens/Reports/Reports';
// import VehicleDetails from './src/Screens/VehicleDetails/VehicleDetails';
// import DeploymentSuccessfully from './src/Screens/VehicleDetails/DeploymentSuccessfully';
// import Maptrip from './src/Screens/Map/Maptrip';
// import Mapview from './src/Screens/Map/Mapview';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import EquipmentHome from './src/Screens/LoadingEquipment/EquipmentHome';
// import CustomSideequipment from './src/Screens/CustomSideequipment';
// import Equipmentvehicle from './src/Screens/LoadingEquipment/Equipmentvehicle';
// import rough from './src/Screens/LoadingEquipment/Rough';
// import OtpScreen from './src/Screens/OtpScreen';
// import colors from './src/Components/colors';
// import Rough from './src/Screens/LoadingEquipment/Rough';
// import Totalgvppoints from './src/Screens/TotalCleared/Totalgvppoints';


// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function FirstScreenStack() {
//   return (
//     <Stack.Navigator  
//     // initialRouteName="Splash" 
//       screenOptions={{headerShown: false}}>
//      <Stack.Screen name="Splash" component={Splash}   options={{headerShown:false}}      />
//       <Stack.Screen name="Login" component={Login}   options={{headerShown:false}}      />
//       <Stack.Screen name="OtpScreen" component={OtpScreen}   options={{headerShown:true, title:'OTP Screen', headerTintColor:colors.WHITE, headerStyle: {backgroundColor:colors.appred}, }}      />



//       <Stack.Screen name="Dashboard" component={Dashboard}   options={{headerShown:false}}      />
//       <Stack.Screen name="EquipmentDashboard" component={EquipmentDashboard}   options={{headerShown:false}}      />
//       <Stack.Screen name="Rough" component={Rough}   options={{headerShown:false}}      />
    
    


//     </Stack.Navigator>
//   );
// }


// function EquipmentDashboard() {

  
//   return (
   
//     <Drawer.Navigator
//     initialRouteName='EquipmentHome'
//     // drawerContent={props => <CustomSide {...props} />}
//     drawerContent={props => <CustomSideequipment {...props} />}
//     screenOptions={{
//       // headerShown: false,
//       drawerType: 'front',
//       gestureEnabled: false,
//       drawerStyle: {
//         width: '75%',
//       },
//     }}>


//       <Drawer.Screen 
//           name="EquipmentHome"
//       // name={Strings.Home}
      
//       options={{drawerLabel: 'EquipmentHome', title:'EquipmentHome', headerShown:false,
//         headerStyle: {backgroundColor:'#28df99'} }}
        
//         component={EquipmentHome} />

         
//         <Drawer.Screen name="Equipmentvehicle"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Equipmentvehicle} />
//         {/* <Drawer.Screen name="Payment"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Payment} /> */}
//         <Drawer.Screen name="VehicleMaster"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={VehicleMaster} />
//         <Drawer.Screen name="Todayquantity"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Todayquantity} />
//         <Drawer.Screen name="Monthquantity"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Monthquantity} />
    
        
//     </Drawer.Navigator>
//   );
// }





// function Dashboard() {

  
//   return (
   
//     <Drawer.Navigator
//     initialRouteName='Home'
//     drawerContent={props => <CustomSide {...props} />}
//     screenOptions={{
//       // headerShown: false,
//       drawerType: 'front',
//       gestureEnabled: false,
//       drawerStyle: {
//         width: '75%',
//       },
//     }}>


//       <Drawer.Screen 
//           name="Home"
//       // name={Strings.Home}
      
//       options={{drawerLabel: 'Home', title:'Home', headerShown:false,
//         headerStyle: {backgroundColor:'#28df99'} }} component={Home} />

         
//         <Drawer.Screen name="Register"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Register} />
//         {/* <Drawer.Screen name="Payment"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Payment} /> */}
//         <Drawer.Screen name="VehicleMaster"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={VehicleMaster} />
//         <Drawer.Screen name="Todayquantity"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Todayquantity} />
//         <Drawer.Screen name="Monthquantity"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Monthquantity} />
//         <Drawer.Screen name="Yearquantity"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Yearquantity} />
        
        
//         <Drawer.Screen name="PlannedVehicle"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={PlannedVehicle} />
//         <Drawer.Screen name="Total_Deployed_Vehicles"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Total_Deployed_Vehicles} />
//         <Drawer.Screen name="Not_Deployed_Vehicles"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Not_Deployed_Vehicles} />
//         <Drawer.Screen name="TotalTrips"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={TotalTrips} />
//         <Drawer.Screen name="GVPCleared"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={GVPCleared} />


//         <Drawer.Screen name="TotalCleared"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={TotalCleared} />
//         <Drawer.Screen name="HotspotsCleared"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={HotspotsCleared} />
//         <Drawer.Screen name="Reports"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Reports} />
       
//         <Drawer.Screen name="Maptrip"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Maptrip} />
//         <Drawer.Screen name="Mapview"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Mapview} />
//         <Drawer.Screen name="Totalgvppoints"  options={{  headerStyle: {backgroundColor:'#239F63'}, headerShown:false }}component={Totalgvppoints} />
       
        
        
//     </Drawer.Navigator>
//   );
// }


// function App () {
//   // const navigationRef=React.useRef();

//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const [loading, setLoading] = React.useState(true);

//   const getRegisteredData = async () => {
//     let data = await AsyncStorage.getItem('keepLoggedIn')
//     console.log('AsyncStorage.getItem.............', data);
//     setIsLoggedIn(data) //true
//     console.log('keeploggedIn', data);
//   }


//   React.useEffect(() => {
//     getRegisteredData();
//     setTimeout(() => setLoading(false), 1000);
//   }, [])
  
//   return(

// <>
//       {loading ? (
//         setLoading(false)
//       ) : (
//         <NavigationContainer>
//           {isLoggedIn ? <Dashboard /> : <FirstScreenStack />}
//         </NavigationContainer>
//       )}

//     </>





//   )
// }
// export default App;












// import React, { useState } from 'react';
// import { View, Dimensions, Button, Alert, StyleSheet, FlatList, Text } from 'react-native';
// import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
// import { getAreaOfPolygon } from 'geolib';

// const App = () => {
//   const [coordinates, setCoordinates] = useState([]);
//   const [areas, setAreas] = useState([]); 

//   const handleMapPress = (event) => {
//     const { coordinate } = event.nativeEvent;
//     setCoordinates([...coordinates, coordinate]);
//   };

//   const calculatePolygonArea = () => {
//     if (coordinates.length < 3) {
//       Alert.alert('At least 3 points are required to calculate area');
//       return 0;
//     }
//     const areaInSquareMeters = getAreaOfPolygon(coordinates);
//     const areaInAcres = areaInSquareMeters / 4046.86; 
//     return areaInAcres;
//   };

//   const handleCalculateArea = () => {
//     if (isPolygonClosed()) {
//       const area = calculatePolygonArea();
//       if (area) {
//         Alert.alert(
//           'Area',
//           `The area of the polygon is ${area.toFixed(2)} acres`,
//           [
//             {
//               text: 'OK',
//               onPress: () => addAreaToList(area), // Add area to list on OK
//             },
//           ]
//         );
//       }
//     } else {
//       Alert.alert('Polygon Not Closed', 'Please close the shape to calculate the area.');
//     }
//   };

//   const addAreaToList = (area) => {
//     setAreas((prevAreas) => [...prevAreas, area]); // Add area to the list
//     setCoordinates([]); // Clear coordinates for next shape
//   };

//   const isPolygonClosed = () => {
//     if (coordinates.length < 3) return false;
//     const firstPoint = coordinates[0];
//     const lastPoint = coordinates[coordinates.length - 1];
//     const distanceThreshold = 0.0001;

//     const distance = Math.sqrt(
//       Math.pow(lastPoint.latitude - firstPoint.latitude, 2) +
//       Math.pow(lastPoint.longitude - firstPoint.longitude, 2)
//     );

//     return distance < distanceThreshold;
//   };

//   const handleClear = () => {
//     setCoordinates([]);
//     Alert.alert('Cleared', 'The drawing has been cleared.');
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         style={styles.map}
//         mapType="satellite"
//         initialRegion={{
//           // 17.487337921369896, 78.39656533383919
//           latitude: 17.487337921369896,
//           longitude: 78.39656533383919,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         onPress={handleMapPress}
//       >
//         {coordinates.length > 0 && (
//           <Polyline
//             coordinates={coordinates}
//             strokeColor="#FF0000"
//             strokeWidth={2}
//           />
//         )}
//       </MapView>
//       <View style={styles.buttonContainer}>
//         <Button title="Calculate Area" onPress={handleCalculateArea} />
//         <Button title="Clear" onPress={handleClear} color="red" />
//       </View>
//       <FlatList
//         data={areas}
//         keyExtractor={(item, index) => index.toString()} // Use index as key
//         renderItem={({ item }) => (
//           <View style={styles.areaItem}>
//             <Text style={styles.areaText}>Area: {item.toFixed(2)} acres</Text>
//           </View>
//         )}
//         style={styles.areaList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: '70%', // Adjust map height to fit area list
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   areaList: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//   },
//   areaItem: {
//     paddingVertical: 5,
//   },
//   areaText: {
//     fontSize: 16,
//     color:'black'
//   },
// });

// export default App;








import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Splash from './src/Screens/Splash';
import Home from './src/Screens/Home';
import Mapview from './src/Screens/Mapview';
import BoundaryList from './src/Screens/BoundaryList';
import PolygonList from './src/Screens/PolygonList';
import colors from './src/Components/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Welcome', headerShown:false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome', headerShown:false}}
        />

<Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerShown:false}}
        />
        <Stack.Screen name="Mapview" component={Mapview} 
        options={{ title: 'Mapview', headerStyle: {
          // backgroundColor: '#E21E26'
          backgroundColor: colors.green
       } }}
        />
        <Stack.Screen name="BoundaryList" component={BoundaryList} />
        <Stack.Screen name="PolygonList" component={PolygonList}
        options={{ title: 'PolygonList', headerStyle: {
          // backgroundColor: '#E21E26'
          backgroundColor: colors.green
       } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App