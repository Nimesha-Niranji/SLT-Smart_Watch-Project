import React, {useState} from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity,TextInput, Keyboard } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { auth, firebase } from '../firebase';

const HomeScreen = () => {

  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  };

  const todoRef = firebase.firestore().collection('newData');
  const [addData, setAddData] = useState('');

  const addField = () => {
    if(addData && addData.length > 0){
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp,
        user:{
          _id: auth?.currentUser?.email ,
          name: auth?.currentUser?.displayName,
          avatar: auth?.currentUser?.photoURL,
        }
      };

      todoRef.add(data).then(() => {
        setAddData('');
        Keyboard.dismiss();
      })
      .catch((error) => {
        alert(error)
      })
    }
  }

  return (
    <View style={styles.container} >

      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080" />

      <View style={styles.container3} >

        <Text style={styles.signTxt} >Signout</Text>
        <TouchableOpacity onPress={signOut} >
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>

      </View>

      <Text style={styles.txtNw1}> Welcome! {auth?.currentUser?.displayName} </Text>
      <Text style={styles.txtNw2} > Email: {auth?.currentUser?.email} </Text>

      <TextInput 
        style={styles.input}
        placeholder='Enter Your Description'
        placeholderTextColor='gray'
        onChangeText={(heading) => setAddData(heading)}
        value={addData}
        multiline={true}
        underlineColorAndroid='transparent'
        autoCapitalize='none'
      />

      <TouchableOpacity style={styles.button} onPress={addField}>
        <Text style={styles.txtBtn}>Add Description</Text>
      </TouchableOpacity>

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

  input:{
    height: 40,
    width:300,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth:2,
    borderRadius:8,
    fontSize:20,
    color:'white',
    marginEnd:15,
    marginTop:15,
    alignSelf:'center'
  },

  button:{
    width: 150,
    height:40,
    borderRadius: 8,
    backgroundColor: '#71FF88',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },

  txtBtn:{
    color:'black',
    fontWeight:'500',
    fontSize:15,
    textAlign:'center',
    marginEnd:10
  },

  txtNw1:{
    color:'#71FF88',
    fontSize:25,
    marginTop:10,
    marginBottom:10,
    alignSelf:'flex-start'
  },

  txtNw2:{
    color:'#71FF88',
    fontSize:15,
    //marginTop:10,
    marginBottom:15,
    alignSelf:'flex-start'
  },
})  
