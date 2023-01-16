import React from 'react';
import { Btn } from './Button.styled';

function Button({ text, onClick }) {
  const capitalizeFirstLetter = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Btn id={text} onClick={onClick}>
      {capitalizeFirstLetter}
    </Btn>
  );
}

export default Button;
