// Detects if the user is on a mobile device
const isMobile =
  typeof navigator !== 'undefined' &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

module.exports = {
  // Contact email
  email: 'nicholas.g.ragland@gmail.com',

  // Social media links
  socialMedia: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nragland37',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/nragland37',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/nragland37/',
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/nragland37',
    },
  ],

  // Navigation links
  navLinks: [
    {
      name: 'about',
      url: '/#about',
    },
    {
      name: 'experience',
      url: '/#jobs',
    },
    {
      name: 'projects',
      url: '/#projects',
    },
    {
      name: 'blog',
      url: '/blog',
    },
    {
      name: 'contact',
      url: '/#contact',
    },
  ],

  // Color configuration (matches CSS variables)
  colors: {
    midnight: '#0e1116', // Base dark color (used in backgrounds)
    green: '#19f9d8', // Primary accent color (used for links, buttons, etc.)
  },

  // Options for theme and cursor settings, adapted for mobile and desktop
  options: isMobile
    ? [
        {
          name: 'light',
          action: 'toggleTheme', // Only toggles light/dark mode for mobile
        },
      ]
    : [
        {
          name: 'light',
          action: 'toggleTheme', // Toggling theme on desktop
        },
        {
          name: 'cursor',
          action: 'toggleCursor', // Toggling cursor animation on desktop
        },
      ],

  // Scroll reveal configuration for animations
  srConfig: (delay = 200, viewFactor = 0.15) => {
    const commonSettings = {
      origin: 'bottom',
      distance: '20px',
      duration: 1250,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      reset: false,
      useDelay: 'always',
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    return isMobile
      ? {
          ...commonSettings,
          mobile: true,
          viewFactor: 0.05, // Reduced view factor for mobile
        }
      : {
          ...commonSettings,
          mobile: false,
          viewFactor, // Standard view factor for desktop
        };
  },
};
