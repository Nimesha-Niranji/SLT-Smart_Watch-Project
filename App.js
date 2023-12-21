import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterDoneScreen from './screens/RegisterDoneScreen';
import HomeScreen from './screens/HomeScreen';
import DeviceConfigScreen from './screens/DeviceConfigScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor: '#71FF88',
          height: 60,
          position: "absolute",
          borderRadius:8,
          margin:10
        }}} >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo name="home" size={24} color={focused ? "#FF0000" : "#111"} />
              <Text style={{ color: focused ? "#FF0000" : "#111" }}>HOME</Text>
            </View>
          ),
        }} 
      />

      <Tab.Screen
        name='DeviceConfig'
        component={DeviceConfigScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }} >
              <MaterialIcons name="devices" size={24} color={focused ? "#FF0000": "#111"} />
              <Text style={{ color: focused ? "#FF0000" : "#111" }}>DEVICE</Text>
            </View>
          )
        }}
      />
      
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='RegisterDone' component={RegisterDoneScreen} />
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


