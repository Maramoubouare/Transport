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

const Tab = createBottomTabNavigator();
export const TabNavigator = () =>  {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
  
            if (route.name === 'search') {
              iconName = 'search-sharp';
            } else if (route.name === 'reservation') {
              iconName = 'book-sharp';
            } 
  
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#02adea',
          tabBarInactiveTintColor: 'gray',

        })}
      >
        <Tab.Screen name="search" component={SearchScreen} options={{headerShown: false}}/>
      <Tab.Screen name="reservation" component={ReservationScreen} options={{headerShown: false}} />
     
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
 
  container: {
    flex: 1, 
    backgroundColor:"#fFF",
    
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 10,
    
},
image:{
   flex:1,
   justifyContent: 'center',
},
footer: {
    flex: 2,
    backgroundColor:'#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 9,

},
  text_header: {
      color: '#0088cc',
      fontWeight: 'bold',
      fontSize: 20
  },
  text_footer: {
      color: '#fff',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom:12
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  },
  dropdown: {
    height: 50,
    borderColor: PRIMARYCOLOR,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  liste:{
   
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  head: {
    marginBottom:14,
  },
  textContainer:{
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 12,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:12,
    color:'#3A8CC2',
    backgroundColor:'#e5e5e9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 12,
  },
  input: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#e5e5e9',
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
    

  },
  exchangeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  content: {
    fontSize: 13,
 
    
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

