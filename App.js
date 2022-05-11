import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import firebaseApp from './firebase';
import { getAuth } from 'firebase/auth';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const auth = getAuth();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator> 
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if (route.name === 'Search') {
              iconName = 'search';
            }
            else if (route.name === 'Feed') {
              iconName = 'ios-newspaper-outline'
            } 
            else if (route.name === 'Message') {
              iconName = 'chatbox-ellipses'
            }  
            else if (route.name === 'Profile') {
              return <MaterialCommunityIcons name="contacts" size={28} color={color}/>
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name='Feed' component={FeedScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Message' component={MessageScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
