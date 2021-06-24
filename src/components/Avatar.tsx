import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../global/styles/theme';

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

const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 8,
  }
})