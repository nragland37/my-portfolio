// src/components/Options.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Side } from '@components';
import { Icon } from '@components/icons';
import { toggleTheme, initTheme } from '@utils/light';

// Animation for fade-in from the left
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  animation: ${fadeInLeft} 1s ease-out; // Apply animation

  li {
    margin: 10px 0;

    button {
      position: relative;
      z-index: 10;
      padding: 12.5px;
      background-color: transparent;
      border: none;
      color: var(--options-icon-color);
      cursor: pointer;

      &:hover,
      &:focus {
        transform: translateY(-5px);
        color: var(--options-icon-hover-color);
      }

      svg {
        width: 50px;
        height: 50px;
        color: var(--options-icon-color);
        transition:
          fill 0.3s,
          transform 0.75s;
      }
    }
  }
`;

const Options = ({ isHome, onToggleCursor }) => {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    initTheme((isDark) => setIsDarkMode(isDark));
  }, []);

  const handleThemeToggle = () => {
    toggleTheme((isDark) => setIsDarkMode(isDark));
  };

  return (
    <Side isHome={isHome} orientation="left">
      <StyledOptionsList>
        <li>
          <button
            type="button"
            title="Toggle theme"
            onClick={handleThemeToggle}
            className={`theme-toggle ${isDarkMode ? '' : 'theme-toggle--toggled'}`}
            aria-label="Toggle theme"
          >
            <Icon name="light" />
          </button>
        </li>
        <li>
          <button onClick={onToggleCursor} aria-label="Toggle Cursor">
            <Icon name="cursor" />
          </button>
        </li>
      </StyledOptionsList>
    </Side>
  );
};

Options.propTypes = {
  isHome: PropTypes.bool,
  onToggleCursor: PropTypes.func.isRequired,
};

export default Options;
