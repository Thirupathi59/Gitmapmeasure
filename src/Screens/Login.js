
import React, { useState, useEffect } from 'react';
import {
  View, Text, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity,
  ToastAndroid, BackHandler, Alert, ScrollView,
  SafeAreaView
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './Loginstyle';
import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native';



const Login = () => {

  const navigation = useNavigation();
  const [Username, setusername] = useState('');
 

  useEffect(() => {
    const backAction = () => {
      Alert.alert(' ', 'Are you sure you want to go Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);




  return (
    <SafeAreaView style={styles.primary}>
      <View style={styles.container}>
        <Image source={require('../assets/icon2.jpg')}
          style={styles.logo} />
      </View>

      <View style={styles.titletext}>
        <Text style={styles.appTitle} >
          Test Application
        </Text>

        <View style={styles.secondaryview}>

          <View style={styles.inputnumber}>
            <View style={styles.iconview}>
              <FontAwesome name="mobile" color={'white'} size={33} marginTop={8} />
            </View>
            <TextInput
              placeholder='Mobile Number'
              placeholderTextColor={'#696A6C'}
              maxLength={10}
              keyboardType='numeric'
              style={styles.inputtext}
              value={Username}
              onChangeText={(text) => setusername(text.replace(/[^0-9]/g, ''))}
            />
          </View>
        </View>





        <View style={styles.buttonview1}>
          <View style={styles.buttonview}>
            <TouchableOpacity
              style={styles.Touchbutton}
              onPress={() => {
                if (Username.length == "") {
                  ToastAndroid.show('Enter Mobile Number', ToastAndroid.SHORT)
                  return;
                }
                else if (Username.length < 10) {
                  ToastAndroid.show("Invalid Mobile Number, it should 10 digits ", ToastAndroid.LONG,);  ////ToastAndroid.BOTTOM,
                }
                else {
                  navigation.navigate('Home')
                }
              }}
            >
              <Text style={styles.textgen}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>



      </View>

    </SafeAreaView>
    
  );
};




export default Login