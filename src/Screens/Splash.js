
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native'
import React, {useEffect, useState} from 'react'





const Splash = ({navigation}) => {

  const fadeAnim = new Animated.Value(0);
  

    
useEffect(() => {

    setTimeout(async () => {
    const data = null;
   
      if (data == null) {
        navigation.navigate('Login')
      }
      else {
    //    navigation.navigate('Home')
    navigation.navigate('Home')
      }
    }, 2000)

  }, [])






  return (
    <View style={styles.container}>
      
      <Image 
      source={require('../assets/icon2.jpg')}
      style={styles.image} />

    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: { 
      height: 250,
       width: 250, 
       resizeMode: 'contain', 
       borderRadius:130,
    marginTop: 30 },


    logo: {
      width: 200,
      height: 200,
    },
  });