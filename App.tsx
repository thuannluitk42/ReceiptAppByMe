import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { MainNavigation } from './src/navigations/Navigations';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
