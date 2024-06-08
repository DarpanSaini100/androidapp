import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Home: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Home</Text>
    </View>
  )
}

export default Home