import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect,useState,createContext} from 'react'
import { client } from './App/Utils/KindConfig';

import LoginScreen from './App/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export const AuthContext=createContext()
export default function App() {

  const [auth,setAuth]=useState(false);
  useEffect(()=>{
    checkAuthenticate();
  },[auth])
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setAuth(true)

        
    } else {
      setAuth(false)
      // return <LoginScreen/>
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};

useEffect(() => {
    checkAuthenticate();
}, []);
  return (
    <View style ={styles.container}>
      {/* <LoginScreen/> */}
      <AuthContext.Provider value={{auth,setAuth}}>
      <NavigationContainer>
      {auth? <TabNavigation/>:<LoginScreen/>}
      </NavigationContainer>
      </AuthContext.Provider>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
