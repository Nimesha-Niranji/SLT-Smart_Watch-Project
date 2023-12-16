import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { Input } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'

const RegisterScreen = () => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#000080'}} >
    <View style={styles.container}>
        <LottieView source={require('../assets/register.json')} style={styles.lottie} resizeMode='contain' autoPlay />
        <Text style={styles.text} >Register</Text>
        <Input 
            style= {styles.input}
            placeholder='Enter Name'
            //value={email}
            label= 'Name'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'person', color: 'white'}}
            leftIconContainerStyle= {styles.leftIcon} />

        <Input 
            style= {styles.input}
            placeholder='Enter Email'
            //value={email}
            label= 'Email'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'email', color: 'white'}}
            leftIconContainerStyle= {styles.leftIcon} />    
        
        <Input 
            style= {styles.input}
            placeholder='Enter Device ID'
            //value={email}
            label= 'Device ID'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'devices', color: 'white'}}
            leftIconContainerStyle= {styles.leftIcon} />

        <View style={styles.passwordView}>
        <Input 
            style= {styles.input}
            placeholder='Enter Password'
            label= 'Password'
            labelStyle = {styles.label}
            leftIcon={{type:'material', name:'lock', color: 'white'}}
            leftIconContainerStyle = {styles.leftIcon}
            secureTextEntry= {isPasswordShown} /> 
            

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

        <TouchableOpacity title='Register' style={styles.loginBtn} >
            <Text style={styles.textLoginBtn} >Register</Text>
        </TouchableOpacity>

    </View>
    </SafeAreaProvider>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'center',
      backgroundColor: '#000080',
      alignItems: 'center'
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
})    
