import React, { useState } from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,Modal, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard.js';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo.js';
import SvgQRCode from 'react-native-qrcode-svg';
import {LinearGradient} from 'expo-linear-gradient';
export const InfoScreen = ({ route }) => {
  const { item } = route.params;
  const { departureCity, arrivalCity, date } = item;
  const [modalVisible, setModalVisible] = useState(false);
  const [seatChoice, setSeatChoice] = useState(null);
  const [numPassengers, setNumPassengers] = useState('');
  const [passengerModalVisible, setPassengerModalVisible] = useState(false);
  const nav = useNavigation();
  const handleSeatChoice = (choice) => {
    setSeatChoice(choice);
    setModalVisible(false);
  };

  const handlePassengerChange = (text) => {
    setNumPassengers(text);
    setPassengerModalVisible(false);
  };

  const totalPrice = numPassengers ? item.price * parseInt(numPassengers) : item.price;
  
  return (

          <View style={styles.container}>
         
           <View style={[styles.header,{marginBottom:100}]}>
            
                 <Text style={{top:40,textAlign:"center",fontSize:20,color:"#fff",fontWeight:"bold"}}>{`${departureCity} → ${arrivalCity}`}</Text>
                 <Text style={{top:45,textAlign:"center",fontSize:16,color:"#fff"}}>{date}</Text>
             <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:50,padding:20,borderRadius:10}}>
           
              <Text style={styles.companyName}>{item.companyName}</Text>
        <View style={styles.timeCity}>
          <Text style={styles.time}>{item.departureTime}</Text>
          
          <Text style={styles.city}>{item.departureCity}</Text>
          
        </View>
        
        <Text style={styles.middleText}>-{item.travelTime} heures-</Text>
     
        <View style={styles.timeCity}>
          <Text style={styles.time}>{item.arrivalTime}</Text>
          <Text style={styles.city}>{item.arrivalCity}</Text>
        </View>
                </CustomCard>
      </View>
   

              <View style={styles.bottomview}>
              <ScrollView  showsVerticalScrollIndicator={false}>
                <View>
              
               
                <View>
          
                <CustomCard  style={{backgroundColor:"#fff",marginTop:20,padding:30,borderRadius:10}}>
                <Text style={styles.choiceText}>Réservation de siège</Text>
      <View style={styles.separator} />
      <Text style={styles.choiceText}>choix de siège</Text>
      {seatChoice && (
        <Text style={styles.seatChoiceText}> {seatChoice}</Text>
      )}
      <TouchableOpacity style={styles.buttonsiege} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonTextsiege}>Modifier le choix de siège</Text>
      </TouchableOpacity>
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleSeatChoice('Couloir')}>
              <Text style={styles.modalText}>Couloir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSeatChoice('Fenêtre')}>
              <Text style={styles.modalText}>Fenêtre</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSeatChoice('Indiffère')}>
              <Text style={styles.modalText}>Indiffère</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </CustomCard>
      
      <View style={styles.passengerCard}>
      <View style={styles.passengerContainer}>
      <TextInput
                  placeholder="Nombre de passagers"

              style={styles.input}
              keyboardType="numeric"
              value={numPassengers}
              onChangeText={handlePassengerChange}
            />
      </View>
   
        <Text  style={styles.choiceText}>Nombre de billets: {numPassengers}</Text>
        <Text  style={styles.choiceText}>Total: {totalPrice} €</Text>
      </View>

      <Modal
        visible={passengerModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setPassengerModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Saisissez le nombre de passagers:</Text>
          
            <TouchableOpacity onPress={() => setPassengerModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
              </View>
           
           
              
              </View>
              <TouchableOpacity
              
              style={styles.signIn}
             onPress={() => nav.navigate('payment', { item })}>

         
          <LinearGradient
              colors={['#3A8CC2', '#3A8CC2']}
              style={styles.signIn}
          >
              <Text style={[styles.textSign, {
                  color:"#FFF"
              }]}>Confirmer</Text>
          </LinearGradient>
          </TouchableOpacity>
              </ScrollView>
              </View>
            
          </View>
          
         
          );
}

const styles = StyleSheet.create({
  header:{
    
    backgroundColor:'#3A8CC2',
    flex:1.3,

  },
  
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    justifyContent:"center",
    alignItems:"center"
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  welcomemessage:{
    color:"#fff",
    fontSize:35,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:40,
    borderRadius:10,
    marginBottom:65
  },
  circle:{
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:"#fff"
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bottomview:{
    flex:4,
    backgroundColor:"#f5f5f5",
    borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 9,
  },
  container: {
    backgroundColor:"#f5f5f5",
    flex:1,

  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#3A8CC2',
    
  },
  timeCity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  middleText: {
    alignSelf: 'center',
   
    marginVertical: 5,
    fontSize: 14,
    color: '#888',
  
  },
  icon:{
    alignSelf: 'left',
  },
  duration: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d9534f',
  },
  detailsButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor:'#3A8CC2',
    borderRadius: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
   
    marginTop: 10, 
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5, // Added margin for spacing between buttons
  },
  buttonText: {
    fontSize: 16,
    marginRight: 5,
  },
  buttonsiege: {
    padding: 10,
    backgroundColor: '#3A8CC2',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextsiege: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  seatChoiceText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginVertical: 10,
  },
  modalCloseText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
  passengerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  passengerText: {
    fontSize: 18,
    marginRight: 10,
  },
  passengerCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3A8CC2',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginTop: 10,
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
});