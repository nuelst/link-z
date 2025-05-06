import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { CATEGORIES } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Add() {
  //const router = useRouter();
  const [urlName, setUrlName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES[0].id);

  async function handleAdd() {
    try {
      if (!urlName.trim() || !url.trim()) {
        Alert.alert('Ops!', 'Please, fill in all fields');
        return;
      }

      const timestamp = Date.now().toString();
      await linkStorage.linkSave({
        id: timestamp,
        name: urlName,
        url,
        categoryId: selectedCategoryId,
      });
      Alert.alert('Success!', 'Link added successfully', [
        {
          text: 'OK',
          onPress: () => router.back()
        },
      ]);

    } catch (error) {
      Alert.alert('Ops!', 'Error adding link');
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32}
            color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Add</Text>
      </View>
      <Text style={styles.label}>Select one Category</Text>
      <Categories selectedCategoryId={selectedCategoryId} onSelect={setSelectedCategoryId} />
      <View style={styles.form}>
        <Input placeholder="Url's name" onChangeText={setUrlName} />
        <Input placeholder="https://yoururl.com" onChangeText={setUrl} />
        <Button title="Add" onPress={handleAdd} />
      </View>
    </View>
  )
}