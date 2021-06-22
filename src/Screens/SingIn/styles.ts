import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary90,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: fonts.title700,
    lineHeight: 40,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.heading,
    fontSize: 16,
    marginBottom: 64,
    fontFamily: fonts.title500,
    lineHeight: 25,
  },
})