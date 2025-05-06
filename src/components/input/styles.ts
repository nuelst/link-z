import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    backgroundColor: colors.gray[900],
    borderRadius: 8,
    borderColor: colors.gray[800],
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: colors.gray[100],
  },
});
