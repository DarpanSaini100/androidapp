import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const Bookmark: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Bookmark</Text>
    </View>
  )
}

export default Bookmark