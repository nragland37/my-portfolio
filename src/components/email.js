import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@config';
import { Side } from '@components';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--white);
  }

  button {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    line-height: var(--fz-lg);
    letter-spacing: 0.2em;
    writing-mode: vertical-rl;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--green);
    }
  }

  .copied-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 8px 12px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--green);
    border-radius: var(--border-radius);
    box-shadow: 0 8px 20px -8px rgba(2, 12, 27, 0.7);
    opacity: 0.95;
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
      setTimeout(() => setCopied(false), 2000); // hide message after 2s
    });
  };

  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <button onClick={handleCopy}>{email}</button>
        {copied && (
          <div className="copied-message">
            <span>Email Copied!</span>
          </div>
        )}
      </StyledLinkWrapper>
    </Side>
  );
};

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
