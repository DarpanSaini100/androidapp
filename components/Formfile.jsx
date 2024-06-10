import { View, Text , TextInput , TouchableOpacity, Image} from 'react-native'
import React , { useState}from 'react'

import{ icons } from '../constants/icons'

const Formfile = ({title, value , placeholder ,handleChangeText ,otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className=" text-white mt-2">{title}</Text>
      <View className="border-2 rounded-2xl border-blue-400 w-full h-16 px-4 bg-blue-500 item-center">
      <TextInput className="flex-1 text-white text-base"
      value={value}
      placeholder={placeholder}
      placeholderTextColor='#FFFFFF'
      onChangeText={handleChangeText}
      secureTextEntry={title === 'Password' && !showPassword}/>
      {title ==='Password' && (
        <TouchableOpacity onPress={()=>setshowPassword(!showPassword)}>
        <Image source={!showPassword ? icons.Eye : icons.Hideeye}/>
        </TouchableOpacity>
      )}
      </View>
     
    </View>
  )
}

export default Formfile