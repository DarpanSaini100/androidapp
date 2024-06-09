import { View, Text ,TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const FormField = ({title,value,placeholder,handleChangeText,otherSyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(False)
  return (
    <View className={`space-y-2 ${otherSyles}`}>
      <Text className="text-base text-gray-100 mt-4 mb-4">{title}</Text>
      <View className="border-2 border-blue-500 h-16 px-4 rounded-2xl item-center">
        <TextInput
        className="flex-1 text-white text-base "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      </View>
    </View>
  )
}

export default FormField