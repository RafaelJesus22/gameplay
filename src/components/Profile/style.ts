import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: fonts.title500,
    fontSize: 24,
    color: colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: fonts.title700,
    fontSize: 24,
    color: colors.heading,
  },
  message: {
    fontFamily: fonts.text400,
    color: colors.highlight,
  }
})