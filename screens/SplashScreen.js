import React from 'react'
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'

const SplashScreen = ({navigation}) => {
  // setTimeout(() => {
  //   navigation.navigate('Login')
  // },3000)

  return (
    <View style={styles.container} >

      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080"  />
      <LottieView source={require('../assets/watch.json')} style={styles.lottie} resizeMode='contain' autoPlay />
      <TouchableOpacity title='Get Started' style={styles.button} >
        <Text style={styles.text} >Get Started</Text>
      </TouchableOpacity>
      <Image source={require('../assets/logoEmb.png')} style={styles.logoEmb} resizeMode='contain' />
    
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    backgroundColor: '#000080',
    alignItems: 'center'
  },

  logoEmb:{
    height:150,
    width:400,
    alignItems: 'center',
  },

  button:{
    height:50,
    width:300,
    backgroundColor: '#71FF88',
    borderRadius: 8,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text:{
    fontSize:25,
  },

  lottie: {
    width: 200,
    height: 500,
    marginBottom:10
  },
})
