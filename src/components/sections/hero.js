import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes, css } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

/* Keyframes for the scroll animation */
const scrollAnimation = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
`;

/* Keyframes for the fade-in animation */
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

/* Keyframes for the slow infinite zoom-in effect */
const zoomIn = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(5);
    opacity: 0.8;
  }
  80% {
    transform: scale(20);
    opacity: 0.5;
  }
  100% {
    transform: scale(100);
    opacity: 0;
  }
`;

/* Styled component for the Hero section */
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100dvh;
  height: 100dvh;
  padding-top: 150px;
  position: relative;
  overflow: hidden;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    color: var(--hero-h1-title);
    font-size: clamp(40px, 15vw, 112px);
    margin-bottom: 25px;
    text-align: left;
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
    text-align: center;
  }

  .profile-image {
    margin-top: 50px;
    width: 225px;
    height: 225px;
    border-radius: 50%;
    overflow: hidden;
    border: 1.5px solid var(--hero-h1-title);
    box-shadow: 0px 5px 20px var(--hero-shadow);
    transition:
      transform 0.6s ease,
      box-shadow 0.6s ease,
      filter 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    will-change: transform;
    transform-origin: center center;

    /* Responsive image size adjustments */
    @media (max-width: 768px) {
      width: 205px;
      height: 205px;
    }
    @media (max-width: 480px) {
      width: 200px;
      height: 200px;
    }

    ${({ isZooming }) =>
      isZooming &&
      css`
        animation: ${zoomIn} 3s forwards;
      `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) contrast(1.2);
      transition: filter 0.6s ease;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 15px 50px var(--hero-shadow);

      img {
        filter: grayscale(0%);
      }
    }
  }

  .link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

/* Styled component for the scroll-down effect */
const ScrollDowns = styled.div`
  position: absolute;
  bottom: 10px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  z-index: 10;
  animation: ${fadeIn} 1.65s forwards 1.65s;
`;

const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid var(--hero-mouse);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  margin-bottom: 2px;
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
  const [isZooming, setIsZooming] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const profileImageRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setTimeout(() => setIsMounted(true), navDelay);
  }, [prefersReducedMotion]);

  const handleScrollClick = () => {
    window.location.href = '#about';
  };

  const handleImageClick = () => {
    setIsZooming(true);

    setTimeout(() => {
      window.location.href = '#about';
    }, 2000);

    setTimeout(() => {
      setIsZooming(false);
    }, 3500);
  };

  const two = (
    <h1 className="big-heading" style={{ alignSelf: 'flex-start' }}>
      NICHOLAS RAGLAND.
    </h1>
  );

  /* Sub-heading removed */
  // const three = (
  //   <h2 className="big-heading" style={{ fontSize: 'clamp(30px, 8vw, 55px)' }}>
  //     Building Secure & Scalable Software Solutions.
  //   </h2>
  // );

  const four = (
    <>
      <p className="center-text">
        Software Engineer and Cybersecurity Specialist with a passion for
        building clean, efficient, and secure solutions.
      </p>
    </>
  );

  /* LinkedIn Button (commented out) */
  // const five = (
  //   <a
  //     className="link"
  //     href="https://www.linkedin.com/in/nragland37/"
  //     target="_blank"
  //     rel="noreferrer"
  //   >
  //     Check out my LinkedIn!
  //   </a>
  // );

  const profileImage = (
    <div
      className={`profile-image ${isZooming ? 'zooming' : ''}`}
      onClick={handleImageClick}
      ref={profileImageRef}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleImageClick();
      }}
    >
      <img
        src={require('../../images/hero.jpg').default}
        alt="Nicholas Ragland"
      />
    </div>
  );

  const items = [
    //one,
    two,
    //three,
    four,
    profileImage,
    // five,
  ];

  return (
    <StyledHeroSection isZooming={isZooming}>
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
      {!isZooming && (
        <ScrollDowns onClick={handleScrollClick}>
          <Mousey>
            <Scroller />
          </Mousey>
        </ScrollDowns>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
