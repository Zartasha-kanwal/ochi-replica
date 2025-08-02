
import React from 'react';
import './button.css';

const Button = ({title,}) => {
  return (
    <div >
      <button style={{ '--clr': 'Black' }} className="btn">{title}</button>
      
    </div>
  );
};

export default Button;
