import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../global/styles/theme';

export const ListDivider = ()=> {
  return <View style={styles.container}/>;
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginVertical: 21,
    alignSelf: 'flex-end',
  },
})