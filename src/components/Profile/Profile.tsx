import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { Avatar } from '../Avatar/Avatar';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar 
        imageUrl='https://github.com/RafaelJesus22.png'
      />      
     
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Rafael
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}