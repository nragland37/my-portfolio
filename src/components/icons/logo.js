import React from 'react';

const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 300 300"
  >
    <title>Logo</title>
    {/* Outer Circle */}
    <circle
      cx="150"
      cy="150"
      r="130"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
    />

    {/* Left angle bracket */}
    <text
      x="65"
      y="165"
      fontSize="100"
      fill="currentColor"
      fontFamily="Calibri, sans-mono"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {'<'}
    </text>

    {/* N in Monospaced Style */}
    <text
      x="155"
      y="165"
      fontSize="170"
      fill="var(--green)"
      fontFamily="Calibri, sans-mono"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      N
    </text>

    {/* Right angle bracket */}
    <text
      x="240"
      y="165"
      fontSize="100"
      fill="currentColor"
      fontFamily="Calibri, sans-mono"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {'>'}
    </text>

    {/* Data bits on sides */}
    <circle cx="65" cy="65" r="17" fill="currentColor" />
    <circle cx="240" cy="65" r="17" fill="currentColor" />
    <circle cx="65" cy="240" r="17" fill="currentColor" />
    <circle cx="240" cy="240" r="17" fill="currentColor" />
  </svg>
);

export default IconLogo;
