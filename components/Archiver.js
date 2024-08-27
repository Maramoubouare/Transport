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
    Animated,
    Image
    
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CustomCard} from './CustomCard';
import car from '../assets/images/car.jpg';
import photo from '../assets/images/photo.jpg';
import reservation from '../assets/images/reserv.jpg';
import transport from '../assets/images/transport.jpg';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import HomeScreen from './HomeScreen.js';
import { Dropdown } from 'react-native-element-dropdown';
import { AuthContext } from '../components/context';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {SignUpScreen} from './SignUpScreen.js';
import {SignInScreen} from './SignInScreen.js';

export const Archiver = () => {
    
  return (
 
    <View style={styles.container}>
     
    <Image
      source={reservation}
      style={styles.image}
      resizeMode='contain' 
    />
    <View>
        <Text style={styles.text_footer}>Où sont tous les voyages ?</Text>
        </View>
        <View>
        <Text  style={styles.content} >Oh oui, vous n'avez encore rien fait. Allons-y, on y va!</Text>
        </View>
        
  </View>
  )
};


const styles = StyleSheet.create({
 
      container: {
        flex: 1,
  backgroundColor:"#fff",
        alignItems: 'center',
    
        
      },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 10,
        
    },
    image:{
       
        justifyContent: 'center',
        width: 320, // largeur de l'image en pixels
        height: 200, 
       marginBottom: 12,
    },
    footer: {
        flex: 2,
        backgroundColor:'#fff',
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
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          justifyContent:'center',
           alignItems: 'center',
           marginBottom: 12
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
          width: '80%',
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
        marginBottom:25
            
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


    
    export default Archiver;
  