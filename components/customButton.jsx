import { TouchableOpacity, Text } from 'react-native'
import React from 'react'



const CustomButton = ({handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} 
      activeOpacity={0.7}>
      <Text >Continue with Email</Text>
    </TouchableOpacity>
  )
}

export default CustomButton