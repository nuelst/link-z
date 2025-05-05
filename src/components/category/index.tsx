import { colors } from "@/styles/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";



type CategoryProps = PressableProps & {
  //id: string,
  name: string,
  isSelected: boolean
  icon: keyof typeof MaterialIcons.glyphMap //to only accept from MaterialIcons
}
export function Category({ name, icon, isSelected, ...rest }: Readonly<CategoryProps>) {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />

      <Text style={[styles.name, { color }]}>{name} </Text>
    </Pressable>
  )
}