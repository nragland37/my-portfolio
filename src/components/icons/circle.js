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
      r="46"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

export default IconCircle;
