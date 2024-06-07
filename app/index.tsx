import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>Home hi there i am now starting doing good things</Text>
            <Link href="/details"> view details</Link>
        </View>
        );
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   },
});