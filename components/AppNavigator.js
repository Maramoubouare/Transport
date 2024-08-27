import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import {SearchScreen} from './SearchScreen.js';
import {SignInScreen} from './SignInScreen.js';
import {SignUpScreen} from './SignUpScreen.js';
import {HomeScreen} from './HomeScreen.js';
import {ScheduleScreen} from './ScheduleScreen.js';
import {PaymentScreen} from './paymentScreen.js';
import {InfoScreen} from './InfoScreen.js';
import {TabNavigator} from './MyTab';
import {ReservationScreen} from './ReservationScreen.js';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import train from '../assets/images/train.jpg';


const Stack = createStackNavigator();
 export const AppNavigator = () =>  {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="sign" component={SignInScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="schedule" component={ScheduleScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="info" component={InfoScreen} />
      <Stack.Screen name="search" component={TabNavigator} />
      <Stack.Screen name="reservation" component={TabNavigator} />
      
      

    </Stack.Navigator>
    
  );
}

  
const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;