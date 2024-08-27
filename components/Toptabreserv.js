import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ImageBackground,
    Animated
    
} from 'react-native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SearchScreen} from './SearchScreen.js';
import {ReservationScreen} from './ReservationScreen.js';
import {SignUpScreen} from './SignUpScreen.js';
import {SignInScreen} from './SignInScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';
import train from '../assets/images/train.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
export const MyTabs = () => {
  return (
   
    <TopTab.Navigator
     screenOptions={{
       tabBarActiveTintColor:'#3A8CC2',
       tabBarLabelStyle: { fontSize: 12 },
     
     }}>
      <TopTab.Screen name="A venir" component={SignInScreen} />
      <TopTab.Screen name="Archiver" component={SignUpScreen} />
    </TopTab.Navigator>
  
  );
}