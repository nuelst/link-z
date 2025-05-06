import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
export default function Add() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/')}>
          <MaterialIcons name="arrow-back" size={32}
            color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Add</Text>
      </View>
      <Text style={styles.label}>Select one Category</Text>
      <Categories />
      <View style={styles.form}>

        <Input placeholder="Url's name" />
        <Input placeholder="https://yoururl.com" />
      </View>
    </View>
  )
}