import React from 'react';
import TodoList from '../../organisms/ToDoList';
import AddTodoForm from '../../molecules/AddToDoForm';
import './todolistpage.scss'; 

const TodoListPage: React.FC = () => {
  const handleAddTodo = (text: string) => {
    console.log(`Adding todo: ${text}`);
  };

  return (
    <div className="todo-list-page">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
