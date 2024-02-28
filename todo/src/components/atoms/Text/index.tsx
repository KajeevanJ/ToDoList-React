import React from 'react';
import './Text.scss'; 

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <span className={`text ${className ? className : ''}`}>
      {children}
    </span>
  );
};

export default Text;
