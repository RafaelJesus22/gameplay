import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

interface Props {
  imageUrl: string;
}

export const Avatar = ({ imageUrl }: Props) => {

  const { secondary80, secondary100, } = theme.colors;

  return (
    <LinearGradient 
      colors={[
        secondary80,
        secondary100,
      ]}
      style={styles.container}
    >
      <Image
        source={{ uri: imageUrl}}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}