import React, { useEffect, useState } from 'react'; // Removed useRef
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledSideElement = styled.div`
  width: 50px;
  position: fixed;
  top: 55%;
  transform: translateY(-50%);
  ${(props) => (props.orientation === 'left' ? 'left: 15px;' : 'right: 15px;')}
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 0;
    background-color: var(--options-border-color);
    opacity: 0.7;
    animation: grow 0.7s forwards 1.8s;
  }

  &:before {
    margin-bottom: 20px;
  }

  &:after {
    margin-top: 20px;
  }

  @media (max-width: 1080px) {
    ${(props) =>
      props.orientation === 'left'
        ? 'left: var(--side-element-left-margin-mobile);'
        : 'right: var(--side-element-right-margin-mobile);'}
  }

  @media (max-width: 768px) {
    display: none;
  }

  @keyframes grow {
    from {
      height: 0;
    }
    to {
      height: 60px;
    }
  }
`;

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={isHome ? loaderDelay : 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
