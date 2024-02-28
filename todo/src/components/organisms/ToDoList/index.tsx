import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

import TodoItem from '../../molecules/ToDoItem';
import './ToDoList.scss'; 


const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
