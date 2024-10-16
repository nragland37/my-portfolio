const isMobile =
  typeof navigator !== 'undefined' &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

module.exports = {
  email: 'nicholas.g.ragland@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
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
      name: 'Codepen',
      url: 'https://codepen.io/nragland37',
    },
  ],

  navLinks: [
    {
      name: 'about',
      url: '/#about',
    },
    {
      name: 'work',
      url: '/#jobs',
    },
    {
      name: 'projects',
      url: '/#projects',
    },
    {
      name: 'contact',
      url: '/#contact',
    },
  ],

  colors: {
    zeus: '#100e0b',
    green: '#1df8d7',
    sand: '#ffcc94',
  },

  options: isMobile
    ? [
        {
          name: 'Light',
          action: 'toggleTheme',
        },
      ] // Only Light option for mobile
    : [
        {
          name: 'Light',
          action: 'toggleTheme',
        },
        {
          name: 'Cursor',
          action: 'toggleCursor',
        },
      ], // Both Light and Cursor options for desktop

  srConfig: (delay = 200, viewFactor = 0.15) => {
    const mobileSettings = {
      origin: 'bottom',
      distance: '20px',
      duration: 1250,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.05,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const desktopSettings = {
      origin: 'bottom',
      distance: '20px',
      duration: 1250,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: false,
      reset: false,
      useDelay: 'always',
      viewFactor,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    return isMobile ? mobileSettings : desktopSettings;
  },
};
