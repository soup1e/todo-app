import { useEffect, useState } from 'react';
import { getAllTodo } from '../services/todo.js';

function useTodo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getAllTodo();
        setTodo(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTodo();
  });
  return { todo, setTodo };
}

export default useTodo;
