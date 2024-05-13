import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Router from './src/routers/router';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
  );
}

