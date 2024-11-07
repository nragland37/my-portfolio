import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Side } from '@components';
import { Icon } from '@components/icons';
import { toggleTheme, initTheme } from '@utils/light';
import { toggleColorWave, initColorWaveEffect } from '@utils/color';

/* Animation for fade-in from the left */
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

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: ${fadeInLeft} 1s ease-out;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 20px 0;
    background-color: transparent;
    border: none;
    color: var(--options-icon-color);
    cursor: pointer;
    transition:
      color 0.3s,
      transform 0.75s;

    svg {
      width: 26px;
      height: 26px;
      transition:
        transform 0.75s,
        color 0.3s;
    }

    &:hover,
    &:focus {
      transform: translateY(-5px);
      color: var(--options-icon-hover-color);
    }
  }
`;

const Options = ({ isHome, onToggleCursor }) => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [isColorMode, setIsColorMode] = useState(false);

  useEffect(() => {
    initTheme((isDark) => setIsDarkMode(isDark));
    initColorWaveEffect((isColor) => setIsColorMode(isColor));
  }, []);

  const handleThemeToggle = () => {
    toggleTheme((isDark) => setIsDarkMode(isDark));
  };

  const handleColorToggle = () => {
    toggleColorWave((isColor) => setIsColorMode(isColor));
  };

  return (
    <Side isHome={isHome} orientation="left">
      <StyledOptionsContainer>
        {/* Theme */}
        <button
          type="button"
          title="Toggle theme"
          onClick={handleThemeToggle}
          className={`theme-toggle ${isDarkMode ? '' : 'theme-toggle--toggled'}`}
          aria-label="Toggle theme"
        >
          <Icon name="light" />
        </button>

        {/* Color Wave */}
        <button
          type="button"
          title="Toggle color wave effect"
          onClick={handleColorToggle}
          className={`color-toggle ${isColorMode ? 'color-toggle--active' : ''}`}
          aria-label="Toggle color wave effect"
        >
          <Icon name="color" />
        </button>

        {/* Cursor */}
        <button
          type="button"
          onClick={onToggleCursor}
          aria-label="Toggle Cursor"
        >
          <Icon name="cursor" />
        </button>
      </StyledOptionsContainer>
    </Side>
  );
};

Options.propTypes = {
  isHome: PropTypes.bool,
  onToggleCursor: PropTypes.func.isRequired,
};

export default Options;
