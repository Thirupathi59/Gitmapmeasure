import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity
        onPress={()=>navigation.openDrawer()}
        > 

            <Text style={{color:'black'}}> side menu </Text>
        </TouchableOpacity>
      <Text style={{color:'black'}}>Register</Text>
    </View>
  )
}

export default Register