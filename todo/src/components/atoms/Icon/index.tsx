import React from 'react';
import './Icons.scss'; 

export interface IconProps {
  name: string;
  onClick?: () => void; 
}

const Icon: React.FC<IconProps> = ({ name, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <i className={`icon ${name}`} onClick={handleClick} />
  );
};

export default Icon;
