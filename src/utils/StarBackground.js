import React, { useState, useEffect, useCallback } from 'react';

const GenerateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * document.documentElement.scrollHeight; // Full page height
    stars += `${x}px ${y}px var(--white), `;
  }
  // Remove the trailing comma/space at last iteration
  return stars.slice(0, -2);
};

const StarBackground = () => {
  const [stars1, setStars1] = useState('');
  const [stars2, setStars2] = useState('');
  const [stars3, setStars3] = useState('');

  // amount of stars to generate
  const populateStars = useCallback(() => {
    setStars1(GenerateStars(300)); // large
    setStars2(GenerateStars(150)); // medium
    setStars3(GenerateStars(75)); // small
  }, []);

  useEffect(() => {
    populateStars();
    window.addEventListener('resize', populateStars);

    return () => {
      window.removeEventListener('resize', populateStars);
    };
  }, [populateStars]);

  return (
    <>
      <div id="stars1" style={{ boxShadow: stars1 }}></div>
      <div id="stars2" style={{ boxShadow: stars2 }}></div>
      <div id="stars3" style={{ boxShadow: stars3 }}></div>
    </>
  );
};

export default StarBackground;
