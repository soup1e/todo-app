import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import useTodo from '../../hooks/useTodo.js';
import { addTodo } from '../../services/todo.js';

import './Todos.css';

export default function Todos() {
  const { user } = useContext(UserContext);
  const { todo, setTodo } = useTodo();
  const [todoInput, setTodoInput] = useState('');

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleAddTodo = async () => {
    const newTodo = await addTodo({ description: todoInput });
    setTodo((prev) => [...prev, newTodo]);
    setTodoInput('');
  };

  return (
    <div className="center">
      <div className="content">
        <div className="form">
          <input
            type="text"
            required
            placeholder="todo..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add todo</button>
        </div>

        <div className="todo-list">
          {todo.map((todo) => (
            <div key={todo.id}>{todo.description.toUpperCase()}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
