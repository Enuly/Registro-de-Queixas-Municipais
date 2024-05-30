import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Router from './src/routers/router';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import {Alert, BackHandler } from 'react-native';
export default function App() {

  return (
    //define a navegação
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
  );
}
//Este é o arquivo principal, o primeiro a ser renderizado

