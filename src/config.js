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

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
