import { css } from 'styled-components';
import darkMode from './darkmode';
import lightMode from './lightmode';

const globalVariables = css`
  :root {
    /* Stars */
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
