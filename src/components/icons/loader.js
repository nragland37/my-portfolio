import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for glitchy flicker effect
const glitchFlicker = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  5% {
    opacity: 1;
    transform: translate(2px, -3px) scale(1.02);
    color: var(--manatee);
  }
  10% {
    opacity: 0;
    transform: translate(-3px, 3px) scale(0.9);
  }
  15% {
    opacity: 1;
    transform: translate(1px, -1px) scale(1.1);
  }
  20% {
    opacity: 0.5;
    transform: translate(4px, -2px) scale(0.75);
  }
  25% {
    opacity: 1;
    transform: translate(-5px, 5px) scale(1.4);
    color: var(--blue);
  }
  30% {
    opacity: 0.6;
    transform: translate(-1px, -4px) scale(1.1);
  }
  35% {
    opacity: 1;
    transform: translate(6px, -6px) scale(0.9);
    color: var(--white);
  }
  40% {
    opacity: 0.8;
    transform: translate(3px, 3px) scale(1.2);
    color: var(--green);
  }
  45% {
    opacity: 1;
    transform: translate(-2px, 2px) scale(1.1);
  }
  50% {
    opacity: 0.9;
    transform: translate(1px, -2px) scale(1.05);
    color: var(--green);
  }
  55% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1.02);
  }
  60% {
    opacity: 1;
    transform: translate(-2px, 2px) scale(1);
  }
  65% {
    opacity: 1;
    transform: translate(1px, 0px) scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
    color: var(--blue);
  }
  80% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  90% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;

// Styled component for the SVG
const StyledSvg = styled.svg`
  width: 100px;
  height: 100px;

  #logo {
    color: var(--white);
  }
`;

// Styled component for the "N" text with enhanced glitchy flicker animation
const LoaderText = styled.text`
  opacity: 0;
  animation: ${glitchFlicker} 2.5s ease-in-out forwards;
  font-size: 40px;
  fill: currentColor;
  font-family: Arial, Helvetica, sans-serif;
  dominant-baseline: middle;
  text-anchor: middle;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.6));
`;

const GlitchTextCopy = styled(LoaderText)`
  position: absolute;
  opacity: 0.4;
  transform: translate(2px, 2px);
  filter: blur(2px);
  animation: ${glitchFlicker} 1s ease-in-out forwards;
`;

const IconLoader = () => (
  <StyledSvg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="N" transform="translate(11.000000, 5.000000)">
        <GlitchTextCopy x="39" y="50">
          N
        </GlitchTextCopy>
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
