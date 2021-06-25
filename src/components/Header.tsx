import React, { ReactNode } from 'react';
import {
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '../global/styles/theme';


interface Props {
  title: string;
  action?: ReactNode
}

export const AppointmentDetails = (props: Props) => {
  const { title, action } = props;
  const { secondary100, secondary40, heading } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton>
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>

      {
        action && (
          <View>
            { action }
          </View>
        )
      }
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
})