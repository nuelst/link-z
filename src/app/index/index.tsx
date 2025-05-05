import { colors } from '@/styles/colors';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Index() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity
          activeOpacity={0.7}>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />

      <FlatList
        data={['1', '2', '3']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Link name='Manuel' url='https://nuelst.vercel.app' onDetails={() => console.log(`Clicou ${item}`)} />

        )}
        style={styles.link}
        contentContainerStyle={styles.linkContent}
        showsVerticalScrollIndicator={false}
      />
    </View>

  )
}
