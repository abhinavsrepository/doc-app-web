import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect} from 'react'
import { client } from './App/Utils/KindConfig';

import LoginScreen from './App/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';


export default function App() {
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
console.log(userProfile);
// output: {"given_name":"Dave","id":"abcdef","family_name":"Smith","email":"dave@smith.com"}
      console.log("Authenticated")
        // Need to implement, e.g: call an api, etc...
    } else {
      return <LoginScreen/>
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};

useEffect(() => {
    checkAuthenticate();
}, []);
  return (
    <View style ={styles.container}>
      {/* <LoginScreen/> */}
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
