import { css } from 'styled-components';
import darkMode from './darkmode';
import lightMode from './lightmode';

const globalVariables = css`
  :root {
    /* Base Palette */
    --midnight: #0e1116;
    --light-midnight: #1a1d24;
    --lightest-midnight: #282c33;

    /* Refined Grayscale Palette */
    --very-light-gray: #e6e6e6;
    --light-gray: #adadad;
    --gray: #6d7278;
    --charcoal: #2f3338;
    --black: #000000;

    /* Light Neutrals */
    --white: #f8f9fa;
    --cloud-white: #ededed;
    --offwhite: #dcdcdc;

    /* Accents: Green and Blue */
    --green: #19f9d8;
    --blue: #6fc1ff;
    --sand: #efcc94;

    /* Stars */
    --bg-star-color: var(--green);
    --star1-size: 1px;
    --star1-speed: 50s;

    --star2-size: 2px;
    --star2-speed: 80s;

    --star3-size: 3px;
    --star3-speed: 100s;

    /* Fonts */
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    /* Font Sizes */
    --fz-xxs: 13px;
    --fz-xs: 14px;
    --fz-sm: 15px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    /* Borders */
    --border-radius: 4px;
    --scrollbar-border-radius: 10px;

    /* Sides */
    --side-element-left-margin: 5%;
    --side-element-right-margin: 5%;
    --side-element-left-margin-mobile: 20px;
    --side-element-right-margin-mobile: 20px;

    /* Navigation */
    --nav-height: 90px;
    --nav-scroll-height: 90px;

    /* Tabs */
    --tab-height: 42px;
    --tab-width: 120px;

    /* Animation */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Hamburger */
    --hamburger-width: 30px;
    --hamburger-transition: all 0.3s ease-in-out;
  }
`;

// check components/utils/light.js to changed default theme (light or dark)
const variables = css`
  ${globalVariables}
  ${lightMode} 
  ${darkMode} /* default theme */
`;

export default variables;
