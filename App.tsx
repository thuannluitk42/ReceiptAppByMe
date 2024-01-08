import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { MainNavigation } from './src/navigations/navigations';

export default function App() {
  return (
    <NavigationContainer>
        <MainNavigation></MainNavigation>
    </NavigationContainer>
  );
}
