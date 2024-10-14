import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css, keyframes } from 'styled-components';
import { navLinks, socialMedia } from '@config'; 
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import { IconLogo, IconCircle, Icon } from '@components/icons'; 

// Pulsing animation keyframe
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

// StyledHeader as before
const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 15%;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--zeus);
  backdrop-filter: blur(5px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--zeus);
        box-shadow: 0 10px 30px -10px var(--green);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--green);
      `};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--green);
  font-family: var(--font-mono);
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 60px;
      height: 60px;
      position: relative;
      z-index: 1;

      .circle-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease-in-out; /* Smooth transition */
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          circle {
            fill: var(--zeus);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;

        .circle-container {
          opacity: 1; /* Show the circle on hover */
        }

        .logo-container {
          animation: ${pulseAnimation} 1s ease-in-out infinite;
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      font-size: var(--fz-md);

      a {
        padding: 24px;
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: var(--fz-md);
  }
`;

// Social icons styling, horizontally aligned
const StyledSocial = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0;
  list-style: none;

  li {
    margin-left: 15px;

    a {
      display: flex;
      align-items: center;
      padding: 8px;
      svg { 
        width: 30px; 
        height: 30px; 
      }
    }
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion, isHome]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <div className="circle-container">
            <IconCircle /> {/* Circle is hidden initially */}
          </div>
          <div className="logo-container">
            <IconLogo />
          </div>
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <div className="circle-container">
            <IconCircle />
          </div>
          <div className="logo-container">
            <IconLogo />
          </div>
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <>{Logo}</>
            </CSSTransition>
          )}
        </TransitionGroup>

        {/* Links and Social */}
        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={i}
                      style={{
                        transitionDelay: `${isHome ? i * 100 : 0}ms`,
                      }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div
                  style={{
                    transitionDelay: `${
                      isHome ? navLinks.length * 100 : 0
                    }ms`,
                  }}
                >
                  {ResumeLink}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>

        {/* Social Icons */}
        <StyledSocial>
          {socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
        </StyledSocial>
        
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
