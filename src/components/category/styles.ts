import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[400]
  }

})