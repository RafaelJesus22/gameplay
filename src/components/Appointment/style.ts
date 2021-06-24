import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  category:{
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: fonts.text500,
    color: colors.heading,  
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: fonts.text500,
    fontSize: 13,
    marginRight: 24,
    marginLeft: 7,
  },
})