module.exports = {
  email: 'nicholas.g.ragland@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nragland37',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/nragland37/',
    },
    /*{
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },*/
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nragland37',
    },
    /*{
      name: 'Codepen',
      url: 'https://codepen.io',
    },*/
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    /*`{
      name: 'Memories',
      url: '/pensieve',
    },*/
  ],

  colors: {
    zeus: '#100e0b', // Background color (dark)
    green: '#1df8d7', // Highlight green color
    sand: '#ffcc94', // Sand for accent
  },

  /* Loader and transition delays */
  srConfig: (delay = 200, viewFactor = 0.25) => {
    // Detect if the user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const mobileSettings = {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay, // Default delay: 200ms
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.05, // Smaller viewFactor to trigger animations sooner on scroll
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const desktopSettings = {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: false,
      reset: false,
      useDelay: 'always',
      viewFactor, // Default viewFactor: 0.25px
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    // Return the appropriate settings based on device type
    return isMobile ? mobileSettings : desktopSettings;
  },
};
