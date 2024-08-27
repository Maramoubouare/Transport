import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList, ScrollView} from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo';
import train from '../assets/images/train.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BusSchedule} from './BusSchedule.js';
import {TrainSchedule} from './TrainSchedule.js';
import {AvionSchedule} from './AvionSchedule.js';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
export const ScheduleScreen =({ route, navigation }) => {
  const { departureCity, arrivalCity, date, searchResults,arrivalDateString } = route.params;
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${departureCity} to ${arrivalCity}  (${date}) `,
    });
  }, [navigation, departureCity, arrivalCity]);

  return (
          <View style={[styles.container,{}]}>
          
              <View style={[styles.topview,{marginBottom:20}]}>
                 <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:20,color:"#fff",fontWeight:"bold"}}>{`${departureCity} → ${arrivalCity}`}</Text>
                 <Text style={{position:"absolute",top:30,textAlign:"center",fontSize:16,color:"#fff"}}>{date} </Text>
              </View>
             
              <View style={[styles.bottomview,{}]}>
              <TopTab.Navigator
     screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: '#3A8CC2',  
        // Change this to your desired color
      },
      tabBarStyle: { backgroundColor: '#f5f5f5' },
       tabBarActiveTintColor:'#000',
       tabBarLabelStyle: { fontSize: 20 },
       tabBarLabelStyle: {fontWeight: 'bold'},
     
     }}>
    
      <TopTab.Screen name="Bus" component={BusSchedule} initialParams={{ searchResults}} options={{
            tabBarLabel: () => null, // Supprime le label
            tabBarIcon: ({ color }) => (
              <IonIcon name="bus" color={color} size={24} />  // Remplacez par l'icône de votre choix
            ),
          }} />
      <TopTab.Screen name="Train" component={TrainSchedule} initialParams={{ searchResults }}  options={{
            tabBarLabel: () => null, // Supprime le label
            tabBarIcon: ({ color }) => (
              <IonIcon name="train" color={color} size={24} />  // Remplacez par l'icône de votre choix
            ),
          }}  />
           <TopTab.Screen name="Avion" component={AvionSchedule} initialParams={{ searchResults }}  options={{
            tabBarLabel: () => null, // Supprime le label
            tabBarIcon: ({ color }) => (
              <IonIcon name="airplane" color={color} size={24} />  // Remplacez par l'icône de votre choix
            ),
          }}  />
    </TopTab.Navigator>
             
             </View>
                </View>
         );
}   ;    
        

const styles = StyleSheet.create({
  topview:{
    marginTop:40,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 9,
    padding: 5,
    
  },
  
  bottomview:{
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#f5f5f5',
    marginTop:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
 
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
    
  },
  image:{
    flex:1,
    justifyContent: 'center',
 }, 
 card: {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 15,
  marginVertical: 7,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
    
},
cardHeader: {
  marginBottom: 20,
},
companyName: {
  fontSize: 20,
  fontWeight: 'bold',
  color:'#3A8CC2'
},
cardBody: {},
route: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
location: {
  alignItems: 'center',
},
time: {
  alignItems: 'center',
},
city: {
  marginTop: 5,
  fontSize: 16,
},
timeText: {
  marginTop: 5,
  fontSize: 16,
},
details: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
detailItem: {
  alignItems: 'center',
},
detailText: {
 color:'grey',
  fontSize: 15,
},
});