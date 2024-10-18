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
  border: 1.5px solid var(--cursor-border); /* Outer cursor color */
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;

  .cursor-dot {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: var(--cursor-dot); /* Inner cursor dot color */
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TrailSegment = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  background: var(--cursor-background);
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
`;

const CustomCursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const trailRefs = useRef([]);
  const cursorRef = useRef(null);
  const trailLength = 10; // Number of trail segments
  const mousePosition = useRef({ x: -100, y: -100 });
  const movementTimeout = useRef(null);
  const animationFrameId = useRef(null);

  // Initialize trail segments
  useEffect(() => {
    const segments = Array(trailLength)
      .fill()
      .map(() => React.createRef());
    trailRefs.current = segments;
    return () => {
      trailRefs.current = [];
    };
  }, [trailLength]);

  // Handle mouse movement
  useEffect(() => {
    const throttledMouseMove = throttle((e) => {
      const { clientX: x, clientY: y } = e;
      mousePosition.current = { x, y };

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.6, // speed of cursor movement
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

  // Handle mouse down
  const handleMouseDown = () => {
    setIsMouseDown(true);
    gsap.to(cursorRef.current, {
      width: 50,
      height: 50,
      borderColor: 'var(--cursor-mouse-down-border)', // Use green color when mouse is down
      boxShadow: '0 0 25px var(--cursor-mouse-down-shadow)', // Apply shadow on mouse down
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsMouseDown(false);
    gsap.to(cursorRef.current, {
      width: 25,
      height: 25,
      borderColor: 'var(--cursor-border)', // Return to white when mouse is up
      boxShadow: 'none',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  // Update trail segments
  useEffect(() => {
    const updateTrail = () => {
      trailRefs.current.forEach((ref, index) => {
        const segment = ref.current;
        const delay = (index + 1) * 0.05;

        gsap.to(segment, {
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          duration: 0.4,
          delay,
          opacity: isMoving || isMouseDown ? 1 - index / trailLength : 0,
          ease: 'power2.out',
          scale: 1 + index / trailLength,
          boxShadow:
            isMoving || isMouseDown
              ? `0 0 10px rgba(var(--cursor-trail), ${0.2 + index / trailLength})`
              : 'none',
        });
      });
    };

    const animateTrail = () => {
      updateTrail();
      if (isMoving || isMouseDown) {
        animationFrameId.current = requestAnimationFrame(animateTrail);
      } else if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    animateTrail();
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isMoving, isMouseDown]);

  // Event listeners for mouse down and up
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
