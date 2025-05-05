
import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: 62

  },
  logo: {
    height: 32,
    width: 38
  },
  header: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    justifyContent: 'space-between'
  }
  ,
  title: {
    fontSize: 22,
    color: colors.green[900]
  },
  link: {
    borderTopColor: colors.gray[600],

    borderTopWidth: 1
  },
  linkContent: {
    gap: 20,
    paddingBottom: 100,
    padding: 24
  }
})