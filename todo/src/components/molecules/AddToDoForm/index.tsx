
import React, { useState } from 'react';
import './AddToDoForm.scss'; 
//import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add new todo"
        className="add-todo-input"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTodoForm;
