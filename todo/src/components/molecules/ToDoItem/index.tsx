import React from 'react';
import Text from '../../atoms/Text';
import Checkbox from '../../atoms/Checkbox';

interface TodoItemProps {
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <Text className="todo-title">{title}</Text>
      <Checkbox checked={completed} onChange={() => {}} />
    </div>
  );
};

export default TodoItem;
