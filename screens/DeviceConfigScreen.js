import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, StatusBar, TouchableOpacity } from 'react-native';
import { db2, auth } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import {Avatar} from '@rneui/base'
import {AntDesign} from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons';

const DeviceConfigScreen = () => {

  const [todoData, setTodoData] = useState([]);
  const [deviceID, setDeviceID] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const starCountRef = ref(db2, 'Device ID/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newDevice = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setTodoData(newDevice);
    });
  }, []);

  const handleDeviceIDChange = (text) => {
    setDeviceID(text);
  };

  const filterData = () => {
    const filtered = todoData.filter((item) => item.id === deviceID);
    setFilteredData(filtered);
    // Navigate to the MapDisplay screen with the filtered data
    //navigation.navigate('Map', { filteredData: filtered });
  };

  const showmap = () => {
    const filtered = todoData.filter((item) => item.id === deviceID);
    setFilteredData(filtered);
    // Navigate to the MapDisplay screen with the filtered data
    navigation.navigate('Map', { filteredData: filtered });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080"  />

      <View style={styles.container3} >

        <Text style={styles.signTxt} >Signout</Text>
        <TouchableOpacity onPress={signOut} >
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>

      </View>
    
      <View style={styles.container2} >
        
        {/* Text input to enter the device ID */}
        <TextInput
          style={styles.input}
          placeholder="Enter Device ID"
          placeholderTextColor='gray'
          value={deviceID}
          onChangeText={(text) => handleDeviceIDChange(text)}
        />

        {/* Button to trigger filtering */}
        <TouchableOpacity title='Get Data' style={styles.button} onPress={filterData} >
          <Text style={styles.txtBtn} >Get Data</Text>
        </TouchableOpacity>

      </View>

      {/* Display filtered data */}
      {filteredData.map((item, index) => (
        <View key={index}>

          <Text style={styles.normalText} >Longitude and Latitude Data of Your device</Text>
          <Text style={styles.text}>Longitude: {item.Longitude}</Text>
          <Text style={styles.text}>Latitude: {item.Latitude}</Text>
        
        </View>
      ))}

      <TouchableOpacity title='Location' style={styles.button} onPress={showmap} >
        <Text style={styles.txtBtn} >Location</Text>
        <EvilIcons name="location" size={28} color="black" />
      </TouchableOpacity>
        
    </View>
  )
}

export default DeviceConfigScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 16,
    alignItems: 'center',
    flexDirection:'column'
  },

  container2: {
    backgroundColor: '#000080',
    padding: 16,
    flexDirection:'row'
  },

  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom:20,
    marginLeft: 20,
    color:'#ADD8E6'
  },

  input: {
    height: 40,
    width:180,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth:2,
    borderRadius:8,
    fontSize:20,
    color:'white',
    marginEnd:15
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
    fontSize:20,
    textAlign:'center',
    marginEnd:10
  },

  normalText:{
    color:'#ADD8E6',
    fontSize:18,
    alignItems:'flex-start',
    marginBottom:20
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
  }
});
