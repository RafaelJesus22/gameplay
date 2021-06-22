import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StatusBar
} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';

export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#0000" 
        translucent
      />
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize{'\n'}
          suas jogatinas
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon 
          title='Entrar com discord'
          activeOpacity={0.75}
        />
      </View>
    </View>
  );
}