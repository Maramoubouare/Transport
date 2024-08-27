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
    Modal
    
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
import train from '../assets/images/train.jpg';
import transport from '../assets/images/transport.jpg';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import {AppNavigator} from './AppNavigator.js';
import { Dropdown } from 'react-native-element-dropdown';
import { AuthContext } from '../components/context';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
const data = [
  {
    id: '1',
    type:'bus',
    companyName: 'Sonef',
    departureTime: '08:00 AM',
    arrivalTime: '10:00 AM',
    travelTime: '2 ',
    departureCity: 'Bamako',
    arrivalCity: 'Koulikoro',
    price: '50',
    numberOfPeople: '3',
    date:'2024-05-31',
  },
  {
    id: '2',
    type:'train',
    companyName: 'Diarra Transport ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '5',
    departureCity: 'Bamako',
    arrivalCity: 'Kayes',
    price: '40',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
  {
    id: '3',
    type:'bus',
    companyName: 'Diarra Transport ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '4',
    departureCity: 'Bamako',
    arrivalCity: 'Kita',
    price: '25',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
  {
    id: '4',
    type:'bus',
    companyName: 'Somatra ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '6',
    departureCity: 'Bamako',
    arrivalCity: 'Kidal',
    price: '35',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
  {
    id: '5',
    type:'bus',
    companyName: 'Bani ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '2',
    departureCity: 'Bamako',
    arrivalCity: 'Segou',
    price: '40',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
  {
    id: '6',
    type:'avion',
    companyName: 'Bani ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '5',
    departureCity: 'Bamako',
    arrivalCity: 'Mopti',
    price: '45',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
  {
    id: '7',
    type:'avion',
    companyName: 'Sonef ',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    travelTime: '2',
    departureCity: 'Bamako',
    arrivalCity: 'Nionon',
    price: '45',
    numberOfPeople: '2',
    date:'2024-05-31',
  },
];



export const SearchScreen = () => {
  const [departureCity, setDepartureCity] =useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [numberOfPeople, setnumberOfPeople] = useState('');
  const nav = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://10.192.54.205:8000/api/tickets');
      const trips = response.data;
      const formattedDate = date.toISOString().split('T')[0];
      const results = trips.filter(item =>
        item.departureCity.toLowerCase().includes(departureCity.toLowerCase()) &&
        item.arrivalCity.toLowerCase().includes(arrivalCity.toLowerCase()) &&
        (!formattedDate || item.date === formattedDate)
      );
      // Navigation vers l'écran suivant avec les résultats de recherche
      nav.navigate('schedule', { searchResults: results, departureCity, arrivalCity, date: formattedDate });
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  
  const [animation] = useState(new Animated.Value(0));
  const handleExchangeCities = () => {
    // Échange les valeurs de départ et d'arrivée
    const temp = departureCity;
    setDepartureCity(arrivalCity);
    setArrivalCity(temp);
  };
  
  const handleSubmit = () => {
    // Logique de traitement de la réservation
    // Peut être ajoutée ici
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  const [gender, setGender] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [isArrivalPickerVisible, setArrivalPickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);
  const handleDepartureChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDeparturePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleArrivalChange = (event, selectedDate) => {
    const currentDate = selectedDate || arrivalDate;
    setShowArrivalPicker(Platform.OS === 'ios');
    setArrivalDate(currentDate);
  };
  const handleResetDate = () => {
  
    setArrivalDate(null);
    
    setShowArrivalPicker(false);
  };
  return (
    
      <View style={styles.container}>
           <ImageBackground source={train} resizeMode='cover' style={styles.image} >
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styles.header}>
       

    </View>
    </ImageBackground>
    
    <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
    >
       <View style={styles.head} >
       <Text style={styles.text_header}>Où désieriez-vous voyager?</Text>
     </View>
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
      
        <MaterialIcons name="location-on" size={24} color='#3A8CC2'/>
        <TouchableOpacity
        style={styles.input}
        onPress={() => setPickerVisible(true)}
      >
        <Text style={styles.pickerButtonText}>
          {departureCity ? departureCity : 'Ville de départ'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isPickerVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={departureCity}
              onValueChange={(itemValue) => {
                setDepartureCity(itemValue);
                setPickerVisible(false);
              }}
            >
              <Picker.Item label="Selectionner La ville " value="" />
              <Picker.Item label="Bamako" value="Bamako" />
              <Picker.Item label="Koulikoro" value="Koulikoro" />
              <Picker.Item label="Kayes" value="Kayes" />
              <Picker.Item label="Kita" value="Kita" />
              <Picker.Item label="Kidal" value="Kidal" />
              <Picker.Item label="Mopti" value="Mopti" />
              <Picker.Item label="Nionon" value="Nionon" />
              <Picker.Item label="Nioro" value="Nioro" />
              <Picker.Item label="Senou" value="Senou" />
              <Picker.Item label="Segou" value="Segou" />
              <Picker.Item label="Sikasso" value="Sikasso" />
              <Picker.Item label="Tombouctou" value="Tombouctou" />
            </Picker>
          </View>
        </View>
        </Modal>

              <TouchableOpacity style={styles.exchangeButton} onPress={handleExchangeCities}>
          <MaterialIcons name="swap-vert" size={24} color='#3A8CC2'/>
        </TouchableOpacity>
        </View>
    
        
        <View style={styles.inputContainer}>
      
      <MaterialIcons name="location-on" size={24} color='#3A8CC2'/>
      <TouchableOpacity
      style={styles.input}
      onPress={() => setArrivalPickerVisible(true)}
    >
      <Text style={styles.pickerButtonText}>
        {arrivalCity ? arrivalCity : "Ville d'arrivée"}
      </Text>
    </TouchableOpacity>
    <Modal
        visible={isArrivalPickerVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={arrivalCity}
              onValueChange={(itemValue) => {
                setArrivalCity(itemValue);
                setArrivalPickerVisible(false);
              }}
            >
             <Picker.Item label="Selectionner La ville " value="" />
              <Picker.Item label="Bamako" value="Bamako" />
              <Picker.Item label="Koulikoro" value="Koulikoro" />
              <Picker.Item label="Kayes" value="Kayes" />
              <Picker.Item label="Kita" value="Kita" />
              <Picker.Item label="Kidal" value="Kidal" />
              <Picker.Item label="Mopti" value="Mopti" />
              <Picker.Item label="Nionon" value="Nionon" />
              <Picker.Item label="Nioro" value="Nioro" />
              <Picker.Item label="Senou" value="Senou" />
              <Picker.Item label="Segou" value="Segou" />
              <Picker.Item label="Sikasso" value="Sikasso" />
              <Picker.Item label="Tombouctou" value="Tombouctou" />
            </Picker>
          </View>
        </View>
      </Modal>

        </View>
        <View style={styles.inputContainer}>
        <MaterialIcons name="date-range" size={24} color='#3A8CC2' />
        
         
              <Text style={styles.input}>
              Date de départ
              </Text>
            

              <DateTimePicker
                testID="departureDateTimePicker"
                value={date || new Date()}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDepartureChange}
              />
          
          </View>
         
        
        <TouchableOpacity
              
              style={styles.signIn}
              onPress={handleSearch}

          >
          <LinearGradient
              colors={['#3A8CC2', '#3A8CC2']}
              style={styles.signIn}
          >
              <Text style={[styles.textSign, {
                  color:"#FFF"
              }]}>Rechercher</Text>
          </LinearGradient>
          </TouchableOpacity>
          <View >
          <Text style={styles.text}>Comment cela fonctionne-t-il?</Text>
     
        
      
      <View style={styles.separator} />
      <View style={styles.textContainer}>
      <Icon name="search-circle" size={40} color='#3A8CC2' />
      <Text style={styles.text}>Chercher</Text>
      </View>
      <Text style={styles.content}>
Trouvez des bus,trains et des vols à travers tout le mali, et toute l'Afrique.
      </Text>
      
      <View style={styles.separator} />
      <View style={styles.textContainer}>
      <Icon name="checkmark-circle" size={30} color='#3A8CC2' />
      <Text style={styles.text}>Comparez</Text>
      </View>
      <Text style={styles.content}>
       Choisissez le trajet le plus rapide et économique parmi les offres de nos partenaires.
      </Text>
      
      <View style={styles.separator} />

      <View style={styles.textContainer}>
      <Icon name="bag-check" size={30} color='#3A8CC2' />
      <Text style={styles.text}> Réservez</Text>
      </View>
      <Text style={styles.content}>
    Réservez vos billets, peu importe où vous soyez.
      </Text>
     
      </View>
        </ScrollView>
    </Animatable.View>
  </View>
);
};


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
        flex: 2,
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
      picker: {
        height: 50,
        marginBottom: 12,
      },
      pickerButtonText: {
        fontSize: 14,
        
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      pickerContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 16,
      },
    });
    
    export default SearchScreen;
  