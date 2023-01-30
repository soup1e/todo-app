import { client } from './client';

export function getUser() {
  return client.auth.currentUser;
}

export async function signOut() {
  await client.auth.signOut();
}
