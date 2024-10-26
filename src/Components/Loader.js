import React, { useState } from "react";
import {View,Text, } from 'react-native';
import Modal from "react-native-modal";
import { ActivityIndicator} from 'react-native-paper';
// import Metrics from '../../Constants/constants/metrics';


const Loader =(props)=>{
    // const {setIsModalVisible}=props
   // const [isModalVisible,setIsModalVisible]=useState(true)
         const {ismodalVisible}=props;
    return(
    <View>
     <Modal 
    //  animationType="fade"
    animationIn='fadeIn' 
     animationOut='fadeOut'
     isVisible={ismodalVisible}
      transparent={true}>

        <View 
        style={{ 
          backgroundColor:"white",
        height:80,width:'80%',
        borderRadius:5, alignSelf:'center' }}
        >

            <View 
            style={{marginTop:27,flexDirection: 'row',paddingLeft:5, marginLeft:10}}
            >
        <ActivityIndicator animating={ismodalVisible} color={`blue`} size={25} />
        <Text style={{color:'black', marginLeft:30}}>Loading </Text>
        </View>
         
        </View>
      </Modal>
    </View>
    )
}
export default Loader;