import React, { useState, useEffect } from 'react';
import {KeyboardAvoidingView, TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { FirebaseApp } from '../firebase'

const SignUpScreen = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('New account:', email, password);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'>

            <Text style={{fontSize: 28, marginBottom: 25,}}>Create an account!</Text>
            
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

            
            <TouchableOpacity 
                onPress={handleSignUp}
                style={styles.button}>

                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};

export default SignUpScreen;

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
    button: {
        marginTop: 15,
        padding: 15,
        backgroundColor: '#007AFF',
        width: '40%',
        borderRadius: 15,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    },
});