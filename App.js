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