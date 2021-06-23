import React from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile/Profile';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { styles } from './styles';


export function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

    </View>
  );
}