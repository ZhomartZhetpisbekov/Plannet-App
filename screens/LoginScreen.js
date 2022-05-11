import React, { useState, useEffect } from 'react';
import {KeyboardAvoidingView, TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { FirebaseApp } from '../firebase'

const LoginScreen = () => {
    const auth = getAuth();

    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = () => {
        navigation.navigate("SignUp");
    };

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Logged in with:", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('errorMessage');
            });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'>

            <Text style={{fontSize: 28, marginBottom: 25,}}>Welcome!</Text>
            
            <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />

            <TextInput 
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            /> 

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    onPress={handleLogin}
                    style={styles.loginBtn}>

                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={createAccount}
                    style={[styles.signUpBtn]}>

                    <Text style={[styles.btnText, {color: '#007AFF'}]}>Don't have an account</Text>
                </TouchableOpacity>
            </View>     
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        width: '60%',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
    },
    buttonsContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%'
    },
    loginBtn: {
        padding: 15,
        backgroundColor: '#007AFF',
        width: '70%',
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    },
    signUpBtn: {

    },
});