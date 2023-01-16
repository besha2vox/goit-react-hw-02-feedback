import React from 'react';

function Button({ text, onClick }) {
  const capitalizeFirstLetter = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <button id={text} onClick={onClick}>
      {capitalizeFirstLetter}
    </button>
  );
}

export default Button;
