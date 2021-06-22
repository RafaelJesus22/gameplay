import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.title700,
  },
})