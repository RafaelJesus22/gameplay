import React from 'react';
import { View, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { CategoryProps } from '../../types/types';
import { styles } from './style';
import { theme } from '../../global/styles/theme';


export const Category = (props: CategoryProps) => {
  const { 
    title, 
    checked, 
    icon: Icon, 
    hasCheckBox, 
    ...rest 
  } = props;
  
  const { 
    secondary40, 
    secondary50, 
    secondary70, 
    secondary85 
  } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[
          secondary50,
          secondary70,
        ]}
      >
        <LinearGradient 
          style={[styles.content, {opacity: checked ? 1 : 0.4}]}
          colors={[
            checked ? secondary85 : secondary50, 
            secondary40
          ]}
        >
          {
            hasCheckBox && 
            <View style={checked ? styles.checked : styles.check} />
          }

          <Icon 
            width={48}
            height={48}
          />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}