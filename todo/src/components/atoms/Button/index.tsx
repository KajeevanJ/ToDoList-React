import React from 'react';
import './Button.scss'; 

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: () => void;
  children?: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
