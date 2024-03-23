import { View, Text,Button } from 'react-native'
import React,{useContext, useEffect,useState} from 'react'
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';
import Header from '../Components/Header'
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';

export default function HomeScreen() {
  useEffect(()=>{
    getCategory();

  },[])
  const {auth,setAuth} =useContext(AuthContext)
  const [categories,setCategories] = useState()
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false)
        // User was logged out
    }
    
    }
    // Get Category List 
    const getCategory=()=>{
      GlobalApi.getCategory().then(resp=>{
        setCategories(resp.categories);
      })
};
  return (
    <View style={{padding :20 ,marginTop:25}}>
     <Header/>
     <CategoryList categories={categories}/>
      
    </View>
  )
}





{/* <Button title='Logout' onPress={handleLogout}/> */}