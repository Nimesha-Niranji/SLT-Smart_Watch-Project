import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SkipScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080" />
      <View style={styles.container3} >
      
        <Text style={styles.signTxt} >Back</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Entypo name="back" size={24} color="white" />
        </TouchableOpacity>

      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.txtNw1}>About Mobitel Innovation Centre</Text>
        <Text style={styles.txtNw2}>
          The innovation centre aims to promote research and to improve the productivity and quality of the products and services offered by Mobitel. It empowers Mobitel to innovate faster, increase collaboration with peers and compete more effectively. This can be counted as one of the major strategic breakthroughs for Mobitel in order to gain a competitive advantage among other ICT solution providers. We do offer products and services with cutting edge technologies to streamline consumer and business needs.
        </Text>

        <Text style={styles.txtNw2}>
          Mobitel Innovation Centre is leading the way to the future for customers, businesses and the industry. We improve lives by supporting our local communities, which is embedded in Mobile culture.
        </Text>

        <Text style={styles.txtNw2}>
          Located in: Trace Expert City
        </Text>

        <Text style={styles.txtNw2}>
          Address: 243 Maradana Rd, Colombo 01000
        </Text>
      </View>

      <View style={styles.contLogo}>
        <Image source={require('../assets/logoEmb.png')} style={styles.logoEmb} resizeMode='contain' />
      </View>
    </View>
  );
};

export default SkipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 16,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  contLogo: {
    marginBottom: 10,
  },

  logoEmb: {
    height: 150,
    width: 400,
    alignSelf: 'center',
  },

  txtNw1: {
    color: '#71FF88',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  txtNw2: {
    color: '#71FF88',
    fontSize: 15,
    marginBottom: 15,
    alignSelf: 'flex-start',
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
});
