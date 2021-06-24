import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { 
  Inter_400Regular, 
  Inter_500Medium 
} from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';

import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes/index';
import { Background } from './src/components/BackGround';

export default function App() {

  const [ fontsDidLoad ] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsDidLoad) return <AppLoading />;

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#0000" 
        translucent
      />
      <Routes />
    </Background>
  );
}
