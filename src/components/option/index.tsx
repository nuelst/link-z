import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";


type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: 'primary' | 'secondary';
}
export function Option({ name, icon, variant = 'primary', ...rest }: Readonly<OptionProps>) {

  const color = variant === 'primary' ? colors.green[300] : colors.gray[400];
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={
        variant === 'primary' ? styles.primaryTitle : styles.secondaryTitle
      }>{name}</Text>
    </TouchableOpacity>
  )
}