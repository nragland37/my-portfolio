import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

  const playAudio = useCallback(() => {
    const audio = new Audio('/sounds/02-glitch.wav');
    audio.preload = 'auto'; // Preload audio to improve loading speed
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  }, []);

  const handleMobileTouch = useCallback(() => {
    if (!audioTriggered) {
      playAudio();
      setAudioTriggered(true); // Ensure audio plays only once
    }
  }, [audioTriggered, playAudio]);

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }, [finishLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);

    // wait for user interaction to trigger audio
    // mobile devices have strict autoplay policies
    if (isMobileDevice()) {
      window.addEventListener('touchstart', handleMobileTouch, { once: true });
    } else {
      // play the audio immediately for non-mobile devices
      playAudio();
    }

    animate();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('touchstart', handleMobileTouch);
    };
  }, [animate, handleMobileTouch, playAudio]);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
