import { colors } from '@/styles/colors';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option/indext';
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
      <Modal transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}> Course</Text>
              <TouchableOpacity>

                <MaterialIcons name='close' size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Manuel</Text>
            <Text style={styles.modalUrl}>https://nuelst.vercel.app</Text>
            <View style={styles.modalFooter}>
              <Option name='Delete' icon='delete' variant='secondary' />
              <Option name='Open' icon='language' />
            </View>

          </View>
        </View>


      </Modal>
    </View>

  )
}
