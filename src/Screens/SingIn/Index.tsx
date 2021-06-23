import React from 'react';
import { 
  View, 
  Text, 
  Image, 
} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';

export function SingIn() {
  const navigation = useNavigation();

  const handleSingIn = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      
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
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}