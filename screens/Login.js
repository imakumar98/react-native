import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Header from './../components/Header';
import Footer from './../components/Footer';


export default function Login({navigation}) {
    return (
        <View>
        <Header/>
        <Text>Login Form</Text>
        
        <TextInput placeholder="Type your username"></TextInput>

        <TextInput placeholder="Type your password"></TextInput>

        <Button title="Login"></Button>
        <Text>{"\n"}</Text>
        <Button title="Open Profile" onPress={() => navigation.push('Profile')}></Button>

        <Footer/>

        <StatusBar />
        </View>
    )
}
