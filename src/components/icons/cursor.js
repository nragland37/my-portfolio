import React from 'react';

const IconCursor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-cursor"
    {...props}
  >
    <title>Cursor</title>
    <circle cx="12" cy="12" r="12" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default IconCursor;
