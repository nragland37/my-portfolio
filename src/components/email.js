// src/components/Email.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { email } from '@config';
import { Side } from '@components';

// Animation for fade-in from the right
const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${fadeInRight} 1s ease-out; // Apply animation

  button {
    margin: 20px 0;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    letter-spacing: 0.15em;
    writing-mode: vertical-rl;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
    background: none;
    border: none;
    color: var(--email-text-color);
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-5px);
      color: var(--email-hover-color);
    }
  }

  .copied-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 8px 12px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--email-copied-message-color);
    border-radius: var(--border-radius);
    opacity: 0.9;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
`;

const Email = ({ isHome }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <button onClick={handleCopy}>{email}</button>
        {copied && <div className="copied-message">Email Copied!</div>}
      </StyledLinkWrapper>
    </Side>
  );
};

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
