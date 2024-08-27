import * as React from 'react';
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
    Alert
} from 'react-native';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';
import train from '../assets/images/train.jpg';
import photo from '../assets/images/photo.jpg';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import HomeScreen from './HomeScreen.js';
import axios from 'axios';

import { AuthContext } from '../components/context';


export const SignUpScreen = () => {
    const nav = useNavigation();
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
        
    }
    const handleSignUp = () => {
        // Vérifier si les mots de passe correspondent
        if (data.password !== data.confirm_password) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
            return;
        }

        // Faire une requête POST à l'API Symfony
        axios.post('http://10.192.54.205:8000/api/register', {
            username: data.username,
            email: data.email,
            password: data.password
        })
        .then(response => {
            Alert.alert('Succès', 'Utilisateur inscrit avec succès');
            // Gérer la navigation ou d'autres actions après l'inscription réussie
            // Par exemple, naviguer vers une autre page
        })
        .catch(error => {
            Alert.alert('Erreur', 'L\'inscription a échoué. Veuillez réessayer.');
            console.error('Erreur d\'inscription :', error);
        });
    };

  
    return (
        
     <View style={styles.container}>
             <ImageBackground source={train} resizeMode='cover' style={styles.image} >
        <StatusBar backgroundColor='#02adea' barStyle="light-content"/>
      <View style={styles.header}>
        
    
        
             
      </View>
      
      </ImageBackground>
      
     
      <View 
          
          style={styles.footer}
      >
        <View style={styles.head} >
       <Text style={styles.text_header}>Où désieriez-vous voyager?</Text>
     </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
              <FontAwesome 
                  name="user-o"
                  color="#666666"
                  size={20}
              />
              <TextInput 
                  placeholder="Your email"
                  style={[styles.textInput,  {
                    color: '#000'}]}
                  autoCapitalize="none"
                  
                  onChangeText={val => setData({...data, email: val})}
              />
             
             {data.check_textInputChange ? 
              <Animatable.View
                  animation="bounceIn"
              >
                  <Feather 
                      name="check-circle"
                      color='#02adea'
                      size={20}
                  />
              </Animatable.View>
             
             : null}
          </View>
          <Text style={[styles.text_footer, {
              marginTop: 35
          }]}>Nom d'utilisateur</Text>
          <View style={styles.action}>
              <FontAwesome 
                  name="user-o"
                  color="#666666"
                  size={20}
              />
              <TextInput 
                  placeholder="Your Username"
                  style={[styles.textInput,  {
                    color: '#000'}]}
                  autoCapitalize="none"
                  onChangeText={val => setData({...data, username: val})}
                  
              />
             
             {data.check_textInputChange ? 
              <Animatable.View
                  animation="bounceIn"
              >
                  <Feather 
                      name="check-circle"
                      color='#02adea'
                      size={20}
                  />
              </Animatable.View>
             
             : null}
          </View>

          <Text style={[styles.text_footer, {
              marginTop: 35
          }]}>Mot de passe</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color="#666666"
                  size={20}
              />
              <TextInput 
                  placeholder="Your Password"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={[styles.textInput,  {
                    color: '#000'}]}
                  autoCapitalize="none"
                  onChangeText={val => setData({...data, password: val})}
              />
              <TouchableOpacity
                 onPress={updateSecureTextEntry}
              >
                {data.secureTextEntry ? 
                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather 
                      name="eye"
                      color="grey"
                      size={20}
                  />
                }
              </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {
              marginTop: 35
          }]}>Confirmer votre mot de passe</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color="#666666"
                  size={20}
              />
              <TextInput 
                  placeholder="Confirm Your Password"
                  secureTextEntry={data.confirm_secureTextEntry ? true : false}
                  style={[styles.textInput,  {
                    color: '#000'}]}
                  autoCapitalize="none"
                  onChangeText={val => setData({...data, confirm_password: val})}
              />
              <TouchableOpacity
                 onPress={updateConfirmSecureTextEntry}
              >
                {data.secureTextEntry ?
                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather 
                      name="eye"
                      color="grey"
                      size={20}
                  />
                }
              </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
             
          </View>
          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={handleSignUp}
              >
              <LinearGradient
                  colors={['#3A8CC2', '#3A8CC2']}
                  style={styles.signIn}
              >
                  <Text style={[styles.textSign, {
                      color:"#fff"
                  }]}>S'inscrire</Text>
              </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => nav.goBack()}
                  style={[styles.signIn, {
                      borderColor: '#3A8CC2',
                      borderWidth: 1,
                      marginTop: 15
                  }]}
              >
                  <Text style={[styles.textSign, {
                      color: "#000"
                  }]}>Se connecter</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    </View>
  );
};

  
  const styles = StyleSheet.create({
   
        container: {
          flex: 1, 
         
          backgroundColor: '#fff'
        },
        header: {
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingBottom: 20
        },
        image:{
            flex:1,
            justifyContent: 'center',
         },
        footer: {
            flex: 2,
            backgroundColor:'#f5f5f5',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        text_header: {
            color: '#3A8CC2',
            fontWeight: 'bold',
            fontSize: 20
        },
        text_footer: {
            color: '#000',
            fontSize: 18,
        },
        action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
        },
        text_header: {
            color: '#3A8CC2',
            fontWeight: 'bold',
            fontSize: 20,
            position:'absolute'
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
            
        },
        textSign: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        textPrivate: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20
        },
        color_textPrivate: {
            color: '#000'
        },
        head: {
            marginBottom:30,
          },
      });
    