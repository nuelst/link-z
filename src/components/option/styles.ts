import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 5,
    //backgroundColor: colors.gray[800]
  },
  primaryTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.green[300]
  },
  secondaryTitle: {
    // fontWeight: '400',
    fontSize: 16,
    color: colors.gray[400]
  }
})  