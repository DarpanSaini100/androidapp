import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../Components/Formfield'

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
        <FormField
        title="Email"
        value={form.email}
        handlechangeText={(e) => setform({...form,
          email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
          <FormField
        title="Password"
        value={form.passWord}
        handlechangeText={(e) => setform({...form,
          email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
      </View>
    </ScrollView>
   </SafeAreaView>
  ) 
}

export default signIn