import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, BackHandler, Alert, SafeAreaView
} from 'react-native'
import React, { useEffect, useState } from 'react'




import { styles } from './Homestyle';
import Mapview from '../assets/maplogo.svg'
import MENU from '../assets/sidemenu.svg'
import { useNavigation } from '@react-navigation/native';



const Home = () => {


  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.Viewflex}>
    <View style={styles.container}>
    <View style={styles.headerview}>
        <View style={styles.headersidemenu}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            // onPress={() => navigation.openDrawer()}
            >
            <MENU marginTop={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleview}>
          <Text style={styles.headerttitle}>
            Home
          </Text>
        </View>

      </View>

      <View style={styles.buttonView}>
<TouchableOpacity 
style={styles.Touchabutton}
onPress={()=>navigation.navigate('Mapview')}

>

<Text style={styles.buttontext}>
  Map Calculate
</Text>

<Mapview height={25} width={25} />
</TouchableOpacity>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default Home