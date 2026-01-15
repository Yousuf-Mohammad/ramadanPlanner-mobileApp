import {getCache, removeCache} from './Cache/cache';

export async function isAuthenticated(): Promise<boolean> {
  return (await getCache('authToken')) !== null;
}

export async function removeUser(): Promise<void> {
  await removeCache('authToken');
}
