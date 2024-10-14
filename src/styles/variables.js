import { css } from 'styled-components';

const variables = css`
  :root {
    /* Colors */
    --dark-navy: #2b3140;
    --navy: #4c5364;
    --light-navy: #667183;
    --lightest-navy: #7e8aa3;
    --navy-shadow: rgba(76, 83, 100, 0.7);

    --zeus: #171717;
    --light-zeus: #2b2b2b;
    --lightest-zeus: #3c3c3c;
    --dark-slate: #4e565f;
    --slate: #6e767e;
    --light-slate: #c5cacc;
    --lightest-slate: #e4e6e7;
    --white: #f0f4f5;
    --white-shadow: rgba(240, 244, 245, 0.7);

    --green: #1df8d7;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --yellow: #f5e491;

    --contessa: #c46c6c;
    --light-contessa: #e0a4a4;
    --sand: #ffcc94;
    --trout: #4c5464;
    --gulf-stream: #78acb0;
    --studio: #7854b4;
    --falcon: #7c5464;

    --hint-of-red: #f6f4f3;
    --santas-gray: #a3a3ac;
    --mirage: #1c243c;
    --manatee: #8e8d94;
    --rolling-stone: #747c83;
    --ebony-clay: #242443;
    --gray-chateau: #a4acb2;
    --black: #000;
    --transparent-green: rgba(100, 255, 218, 0.1);

    /* Fonts */
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    /* Font Sizes */
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    /* Borders */
    --border-radius: 4px;

    /* Navigation */
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    /* Tabs */
    --tab-height: 42px;
    --tab-width: 120px;

    /* Animation */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Scrollbar */
    --scrollbar-bg: var(--light-zeus);
    --scrollbar-thumb: var(--zeus);

    /* Hamburger */
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
