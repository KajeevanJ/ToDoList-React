import React from 'react';
import './Checkbox.scss'; 
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
