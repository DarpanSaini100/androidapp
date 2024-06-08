import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const profile: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text >Profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})