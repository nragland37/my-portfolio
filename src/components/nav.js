import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navLinks, socialMedia } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import { IconLogo, IconCircle, Icon } from '@components/icons';
import { NavStyles } from '@styles';

const { StyledHeader, StyledNav, StyledLinks, StyledSocial, StyledMenuButton } =
  NavStyles;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

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
            <IconCircle />
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

  /*
  const ResumeLink = (
    <StyledResumeButton
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </StyledResumeButton>
  );
  */

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

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={i}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>
        </StyledLinks>

        <StyledSocial>
          <TransitionGroup component={null}>
            {isMounted &&
              socialMedia.map(({ url, name }, i) => (
                <CSSTransition
                  key={i}
                  classNames="social-icon"
                  timeout={timeout}
                >
                  <li
                    key={i}
                    style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                  >
                    <a
                      href={url}
                      aria-label={name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name={name} />
                    </a>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledSocial>

        {/*
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
              <div
                style={{
                  transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`,
                }}
              >
                {ResumeLink}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        */}

        <StyledMenuButton>
          <button aria-label="Menu">
            <Menu />
          </button>
        </StyledMenuButton>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
