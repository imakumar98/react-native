import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import Profile from './screens/Profile';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile Page' }}></Stack.Screen>

        <Stack.Screen name="Login" component={Login} options={{ title: 'Login Page' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}