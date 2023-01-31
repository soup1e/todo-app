import { checkError, client } from './client';

export async function addTodo(newTodo) {
  const response = await client.from('todos').insert(newTodo);
  return checkError(response);
}

export async function getAllTodo() {
  const res = await client.from('todos').select('*');
  return checkError(res);
}
