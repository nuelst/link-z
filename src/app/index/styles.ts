
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
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end'

  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24

  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray[400]
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[200]

  },
  modalUrl: {
    fontSize: 14,
    color: colors.gray[400]
  },
  modalFooter: {
    flexDirection: 'row',
    //gap: 10,
    marginTop: 32,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingVertical: 14
  }
})