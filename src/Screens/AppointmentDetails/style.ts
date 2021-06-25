import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.title700,
    color: colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: fonts.text400,
    color: colors.heading,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  member: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});