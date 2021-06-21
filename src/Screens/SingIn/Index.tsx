import React from 'react';
import { 
  View, 
  Text, 
  Image 
} from 'react-native';
import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png';

export function SingIn() {
  return (
    <View style={styles.container}>
      <Image 
        source={IllustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{'\n'}
          suas jogatinas{'\n'}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
      </View>

    </View>
  );
}