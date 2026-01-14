import {createMMKV, MMKV} from 'react-native-mmkv';

let storage: MMKV;

function createStorage(): void {
  storage = createMMKV();
}

export function setLocalCache(key: string, value: string): void {
  try {
    if (!storage) {
      createStorage();
    }

    storage.set(key, value);
  } catch (e) {
    console.error('error setting local cache: ', e);
  }
}

export function getLocalCache(key: string): string | undefined {
  try {
    if (!storage) {
      createStorage();
    }

    return storage.getString(key);
  } catch (e) {
    console.error('error getting local cache: ', e);
    return undefined;
  }
}
