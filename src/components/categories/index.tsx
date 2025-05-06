import { CATEGORIES } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";


type CategoriesProps = {
  selectedCategoryId: string;
  onSelect: (categoryId: string) => void;
}
export function Categories({ selectedCategoryId, onSelect }: Readonly<CategoriesProps>) {
  return (

    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category name={item.name} icon={item.icon} isSelected={item.id === selectedCategoryId}
        onPress={() => onSelect(item.id)} />}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false} />
  )
}
