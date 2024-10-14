import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { throttle } from 'lodash';

// Styled component for the custom cursor (outer circle)
const StyledCursor = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1.5px solid var(--white);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;

  .cursor-dot {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: var(--white);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TrailSegment = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
`;

const CustomCursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const trailRefs = useRef([]);
  const cursorRef = useRef(null);
  const trailLength = 10;
  const mousePosition = useRef({ x: -100, y: -100 });
  const movementTimeout = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const segments = Array(trailLength)
      .fill()
      .map(() => React.createRef());
    trailRefs.current = segments;
    return () => {
      trailRefs.current = [];
    };
  }, [trailLength]);

  useEffect(() => {
    const throttledMouseMove = throttle((e) => {
      const { clientX: x, clientY: y } = e;
      mousePosition.current = { x, y };

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.8,
        ease: 'power2.out',
      });

      setIsMoving(true);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }

      movementTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 500);
    }, 16);

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [setIsMoving]);

  const handleMouseDown = () => {
    gsap.to(cursorRef.current, {
      width: 50,
      height: 50,
      borderColor: 'var(--green)',
      boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleMouseUp = () => {
    gsap.to(cursorRef.current, {
      width: 25,
      height: 25,
      borderColor: 'var(--white)',
      boxShadow: 'none',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    const updateTrail = () => {
      trailRefs.current.forEach((ref, index) => {
        const segment = ref.current;
        const delay = (index + 1) * 0.05;

        gsap.to(segment, {
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          duration: 0.3,
          delay,
          opacity: isMoving || isKeyPressed ? 1 - index / trailLength : 0,
          ease: 'power2.out',
          scale: 1 + index / trailLength,
          boxShadow: isMoving || isKeyPressed
            ? `0 0 10px rgba(255, 255, 255, ${0.2 + index / trailLength})`
            : 'none',
        });
      });
    };

    const animateTrail = () => {
      updateTrail();
      if (isMoving || isKeyPressed) {
        animationFrameId.current = requestAnimationFrame(animateTrail);
      } else if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    animateTrail();
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isMoving, isKeyPressed]);

  useEffect(() => {
    const handleKeyDown = () => setIsKeyPressed(true);
    const handleKeyUp = () => setIsKeyPressed(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {trailRefs.current.map((ref, index) => (
        <TrailSegment key={index} ref={ref} />
      ))}
      <StyledCursor ref={cursorRef}>
        <div className="cursor-dot" />
      </StyledCursor>
    </>
  );
};

export default CustomCursor;
