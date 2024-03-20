import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './../Screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCourseScreen from '../Screens/MyCourseScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab =createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PURPLE
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon:(color,size)=>(<Ionicons name="home" size={24} color={color} />)
      }}/>
      <Tab.Screen name="MyCourse" component={MyCourseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    

    </Tab.Navigator>
  )
}