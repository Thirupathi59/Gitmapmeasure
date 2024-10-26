import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

    export const clearItem= async () => {
  
        try {
          await AsyncStorage.clear();
          navigation.navigate('Login');
          console.log('Cleared all AsyncStorage items');
          ToastAndroid.show('Session id Failed', ToastAndroid.LONG,);
        } catch (error) {
          console.error('Error clearing AsyncStorage:', error);
        }
      };
  


