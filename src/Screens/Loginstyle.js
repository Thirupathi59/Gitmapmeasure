import { StyleSheet } from "react-native";

import colors from "../Components/colors";


export const styles = StyleSheet.create({

  primary: { flex: 1, },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    height: 250,
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  appTitle: {
    fontWeight: '800',
    color: '#000',
    fontSize: 22,
    // marginBottom: 20,
    alignSelf: 'center'

  },

  secondaryview:
  { marginTop: 30, 
    height: 50, 
    width: '85%', 
    alignSelf: 'center', 
    alignItems: 'center', },

  titletext:{ marginTop: 30,
     height: 300,
      width: '98%',
      alignSelf: 'center', 
      alignItems: 'center', },
  connectionWarning: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionWarningText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 100,
    marginTop: 30
  },





  title: {
    fontWeight: '800',
    color: '#E21E26',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 15
  },

  inputnumber:
  {
    height: 52,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row'
  },

  iconview: {
    height: 50,
    width: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },


  inputtext:
  {
    color: 'black',
    paddingLeft: 10,
    width: '85%', fontSize: 20
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

  buttonview:

  {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    borderRadius: 10,

  },

  buttonview1:{ marginTop: 15,
     height: 50, 
    width: '85%', 
    alignSelf: 'center',
     alignItems: 'center', },

  Touchbutton:
  {
    height: 50,
    width: '100%',
    backgroundColor: '#231F20',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textgen:
  {
    color: 'white',
    fontSize: 22,
    fontWeight: '700'
  },

  passwrdview:
  {
    height: 52,
    width: '100%',
    borderWidth: 1,
    borderRadius: 11,
    flexDirection: 'row',
    alignSelf: 'center'
  },

  otptext:
  {
    color: colors.BLACK,
    marginLeft: 0
  },

  otptochview:
  {
    alignItems: 'center',
    marginTop: 20,
    width: 350,
    borderRadius: 10,
    marginBottom: 10
  },


  resendotpview:
  {
    flexDirection: 'row',
    margin: 10,
    marginTop: 10
  },

  grayresend:
  {
    color: 'gray',
    fontSize: 15
  },
  redresend:
  {
    color: 'red',
    fontSize: 15
  },

  normaltext:
  {
    color: 'black',
    fontSize: 15
  },


  submitview:

  {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10
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
    fontWeight: '400',
    // marginTop:80
  },

})


