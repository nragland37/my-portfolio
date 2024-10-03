module.exports = {
  email: 'nicholas.g.ragland@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nragland37',
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
  ],

  colors: {
    red: '#FF0000',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 250, viewFactor = 0.3) => ({
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
