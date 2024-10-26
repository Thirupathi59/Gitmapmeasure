// import React from 'react';
// import {
//   StatusBar,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,View
// } from 'react-native';
// // import {colors, images} from '../../themes';
// import colors from '../colors';
// import images from '../Images/images';
// import { moderateScale } from '../stylrConfig';
// import LinearGradient from 'react-native-linear-gradient';
// // import { View } from 'react-native-reanimated/lib/typescript/Animated';

// const Header = ({title, isBack, isDrawer, onPressBack, onPressDrawer}) => {
//   return (
//     <SafeAreaView style={{backgroundColor: colors.green}}>
//       <StatusBar backgroundColor={colors.appgray} barStyle={'light-content'} />
//       <SafeAreaView style={{opacity: moderateScale(0)}} />
//       {/* <LinearGradient
//         colors={['#C15B05', '#fa8408', '#F69732']}
//         angle={90}> */}
// <View 

//         style={styles.headerContainer}>
//         <TouchableOpacity
//           style={styles.iconButtonView}
//           onPress={isBack ? onPressBack : onPressDrawer}>
//           <Image
//             source={isBack ? images.back : images.hamburger}
//             style={styles.iconStyle}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>{title}</Text>
//       {/* </LinearGradient> */}
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   headerContainer: {
//     width: '100%',
//     height: moderateScale(60),
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     backgroundColor:'#239F63', 
//   },
//   headerText: {
//     textAlign: 'center',
//     alignSelf: 'center',
//     fontSize: moderateScale(22),
//     fontWeight: '500',
//     color: colors.WHITE,
//   },
//   iconButtonView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'absolute',
//     left: moderateScale(21),
//   },
//   iconStyle: {
//     height: moderateScale(21),
//     width: moderateScale(31),
//     resizeMode: 'contain',
//   },
// });
// export default Header;




import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,View
} from 'react-native';
// import {colors, images} from '../../themes';
// import { moderateScale } from '../../../Components/Images/styleConfig';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../stylrConfig';

import colors from '../colors';
import images from '../Images/images';
import Backicon from '../../assets/Backvector.svg'



const Header = ({title, isBack, isDrawer, onPressBack, onPressDrawer}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.green}}>
      <StatusBar backgroundColor={colors.appgray} barStyle={'light-content'} />
      <SafeAreaView style={{opacity: moderateScale(0)}} />
      {/* <LinearGradient
        colors={['#C15B05', '#fa8408', '#F69732']}
        angle={90}> */}
<View 

        style={styles.headerContainer}>




          {/* <View style={{height:56, width:'60%',
         
           justifyContent:'center'}}> 
        <TouchableOpacity
          style={styles.iconButtonView}
          onPress={isBack ? onPressBack : onPressDrawer}>
          <Image
            source={isBack ? images.back : images.hamburger}
            style={styles.iconStyle}
          />
        </TouchableOpacity>



        <Text style={styles.headerText}>{title}</Text>

        </View> */}


        {/* <View style={{height:56, width:'40%', 

}} >
        <Image
            source={isBack ? images.back : images.Header}
            style={styles.iconStyle1}
          />
     
      </View> */}


      <View style={{height:58, width:'15%', 
      // backgroundColor:'red', 
      justifyContent:'center', alignItems:'center'}}> 
      <TouchableOpacity
          style={styles.iconButtonView}
          onPress={isBack ? onPressBack : onPressDrawer}>
          {/* <Image
            source={isBack ? images.back : images.Back}
            style={styles.iconStyle}
          /> */}

<Backicon />
        </TouchableOpacity>
      </View>


      <View style={{height:58, width:'60%', 
      // backgroundColor:'blue', 
      justifyContent:'center'}}> 

      <Text adjustsFontSizeToFit style={styles.headerText}>{title}</Text>

      </View>


      <View style={{height:58, width:'25%', 
      // backgroundColor:'green',
       justifyContent:'center', alignItems:'center'}}> 

      <Image
            source={isBack ? images.back : images.Header}
            style={styles.iconStyle1}
          />

      </View>




      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: moderateScale(55),
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor:'#239F63', 
    backgroundColor:colors.appred
  },

  headerText: {
    // textAlign: 'center',
    // alignSelf: 'center',
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: colors.WHITE,
    
  },
  iconButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    // left: moderateScale(21),
    // backgroundColor:'red',

  },
  iconStyle: {
    height: moderateScale(20),
    width: moderateScale(31),
    resizeMode: 'contain',
    // marginLeft:10,
  },

  iconStyle1: {
    height: moderateScale(50),
    width: moderateScale(65),
    resizeMode: 'contain',
    // marginLeft:125
    // marginLeft:moderateScale(80),
  },


});
export default Header;
