import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


import { styles } from './style';
import { theme } from '../../global/styles/theme';

interface Props extends RectButtonProps{
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category = (props: Props) => {
  const { title, checked, icon: Icon, ...rest } = props;
  const { secondary50, secondary70 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[
          secondary50,
          secondary70,
        ]}
        style={styles.container}
      >
        <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon 
              width={48}
              height={48}
            />
          </View>
          <Text>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}