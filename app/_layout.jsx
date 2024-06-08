import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown:false}}/>
   </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    Container: {
        flex:1,
        background:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})