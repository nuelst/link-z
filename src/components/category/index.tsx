import { colors } from "@/styles/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";



type CategoryProps = PressableProps & {
  //id: string,
  name: string,
  icon: keyof typeof MaterialIcons.glyphMap
}
export function Category({ name, icon, ...rest }: Readonly<CategoryProps>) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />

      <Text style={styles.name}>{name} </Text>
    </Pressable>
  )
}