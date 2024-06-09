import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text , View , Image } from  'react-native';
import { Redirect , router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants/images';
import CustomButton from '../Components/customButton';

export default function App(){
    return(
        <SafeAreaView className=" flex bg-white  ">
             <View className="flex-0 mt-3 px-4">
              <Image source={images.Logo}
                />
                </View>  
            <ScrollView  className=" bg-blue-600 h-full">
            <View className="flex-1 justify-center items-center w-full min-h-[85vh]  ">
            <Image source={images.ProfilePic}  className="justify-center items-center mt-4 max-w-[380px] w-full h-[300px] " resizeMode='contain'
                />
            <Text className="text-3xl mt-5 mb-3 text-white px-4 font-bold">Business Software Solutions And Services</Text>
            <Text className="text-1xl mt-5 mb-3 text-white px-4 font-bold">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.</Text>

            <StatusBar style="auto" />
            {/* <Link href="/home" className='text-yellow-400  mt-4 font-bold'>Let's get started</Link> */}
          
          <CustomButton 
          handlePress={()=> router.push('/sign-in')}/>
            </View>
           
            </ScrollView>

            <StatusBar backgroundColor='#161622'
            style='light'/>
        </SafeAreaView>
    );
}
 
