import React from 'react';

const IconCircle = (props) => (
  <svg
    id="circle-icon"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 100 100"
    {...props}
  >
    <title>Circle Icon</title>
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke="var(--green)"
      strokeWidth="5"
      fill="transparent"
    />
  </svg>
);

export default IconCircle;
