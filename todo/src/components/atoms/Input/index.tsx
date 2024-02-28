import React from 'react';
import './Input.scss'; 

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className="input"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
