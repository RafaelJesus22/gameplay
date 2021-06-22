import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
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