import React from 'react';

function Value({ text, count }) {
  const capitalizeFirstLetter = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <p>
      {capitalizeFirstLetter}: {count}
    </p>
  );
}

export default Value;
