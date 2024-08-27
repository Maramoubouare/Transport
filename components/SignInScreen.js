import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, Alert, ImageBackground , Platform,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import train from '../assets/images/train.jpg';

export const SignInScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const handleLogin = () => {
        axios.post('http://10.192.54.205:8000/api/login', {
            username: data.username,
            password: data.password
        })
        .then(response => {
            const { userToken, username } = response.data;
            Alert.alert('Connexion réussie', `Bienvenue, ${username}!`);
            navigation.navigate('search');
            
        })
        .catch(error => {
            Alert.alert('Erreur', 'Nom d\'utilisateur ou mot de passe incorrect');
            console.error('Erreur de connexion :', error);
        });
    };

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={train} resizeMode='cover' style={styles.image}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}></Text>
                </View>
            </ImageBackground>

            <Animatable.View style={styles.footer}>
                <Text style={[styles.text_footer, { color: '#000' }]}>Nom d'utilisateur</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color='#666666' size={20} />
                    <TextInput 
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, { color: '#000' }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }

                <Text style={[styles.text_footer, { color: '#000', marginTop: 35 }]}>Mot de passe</Text>
                <View style={styles.action}>
                    <Feather name="lock" color='#666666' size={20} />
                    <TextInput 
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, { color: '#000' }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? 
                            <Feather name="eye-off" color="grey" size={20} />
                            :
                            <Feather name="eye" color="grey" size={20} />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }

                <TouchableOpacity>
                    <Text style={{ color: '#3A8CC2', marginTop: 15 }}>Mot de passe oublié?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={handleLogin}>
                        <LinearGradient colors={['#3A8CC2', '#3A8CC2']} style={styles.signIn}>
                            <Text style={[styles.textSign, { color: "#fff" }]}>Se connecter</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('signup')}
                        style={[styles.signIn, { borderColor: '#3A8CC2', borderWidth: 1, marginTop: 15 }]}
                    >
                        <Text style={[styles.textSign, { color: '#3A8CC2' }]}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 3,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        flex: 1.5,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 10,
        paddingVertical: 40
    },
    text_header: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 40,
    },
    text_footer: {
        color: '#05375a',
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
        color: '#C23A3A',
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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
