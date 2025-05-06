import { colors } from '@/styles/colors';
import { Alert, FlatList, Image, Linking, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { linkStorage, LinkStorageDTO } from '@/storage/link-storage';
import { CATEGORIES } from '@/utils/categories';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
export default function Index() {

  const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES[0].id);
  const [links, setLinks] = useState<LinkStorageDTO[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedLink, setSelectedLink] = useState<LinkStorageDTO>({} as LinkStorageDTO);

  function getCategoryName(categoryId: string) {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    return category?.name ?? '';
  }

  function handleDetails(selectedLink: LinkStorageDTO) {
    setShowModal(true);
    setSelectedLink(selectedLink);
  }

  async function fetchLinks() {
    try {
      const data = await linkStorage.linkGetAll();
      const links = data.filter(link => link.categoryId === selectedCategoryId);
      setLinks(links);
      console.log(links);
    } catch (error) {
      Alert.alert('Ops!', 'Error fetching links');
      console.log(error);
    }
  }

  async function deleteLink() {
    try {

      await linkStorage.linkDelete(selectedLink.id);
      fetchLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert('Ops!', 'Error deleting link');
      console.log(error);
    }

  }
  function handleDelete() {
    Alert.alert('Delete', 'Are you sure you want to delete this link?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => deleteLink() },
    ]);
  }

  async function handleOpenLink() {
    try {
      await Linking.openURL(selectedLink.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert('Ops!', 'Error opening link');
      console.log(error);
    }
  }


  useFocusEffect(useCallback(() => {
    fetchLinks();
  }, [selectedCategoryId]));
  return (

    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity
          onPress={() => router.navigate('/add')}
          activeOpacity={0.7}>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories selectedCategoryId={selectedCategoryId} onSelect={setSelectedCategoryId} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link name={item.name} url={item.url} onDetails={() => handleDetails(item)} />

        )}
        style={styles.link}
        contentContainerStyle={styles.linkContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={showModal} animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{getCategoryName(selectedLink.categoryId)}</Text>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                activeOpacity={0.7}>
                <MaterialIcons name='close' size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>{selectedLink.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink.url}</Text>
            <View style={styles.modalFooter}>
              <Option name='Delete' icon='delete' variant='secondary' onPress={handleDelete} />
              <Option name='Open' icon='language' onPress={handleOpenLink} />
            </View>

          </View>
        </View>


      </Modal >
    </View >

  )
}
