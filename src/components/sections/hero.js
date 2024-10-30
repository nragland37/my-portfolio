import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

// Keyframes for the scroll animation
const scrollAnimation = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
`;

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the Hero section
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100dvh;
  height: 100dvh;
  padding: 0;
  position: relative;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    color: var(--hero-h1-title);
  }

  h2 {
    margin-top: 5px;
    color: var(--hero-h2-title);
    line-height: 0.9;
  }

  h3 {
    margin: 0 0 30px 4px;
    color: var(--hero-h3-title);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

// Styled component for the scroll-down effect
const ScrollDowns = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  z-index: 10;
  animation: ${fadeIn} 1s forwards 1s;
`;

const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid var(--hero-mouse);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: var(--hero-mouse);
  animation: ${scrollAnimation} 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94)
    infinite;
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const handleScrollClick = () => {
    window.location.href = '#about';
  };

  const one = <h3>Hi, my name is</h3>;
  const two = <h1 className="big-heading">Nicholas Ragland.</h1>;

  // sub-heading removed
  // const three = (
  //   <h2 className="big-heading" style={{ fontSize: 'clamp(30px, 8vw, 55px)' }}>
  //     Building Secure & Scalable Software Solutions.
  //   </h2>
  // );

  const four = (
    <>
      <p>
        Software Engineer and Cybersecurity Specialist with a passion for
        building clean, efficient, and secure solutions.
      </p>
    </>
  );
  const five = (
    <a
      className="link"
      href="https://www.linkedin.com/in/nragland37/"
      target="_blank"
      rel="noreferrer"
    >
      Check out my LinkedIn!
    </a>
  );

  const items = [one, two, /* three, */ four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}

      {/* Scroll Down Indicator */}
      <ScrollDowns onClick={handleScrollClick}>
        <Mousey>
          <Scroller />
        </Mousey>
      </ScrollDowns>
    </StyledHeroSection>
  );
};

export default Hero;
