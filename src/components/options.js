import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { options } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--options-border-color);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    button {
      padding: 10px;
      transition:
        transform 0.3s ease,
        color 0.3s ease;
      background: none;
      border: none;
      color: var(--options-icon-color);
      cursor: pointer;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--options-icon-hover-color);
      }

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const Options = ({ isHome, onToggleTheme, onToggleCursor }) => (
  <Side isHome={isHome} orientation="left">
    <StyledOptionsList>
      {options &&
        options.map(({ name, action }, i) => (
          <li
            key={i}
            data-action={action} // Add action as a data attribute for easy targeting
          >
            <button
              onClick={() =>
                action === 'toggleTheme' ? onToggleTheme() : onToggleCursor()
              }
              aria-label={name}
            >
              <Icon name={name} />
            </button>
          </li>
        ))}
    </StyledOptionsList>
  </Side>
);

Options.propTypes = {
  isHome: PropTypes.bool,
  onToggleTheme: PropTypes.func.isRequired, // toggle function is passed
  onToggleCursor: PropTypes.func.isRequired, // cursor toggle function is passed
};

export default Options;
