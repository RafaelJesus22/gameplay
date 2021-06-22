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
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: colors.headding,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.headding,
    fontSize: 16,
    marginBottom: 64,
  },
})