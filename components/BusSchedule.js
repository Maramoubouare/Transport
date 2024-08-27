import React, { useState } from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList, ScrollView, Modal} from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard.js';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo.js';
import train from '../assets/images/train.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen.js';
export const BusSchedule = ({ route,navigation }) => {
  const { searchResults, data,arrivalDate} = route.params;
  const [sortedResults, setSortedResults] = useState(searchResults.filter(item => item.type === 'bus'));
  const [companyFilter, setCompanyFilter] = useState(null);
  const [isFilterResetVisible, setIsFilterResetVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  
  const formattedArrivalDate = new Date(arrivalDate).toLocaleDateString();
  
  

  const handleResetFilter = () => {
    const busResults = searchResults.filter(item => item.type === 'bus');
    setSortedResults(busResults);
    setIsFilterResetVisible(false);
  };
  
  const handleSortByPrice = () => {
    
      const sorted = [...sortedResults].sort((a, b) => a.price - b.price);
      setSortedResults(sorted);
     
      setIsFiltered(true);
    };
    const handleSortByDuration = () => {
    
      const sorted = [...sortedResults].sort((a, b) => a.travelTime - b.travelTime);
      setSortedResults(sorted);
      setIsFiltered(true);
    };
    const filterByCompany = companyName => {
      const filtered = searchResults.filter(item => item.type === 'bus' && item.companyName === companyName);
      setSortedResults(filtered);
      setCompanyFilter(companyName);
      setIsFiltered(true);
    };
    const navigateToDetails = item => {
      if (formattedArrivalDate === item.date) {
        nav.navigate('sign', { item });
      } else {
        nav.navigate('info', { item });
      }
    };
  
  
  
  
    const [filterReset, setFilterReset] = useState(false);
   
    
  const nav = useNavigation();
  
 
  const DottedBorder = ({ height, color }) => {
    const dots = [];
    for (let i = 0; i < height; i += 4) {
      dots.push(
        <View
          key={i}
          style={{
            width: 1,
            height: 4,
            backgroundColor: color,
            marginVertical: 1,
          }}
        />
      );
      
    }
    
    return <View style={{ flexDirection: 'column' }}>{dots}</View>;
  };
  

  const scheduleItem = ({item}) => {
    return (
      <View style={styles.card}>
      <View style={styles.leftPart}>
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
        
        
      </View>
      <DottedBorder height={100} color="#ddd"  />
      <View style={styles.rightPart}>
        <Text style={styles.price}>{item.price}€</Text>
        <TouchableOpacity style={styles.detailsButton}  onPress={() => navigateToDetails(item)}
           >
          <Text style={styles.detailsButtonText}>Voir Détails</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



  return (
    
          <View style={styles.topview} >
              
      <View style={styles.buttonContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buttonContainer}>
      {isFiltered && (
    <TouchableOpacity style={styles.button} onPress={handleResetFilter}>
      <Text style={styles.buttonText}>Reinitialiser</Text>
      <Icon name="times-circle" size={20} color="#3A8CC2" />
    </TouchableOpacity>
  )}
        <TouchableOpacity style={styles.button} onPress={handleSortByPrice}>
        <MyIcon name="sort-amount-asc" size={20} color="#3A8CC2" />
          <Text style={styles.buttonText}>Trier par prix</Text>
         
        </TouchableOpacity>
        <CompanyFilterButton searchResults={searchResults} filterByCompany={filterByCompany} />
      
        <TouchableOpacity style={styles.button} onPress={handleSortByDuration}>
          <Text style={styles.buttonText}>Durée</Text>
         
        </TouchableOpacity>
        
       
  </ScrollView>
      </View>
     
       
              <ScrollView showsVerticalScrollIndicator={false}>
    
              <FlatList
          data={sortedResults}
        
        renderItem={scheduleItem}
        keyExtractor={item => item.id}
       
      />
      
             </ScrollView>
                
          </View>);
}
const CompanyFilterButton = ({ searchResults, filterByCompany }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const companyNames = [...new Set(searchResults.map(item => item.companyName))];

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>compagnie</Text>
       
     
        <Icon name="filter" size={20} color="#3A8CC2"  />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={companyNames}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    filterByCompany(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
 
  topview:{
   
    justifyContent:"center",
    
    
  },
  card: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 8,
    elevation: 3, 
    alignItems:'center'
  },
  leftPart: {
    flex: 3,
    padding: 15,
    
  },
  rightPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
});