import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const GuildIcon = () => {
  return (
    <Image 
      source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj' }}
      resizeMode='cover'
      style={styles.image}
    />
  );
}

export const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 20,
  }
})