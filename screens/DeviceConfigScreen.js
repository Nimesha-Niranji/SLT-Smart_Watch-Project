import React from 'react'
import { StatusBar, Text, View, StyleSheet } from 'react-native'

const DeviceConfigScreen = () => {
  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080" />
        <Text>Hello device config</Text>
    </View>
  )
}

export default DeviceConfigScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    backgroundColor: '#000080',
    alignItems: 'center',
  },
})  
