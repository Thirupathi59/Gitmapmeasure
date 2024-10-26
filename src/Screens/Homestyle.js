import { StyleSheet } from "react-native";
import colors from "../Components/colors";
import { moderateScale } from "../Components/stylrConfig";


export const styles = StyleSheet.create({
  Viewflex:
  { flex: 1, },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        // padding:20
      },

      headerview:
      {height:59, width:'100%', 
        // backgroundColor:'#E21E26',

        backgroundColor:colors.green,
         flexDirection:'row'},

        headersidemenu:

        {height:'100%', width:'15%',
        //  backgroundColor:'orange',
          },

          titleview:{height:'100%', width:'70%', 
          // backgroundColor:'blue', 
          justifyContent:'center', },



      headerttitle:
      {marginLeft:10,
         fontSize:20, 
         fontWeight:'500',
          color:'white'  },


          qrtouch:{
            justifyContent:'center',
           marginTop:20},

           qrtouch1:{
            justifyContent:'center',
           marginTop:5,},


        hearqrview:
        {height:20, 
            width:20,
             marginTop:20,
            marginLeft:'33%'},

            qrimage:
            {height:20,
                 width:20, 
                 resizeMode:'contain',},


        qrbg:
        { flex: 1,
             justifyContent: 'center', 
    alignItems: 'center',
     backgroundColor:'white' },

    
todayview:
{
    alignItems:'center',
 marginTop:-15
},


// menuview:
// {marginTop:30, 
//     marginLeft:10 },

menuview:
    {height:'100%', width:'100',  marginTop:30,
// backgroundColor:'orange'
},






    menutext:
    {color:'white', 
    fontSize:23},

    menutext1:
    {color:'white', 
    fontSize:15},

    menuicon:
    {height:30, width:30, 
        resizeMode:'contain'},

monthview:
{alignItems:'center',
 marginTop:10},

    dateview:{height:"100%", 
    width:'85%',
     justifyContent:'center',  },



 Dashbordstyle:{ height:'100%', 
 width:'100%', 
 backgroundColor:'white',
  marginTop:3},

  buttonView: {height:200, 
    width:'100%', 
    alignItems:'center',
    justifyContent:'center', },

    Touchabutton:{ flexDirection:'row' ,
       height:50, width:'85%', 
       alignItems:'center', 
       justifyContent:'space-around',
        // backgroundColor:'#000',
        backgroundColor:'#4081EC',

       borderRadius:5},

       buttontext:
       {
        color:'#fff',

         fontSize:18,
         fontWeight:'500', 
        textAlign:'center'},

  calenderview:{height:"100%", 
  width:'15%',
   backgroundColor:colors.appred,
    alignItems:'center',
   justifyContent:'center',
  //  borderTopLeftRadius:5,
  //  borderBottomLeftRadius:5,
  borderRadius:3
   
  
  
  },
///////// main/// 
    cardview: {height:80,
       width:'90%', 
       alignSelf:'center',
        marginTop:20,
         marginBottom:2, 
    color:'white'},


    cardtouchable:{height:'100%', 
    width:'100%',
     flexDirection:'row',
     backgroundColor:'white', 
     borderRadius:10},


     cardtouch:{height:'100%',
      width:'100%',
       flexDirection:'row', 
       backgroundColor:'white',
      borderRadius:10},

      lableview:{height:'99%',
       width:'75%',
       justifyContent:'center', },

       nametext:{color:'black', 
       fontSize:16,
       fontWeight:'400',
        marginLeft:10},

      numbers:{color:'black', 
      fontWeight:'800', 
      fontSize:20, 
      marginTop:5, 
      marginLeft:10},

      imageview:{height:'99%',
       width:'25%', 
       alignItems:'center',
        justifyContent:'center'},







            addbuttn: 
            {
                height:60,
                 width:60,
                  borderRadius:40,
                   backgroundColor:"#239F63",
                    alignItems:'center', 
                    justifyContent:'center',marginRight:30, marginTop:-30 },

                    addtext:
                    {
                        color:'white', 
                    fontSize:10,
                     marginTop:-3
                    },

/////

centeredView: {
  flex: 1,
  // justifyContent: 'center',
  // alignItems: 'center',
  width:50,
  // marginTop: 22,


},
modalView: {
  // margin: 20,
  backgroundColor: 'white',
  // borderRadius: 20,
  // padding: 35,
  width:250,
  height:'100%',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  // borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  // backgroundColor: '#2196F3',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
iconStyle: {
  height: moderateScale(15),
  width: moderateScale(31),
  resizeMode: 'contain',
  marginTop:20,
},

iconButtonView: {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  left: moderateScale(12),
},




versionContainer: {
  alignItems: 'center',
  // justifyContent: 'flex-end',
  // marginTop:100,
  marginVertical: 16,
 
  
},
versionText: {
  color: colors.appgray, // Choose the appropriate color for your version text
  fontSize: 14,
  fontWeight:'400',
  // marginTop:200
},
})