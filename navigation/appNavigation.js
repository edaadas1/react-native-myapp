import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import LocationScreen from '../screens/LocationScreen';
import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';
import CoffeeDetailsScreen from '../screens/CoffeeDetailsScreen';
import LikesScreen from '../screens/LikesScreen';
import BasketScreen from '../screens/BasketScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen}/>
        <Stack.Screen name="Notification" options={{headerShown:false}} component={NotificationScreen}/>
        <Stack.Screen name="Location" options={{headerShown:false}} component={LocationScreen}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignupScreen}/>
        <Stack.Screen name="CoffeeDetails" options={{headerShown:false}} component={CoffeeDetailsScreen}/>
        <Stack.Screen name="Likes" options={{headerShown:false}} component={LikesScreen}/>
        <Stack.Screen name="Basket" options={{headerShown:false}} component={BasketScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default AppNavigation