import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for fading in the text "N"
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled component for the SVG
const StyledSvg = styled.svg`
  width: 100px;
  height: 100px;

  #logo {
    color: var(--contessa); /* Using CSS variable from global styles */
  }
`;

// Styled component for the "N" text with animation
const LoaderText = styled.text`
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 1.5s forwards; /* Fade in with delay */
  font-size: 40px;
  fill: currentColor;
  font-family: Arial, Helvetica, sans-serif;
  dominant-baseline: middle;
  text-anchor: middle;
`;

const IconLoader = () => (
  <StyledSvg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="N" transform="translate(11.000000, 5.000000)">
        <LoaderText x="39" y="50">
          N
        </LoaderText>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </StyledSvg>
);

export default IconLoader;
