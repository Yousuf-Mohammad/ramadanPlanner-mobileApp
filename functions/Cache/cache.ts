import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setCache(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('error setting local cache: ', error);
    throw error;
  }
}

export async function getCache(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error('error getting local cache: ', e);
    return null;
  }
}

export async function removeCache(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);

    console.log('successfully removed!');
  } catch (error) {
    console.error('error removing local cache: ', error);
    throw error;
  }
}
