import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_COLLECTION = '@links';

export type LinkStorageDTO = {
  id: string;
  name: string;
  url: string;
  categoryId: string;
}
async function linkSave(newLink: LinkStorageDTO) {
  try {
    const storedLinks = await AsyncStorage.getItem(LINK_COLLECTION);
    const links = storedLinks ? JSON.parse(storedLinks) : [];

    await AsyncStorage.setItem(LINK_COLLECTION, JSON.stringify([...links, newLink]));

  } catch (error) {
    throw error;

  }
}


async function linkGetAll() {
  const data = await AsyncStorage.getItem(LINK_COLLECTION);
  const links: LinkStorageDTO[] = data ? JSON.parse(data) : [];
  return links;
}


async function linkDelete(id: string) {
  const storedLinks = await AsyncStorage.getItem(LINK_COLLECTION);
  const links: LinkStorageDTO[] = storedLinks ? JSON.parse(storedLinks) : [];
  const filteredLinks = links.filter(link => link.id !== id);
  await AsyncStorage.setItem(LINK_COLLECTION, JSON.stringify(filteredLinks));
}


export const linkStorage = {
  linkSave,
  linkGetAll,
  linkDelete,
}