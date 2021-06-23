import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

interface Props {
  imageUrl: string;
}

export const Avatar = ({ imageUrl }: Props) => {

  const { secondary50, secondary70, } = theme.colors;

  return (
    <LinearGradient 
      colors={[
        secondary50,
        secondary70,
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