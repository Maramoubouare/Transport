import React, { useState } from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard.js';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo.js';
import SvgQRCode from 'react-native-qrcode-svg';
import { ScrollView } from 'react-native-gesture-handler';


export const PaymentScreen = () => {
        const route = useRoute();
        const { item, seatChoice, numPassengers, totalPrice } = route.params;
        const [cardNumber, setCardNumber] = useState('');
        const [expiryDate, setExpiryDate] = useState('');
        const [cvv, setCvv] = useState('');
        const [showPaymentInfo, setShowPaymentInfo] = useState(false);
        const nav = useNavigation();
      
        const handlePayment = () => {
          if (cardNumber && expiryDate && cvv) {
            Alert.alert('Paiement réussi', 'Votre paiement a été effectué avec succès!');
            nav.navigate('Home');
          } else {
            Alert.alert('Erreur de paiement', 'Veuillez remplir tous les champs de paiement.');
          }
        };
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}></Text>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
              <View style={{width:"100%"}}>
      <View style={{flexDirection:"row",marginBottom:15,alignItems:"center"}}>
            <Ionicons name="location-sharp" size={26} color='black'  />
            <View style={{marginLeft:20}}>
              <Text style={{opacity:0.6,fontSize:15}}>De</Text>
              <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>{item.departureCity}</Text>
            </View>
      </View>
      <View style={{position:"absolute",left:12,height:28,borderWidth:1,top:42,width:0,borderColor:"#EBE7E6"}}>
      </View>
       <View style={{flexDirection:"row" ,alignItems:"center", borderTopStartRadius:60,borderTopEndRadius:20,borderColor:"#EBE7E6",borderTopWidth:2}}>
            <Ionicons name="location-sharp" size={26} color="#5C7A82"  />
            <View style={{marginLeft:20}}>
              <Text style={{opacity:0.6,fontSize:15,marginTop:10}}>A</Text>
              <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>{item.arrivalCity}</Text>
            </View>
      </View>
    </View>
                  <View style={{flexDirection:"row",marginTop:10}}>
                    <View>
                      <View style={{flexDirection:"row",marginTop:15,alignItems:"center"}}>
                        <Ionicons name="timer-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>{item.departureCity}</Text>
                        <Ionicons style={{marginLeft:5}}  name="bus" size={15} color="#000"  />
                        <Text style={{marginLeft:5,fontWeight:"bold"}}>{item.departureTime}</Text>
                      </View>
                      <View style={{flexDirection:"row",marginTop:15}}>
                        <Ionicons name="location-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>{item.companyName}</Text>
                      </View>
                      <View style={{flexDirection:"row",marginTop:15}}>
                        <Ionicons name="timer-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>{item.price} €</Text>
                      </View>
                    </View>
                    <View style={{ width:50,height:50,marginLeft:10,marginTop:10}}>
                    <SvgQRCode value="http://example.com" />
                    </View>
                  </View>
                </CustomCard>
                <ScrollView>
                <Text style={{marginHorizontal:26,marginVertical:16,fontWeight:"bold",fontSize:20}}>Payment</Text>
                <Text style={{marginHorizontal:26,fontWeight:"bold",fontSize:15,marginVertical:10}}>Entrer le montant</Text>
                <TextInput value={item.price} style={{backgroundColor:"#EBE7E6",padding:8,marginHorizontal:23,marginVertical:5,borderRadius:8,fontWeight:"bold"}}/>
                <View>
                </View>
                <View>
                  <View style={{flexDirection:"row", marginTop:20,paddingBottom:10,borderBottomWidth:2,justifyContent:"space-between",alignItems:"center",marginHorizontal:23,borderBottomColor:"#EBE7E6"}}>
                    <TouchableOpacity style={{width:125,backgroundColor:"#6BC5E8",borderRadius:8}} onPress={() => setShowPaymentInfo(true)}>
                      <Text style={{color:"#fff",paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Credit Card</Text>
                    </TouchableOpacity>
                   
                  </View>
                  
                  
                </View>
                {showPaymentInfo && (
          <View style={styles.paymentInfoContainer}>
            <Text style={styles.label}>Numéro de carte</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            <Text style={styles.label}>Date d'expiration</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="123"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        )}
                <TouchableOpacity style={{padding:7,margin:26,borderRadius:12,backgroundColor:PRIMARYCOLOR}} onPress={handlePayment}>
                  <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold",color:"#fff"}}>Achetez Ticket</Text>
                </TouchableOpacity>
                </ScrollView>
              </View>
            
          </View>
         
          );
          
}

const styles = StyleSheet.create({
    topview: {
        marginTop: 60,
        marginHorizontal: 24,
        backgroundColor: PRIMARYCOLOR,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      welcomemessage: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold"
      },
      searchbar: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginBottom: 65
      },
      circle: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: "#fff"
      },
      welcomecontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      bottomview: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },
      container: {
        flex: 1,
        backgroundColor: PRIMARYCOLOR,
      },
      paymentInfoContainer: {
        marginHorizontal: 26,
        marginTop: 20,
      },
      label: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 5,
      },
      input: {
        backgroundColor: "#EBE7E6",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
      },
    });