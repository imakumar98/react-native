import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Form</Text>
      
      <TextInput placeholder="Type your username"></TextInput>

      <TextInput placeholder="Type your password"></TextInput>

      <Button title="Login"></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontWeight: 'bold',
  }
});
