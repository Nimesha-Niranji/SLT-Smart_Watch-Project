import LottieView from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const SplashScreen = ({navigation}) => {
   // setTimeout(() => {
  //   navigation.navigate('Login')
  // },3000)

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#000080'}} >
      <View style={styles.container} >

        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080"  />
        <LottieView source={require('../assets/aniwatch.json')} style={styles.lottie} resizeMode='contain' autoPlay loop />
        <TouchableOpacity title='Get Started' style={styles.button} onPress={() => navigation.replace('Login')}  >
          <Text style={styles.text} >Get Started</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Image source={require('../assets/logoEmb.png')} style={styles.logoEmb} resizeMode='contain' />
        </View>

      </View>
    </SafeAreaProvider>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoEmb: {
    height: 150,
    width: 400,
    alignSelf: 'center',
  },

  button: {
    height: 50,
    width: 300,
    backgroundColor: '#71FF88',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
  },

  lottie: {
    width: 200,
    height: 500,
    marginBottom: 10,
  },

  bottomContainer: {
    marginBottom: 20, // Adjust this value as needed
  },
})
