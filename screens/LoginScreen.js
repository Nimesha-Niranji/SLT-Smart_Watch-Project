import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native'
import LottieView from 'lottie-react-native'
import { Input } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
          navigation.navigate('Home');
      } else {
          navigation.canGoBack() && navigation.popToTop();
      }
    });
    return unsubscribe
  },[])

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#000080'}} >
    <View style={styles.container} >

        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080"  />
        <LottieView source={require('../assets/login.json')} style={styles.lottie} resizeMode='contain' autoPlay />
        <Text style={styles.text} >Login</Text>
        <Input 
            style= {styles.input}
            placeholder='Enter Email'
            value={email}
            label= 'Email'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'email', color: 'white'}}
            leftIconContainerStyle= {styles.leftIcon}
            onChangeText={text => setEmail(text)} />

        <View style={styles.passwordView}>
        <Input 
            style= {styles.input}
            placeholder='Enter Password'
            label= 'Password'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'lock', color: 'white'}}
            leftIconContainerStyle = {styles.leftIcon}
            secureTextEntry= {isPasswordShown}
            value={password}
            onChangeText={text => setPassword(text)} /> 

        <TouchableOpacity 
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={styles.isPassword} >
            {
                isPasswordShown == true ? (
                    <Ionicons name='eye-off' size={24} color='white' />
                ) : (
                    <Ionicons name='eye' size={24} color='white' />
                )
            }    
        </TouchableOpacity>
        </View>    

        <TouchableOpacity title='Login' style={styles.loginBtn} onPress={signIn} >
            <Text style={styles.textLoginBtn} >Login</Text>
        </TouchableOpacity>

        <View style={{width:'95%',marginBottom:10}} >
            <Text style={{fontSize:17,color:'#818181',alignSelf:'center',paddingTop:20,textDecorationLine:'underline'}}>
                Forgot Password?
            </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }} >
            <View style={{flex:1, height:1, backgroundColor:'#808080', marginHorizontal:10}} />
            <Text style={{ fontSize: 16, color:'#808080', }}>Or Register</Text>
            <View style={{flex:1, height:1, backgroundColor:'#808080', marginHorizontal:10}} />
        </View>

        <TouchableOpacity title='Register' style={styles.loginBtn} onPress={() => navigation.navigate('Register')} >
            <Text style={styles.textLoginBtn} >Register</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }} >
            <View style={{flex:1, height:1, backgroundColor:'#808080', marginHorizontal:10}} />
            <Text style={{ fontSize: 16, color:'#808080', }}>Or Skip</Text>
            <View style={{flex:1, height:1, backgroundColor:'#808080', marginHorizontal:10}} />
        </View>

        <TouchableOpacity title='Skip' style={styles.loginBtn} >
            <Text style={styles.textLoginBtn} >Skip</Text>
        </TouchableOpacity>

    </View>
    </SafeAreaProvider>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    backgroundColor: '#000080',
    alignItems: 'center',
  },

  lottie:{
    height:100,
    width:50
  },

  text:{
    fontSize:40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom:30
  },

  label: {
    color:'white',
    marginLeft:10,
  },

  leftIcon: {
    color: 'white',
    marginRight: 5,
    marginLeft:10
  },

  input: {
    color: 'white',
    borderColor: 'white',
  },

  loginBtn: {
    width: 300,
    height:40,
    borderRadius: 8,
    backgroundColor: '#71FF88',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },

  textLoginBtn: {
    color:'black',
    fontWeight: 'bold',
    fontSize:20,
  },

  isPassword: {
    position: "absolute",
    right: 12
  },

  passwordView: {
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
    marginBottom:20
  },
  
})
