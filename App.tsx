import React from 'react';
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
import { SingIn } from './src/Screens/SingIn/Index';

export default function App() {

  const [ fontsDidLoad ] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsDidLoad) return <AppLoading />;

  return (
    <SingIn />
  );
}
