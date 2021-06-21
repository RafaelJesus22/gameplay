import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
  image: {},
  content: {},
  title: {},
  subTitle: {},
})