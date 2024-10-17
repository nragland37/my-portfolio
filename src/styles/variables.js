import { css } from 'styled-components';

const variables = css`
  :root {
    /* Default (Dark Mode) Colors */
    --midnight: #0e1116;
    --light-midnight: #1a1d24;
    --lightest-midnight: #282c33;

    --zeus: #1c1c1c;
    --light-zeus: #2a2a2a;
    --lightest-zeus: #3c3c3c;

    --dark-slate: #3e464f;
    --slate: #5e666e;
    --light-slate: #b5babc;
    --lightest-slate: #ffffff;

    --contessa: #b46c6c;
    --light-contessa: #d0a4a4;

    --white: #ffffff; /
    --offwhite: #dfdbdd;
    --black: #000000;

    --green: #17d4a9;
    --sand: #efcc94;

    /* Cursor gradients */
    --cursor: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    --cursor-shadow: rgba(255, 255, 255, 0.3);
    --cursor-mouse-down: rgba(255, 255, 255, 0.5);
    --cursor-trail: 255, 255, 255;

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
    --nav-height: 90px;
    --nav-scroll-height: 90px;

    /* Tabs */
    --tab-height: 42px;
    --tab-width: 120px;

    /* Animation */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Scrollbar */
    --scrollbar-bg: var(--lightest-zeus);
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

  /* Light Mode Overrides */
  .light-mode {
    --midnight: #ececec;
    --light-midnight: #ececec;
    --lightest-midnight: #d4d6d7;

    --zeus: #ffffff;
    --light-zeus: #f2f2f2;
    --lightest-zeus: #e0e0e0;

    --dark-slate: #3e464f;
    --slate: #5e666e;
    --light-slate: #b5babc;
    --lightest-slate: #282c33;

    --contessa: #f0d4d4;
    --light-contessa: #b46c6c;

    --white: #000000; 
    --offwhite: #1a1a1a;
    --black: #ffffff;

    --green: #17d4a9;
    --sand: #efcc94;

    /* Cursor gradients */
    --cursor: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    --cursor-shadow: rgba(0, 0, 0, 0.3);
    --cursor-mouse-down: rgba(0, 0, 0, 0.5);
    --cursor-trail: 0, 0, 0; 
  }
`;

export default variables;
