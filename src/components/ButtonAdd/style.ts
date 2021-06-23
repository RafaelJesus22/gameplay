import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})