import React from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { auth } from '../firebase';

const HomeScreen = () => {

  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <View style={styles.container} >

      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080" />

      <View style={styles.container3} >

        <Text style={styles.signTxt} >Signout</Text>
        <TouchableOpacity onPress={signOut} >
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>

      </View>

      <Text>Hello Home Page</Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 16,
    alignItems: 'center',
    flexDirection:'column'
  },

  container3: {
    backgroundColor: '#000080',
    flexDirection:'row',
    alignSelf:'flex-end'
  },

  signTxt:{
    marginEnd:10,
    color:'white',
    fontSize:15
  },
})  
