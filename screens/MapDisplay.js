import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Entypo } from '@expo/vector-icons';

const MapDisplay = ({ route, navigation }) => {
    const { filteredData } = route.params;
  
    // Assuming there's only one item in filteredData
    const { Longitude, Latitude } = filteredData[0] || {};

    if (Latitude === null || Longitude === null) {
      // Don't render the MapView until you have the latitude and longitude
      return null;
    }
    
    const tokyoRegion = {
      latitude: Latitude,
      longitude: Longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
        
    };
  
    return (
      <View style={styles.container}>

        <View style={styles.container3} >
      
        <Text style={styles.signTxt} >Back</Text>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')} >
          <Entypo name="back" size={24} color="white" />
        </TouchableOpacity>

        </View>

        <Text style={styles.text} >Location of Your device</Text>
        <Text style={styles.normalText}>Longitude: {Longitude}</Text>
        <Text style={styles.normalText}>Latitude: {Latitude}</Text>

        <MapView style={styles.map} initialRegion={tokyoRegion} >
          <Marker coordinate={tokyoRegion} />
        </MapView>

      </View>
    );
  };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 16,
  },

  map:{
    marginTop:30,
    overflow: 'hidden',
    flex:1,
    borderRadius:8
  },

  container3: {
    flexDirection:'row',
    alignSelf:'flex-end'
  },

  signTxt:{
    marginEnd:10,
    color:'white',
    fontSize:15,
    marginStart:30
  },

  normalText:{
    color:'#ADD8E6',
    fontSize:18,
    marginBottom:8,
    marginStart:20
  },

  text:{
    color:'#71FF88',
    fontSize:18,
    alignSelf:'flex-start',
    marginBottom:8
  },
  
});

export default MapDisplay;