import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 24

  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.gray[200]
  },
  label: {
    fontSize: 14,
    paddingHorizontal: 24,
    color: colors.gray[400]
  },
  form: {
    padding: 24,
    gap: 16

  }
})