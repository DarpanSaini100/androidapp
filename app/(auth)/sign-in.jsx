import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Formfile from '../../Components/Formfile'

const signIn = () => {
const[form , setform] = useState({
  email:'',
 passWord: ''
})

  return (
   <SafeAreaView className="flex-1 h-full bg-blue-600">
    <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6">
        <Text className="text-2xl text-white text-semibold mt-10 ">Log In to Imeleo</Text>
      <Formfile
      title="Email"
      value={form.email}
      handleChangeText={(e)=> setform({...form,
        email: e
      })}
      otherStyles="mt-7"
      keyboardType="email-address"
      />
      <Formfile
      title="Password"
      value={form.passWord}
      handleChangeText={(e)=> setform({...form,
        passWord: e
      })}
     otherStyles="mt-3"
      keyboardType="Password"
      />
         
      </View>
    </ScrollView>
   </SafeAreaView>
  ) 
}

export default signIn