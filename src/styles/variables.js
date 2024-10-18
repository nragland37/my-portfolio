import { css } from 'styled-components';

const variables = css`
  :root {
    /*****************************/
    /* ----- COLOR PALETTE ----- */
    /*****************************/

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

    --white: #ffffff;
    --cloud-white: #f9f9f9;
    --offwhite: #dfdbdd;
    --unicorn-silver: #e8e8e8;
    --alto-grey: #e0e0e0;
    --dim-gray: #6e6e6e;
    --black: #000000;

    --green: #17d4a9;
    --sand: #efcc94;
    --soft-yellow: #f7e5c6;
    --ocean-blue: #78b0e0;

    /********************************/
    /* ----- DARK MODE COLORS ----- */
    /********************************/

    /* ----- Cursor ----- */
    --cursor-border: var(--white);
    --cursor-dot: var(--white);
    --cursor-background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    --cursor-mouse-down-border: var(--green);
    --cursor-mouse-down-shadow: rgba(255, 255, 255, 0.5);
    --cursor-trail-shadow: rgba(var(--cursor-trail), 0.3);
    --cursor-trail: 255, 255, 255;

    /* ----- Menu ----- */
    --menu-text-color: var(--white);
    --menu-background: var(--white);
    --menu-hover-text: var(--green);
    --menu-hover-background: var(--midnight);
    --social-section-background: var(--midnight);
    --social-icon-color: var(--white);
    --resume-button-text: var(--white);
    --resume-button-background: var(--green);
    --hamburger-button-color: var(--white);
    --hamburger-active-color: var(--green);

    /* ----- Nav ----- */
    --nav-background: var(--midnight);
    --nav-box-shadow: var(--green);
    --nav-logo-color: var(--white);
    --nav-logo-background: var(--midnight);
    --nav-hover-logo-fill: var(--white);
    --nav-link-color: var(--green);
    --nav-logo-svg-fill: var(--white);
    --social-icon-color: var(--white);

    /* ----- Global ----- */
    /* Backgrounds */
    --bg: var(--midnight);
    --bg-header: var(--midnight);
    --bg-star-color: var(--white);

    /* Logo */
    --logo: var(--white);

    /* Main Text */
    --text-primary: var(--lightest-slate);
    --text-secondary: var(--light-slate);
    --section-title: var(--white);
    --section-title-hover: var(--green);

    /* Highlight Selection */
    --highlight-bg: var(--white);
    --highlight-text: var(--black);

    /* Scrollbar */
    --scrollbar-bg: var(--light-zeus);
    --scrollbar-thumb: var(--slate);
    --scrollbar-thumb-hover: var(--light-slate);
    --scrollbar-border: var(--light-zeus);
    --scrollbar-border-radius: 10px;

    /* Miscelaneous */
    --bg-code: var(--light-zesu);
    --code: var(--white);
    --blockquote-border: var(--sand);
    --bg-hr: var(--lightest-midnight);
    --overline: var(--sand);
    --subtitle: var(--sand);
    --breadcrumb: var(--sand);
    --global-fancy-list: var(--white);
    --section-accent: var(--slate);
    --section-number: var(--green);

    /* ----- Mixins ----- */
    --button-default: var(--white);
    --button-bg-default: var(--midnight);
    --button-border-default: var(--sand);
    --button-hover-shadow-default: var(--sand);
    --button-hover-default: var(--midnight);
    --link: var(--white);
    --link-hover: var(--sand);
    --inline-link: var(--green);
    --inline-link-hover: var(--white);
    --inline-link-hover-accent: var(--green);
    --inline-link-bg: var(--green);
    --small-button: var(--white);
    --small-button-bg: var(--midnight);
    --small-button-border: var(--sand);
    --small-button-hover-shadow: var(--sand);
    --small-button-hover: var(--midnight);
    --big-button: var(--white);
    --big-button-bg: var(--midnight);
    --big-button-border: var(--green);
    --big-button-hover-shadow: var(--green);
    --big-button-hover: var(--midnight);
    --box-shadow-default: var(--lightest-midnight);
    --box-shadow-hover-default: var(--sand);
    --mixins-fancy-list: var(--white);

    /* ----- Components ----- */

    /* About */
    --about-skill-bullet: var(--green);
    --about-wrapper-bg: var(--white);
    --about-blend-overlay: var(--sand);
    --about-border: var(--sand);
    --about-category-text: var(--green);

    /* Contact */
    --contact-overline: var(--green);
    --contact-title: var(--white);
    --contact-email-link-bg: var(--midnight);

    /* Featured */
    --featured-overline: var(--green);
    --featured-title: var(--white);
    --featured-description-bg: var(--light-zeus);
    --featured-description-text: var(--lightest-slate);
    --featured-tech-list: var(--light-slate);
    --featured-tech-list-mobile: var(--lightest-slate);
    --featured-link-color: var(--lightest-slate);
    --featured-image-bg: var(--white);
    --featured-image-overlay: var(--midnight);

    /* Hero */
    --hero-h1-title: var(--white);
    --hero-h2-title: var(--slate);
    --hero-h3-title: var(--green);

    /* Jobs */
    --jobs-tab-border: var(--sand);
    --jobs-tab-active: var(--green);
    --jobs-tab-inactive: var(--white);
    --jobs-hover-bg: var(--lightest-midnight);
    --jobs-highlight-bg: var(--green);
    --jobs-company-text: var(--sand);
    --jobs-department-text: var(--light-slate);
    --jobs-range-text: var(--sand);

    /* Projects */
    --projects-bg: var(--light-zeus);
    --projects-folder-color: var(--green);
    --projects-links-color: var(--slate);
    --projects-title-color: var(--lightest-slate);
    --projects-description-color: var(--lightest-slate);
    --projects-tech-color: var(--light-slate);

    /* Email */
    --email-text-color: var(--white);
    --email-hover-color: var(--green);
    --email-copied-message-color: var(--green);
    --email-copied-message-shadow: rgba(2, 12, 27, 0.7);

    /* Footer */
    --footer-text-color: var(--white);
    --footer-social-link-color: var(--white);

    /* Options */
    --options-icon-color: var(--white);
    --options-icon-hover-color: var(--green);
    --options-border-color: var(--white);

    /* Side */
    --side-color: var(--white);
    --side-element-left-margin: 5%;
    --side-element-right-margin: 5%;
    --side-element-left-margin-mobile: 20px;
    --side-element-right-margin-mobile: 20px;


    /* **************************************************** */


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
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  /**************************/
  /* ----- LIGHT MODE ----- */
  /**************************/

  .light-mode {
    /* ----- Cursor ----- */
    --cursor-border: var(--black);
    --cursor-dot: var(--black);
    --cursor-background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    --cursor-mouse-down-border: var(--green);
    --cursor-mouse-down-shadow: rgba(0, 0, 0, 0.5);
    --cursor-trail-shadow: rgba(var(--cursor-trail), 0.3);
    --cursor-trail: 0, 0, 0;

    /* ----- Menu ----- */
    --menu-text-color: var(--black);
    --menu-background: var(--unicorn-silver);
    --menu-hover-text: var(--green);
    --menu-hover-background: var(--alto-grey);
    --social-section-background: var(--alto-grey);
    --social-icon-color: var(--black);
    --resume-button-text: var(--black);
    --resume-button-background: var(--green);
    --hamburger-button-color: var(--black);
    --hamburger-active-color: var(--green);

    /* ----- Nav ----- */
    --nav-background: var(--unicorn-silver);
    --nav-box-shadow: var(--green);
    --nav-logo-color: var(--black);
    --nav-logo-background: var(--unicorn-silver);
    --nav-hover-logo-fill: var(--black);
    --nav-link-color: var(--green);
    --nav-logo-svg-fill: var(--black);
    --social-icon-color: var(--black);

    /* ----- Global ----- */
    /* Backgrounds */
    --bg: var(--cloud-white);
    --bg-header: var(--unicorn-silver);
    --bg-star-color: var(--black);

    /* Logo */
    --logo: var(--black);

    /* Main Text */
    --text-primary: var(--dim-gray);
    --text-secondary: var(--slate);
    --section-title: var(--black);
    --section-title-hover: var(--green);

    /* Highlight Selection */
    --highlight-bg: var(--black);
    --highlight-text: var(--white);

    /* Scrollbar */
    --scrollbar-bg: var(--lightest-zeus);
    --scrollbar-thumb: var(--slate);
    --scrollbar-thumb-hover: var(--light-slate);
    --scrollbar-border: var(--light-zeus);
    --scrollbar-border-radius: 10px;

    /* Miscellaneous */
    --bg-code: var(--unicorn-silver);
    --code: var(--black);
    --blockquote-border: var(--sand);
    --bg-hr: var(--alto-grey);
    --overline: var(--sand);
    --subtitle: var(--sand);
    --breadcrumb: var(--soft-yellow);
    --global-fancy-list: var(--black);
    --section-accent: var(--slate);
    --section-number: var(--green);

    /* ----- Mixins ----- */
    --button-default: var(--black);
    --button-bg-default: var(--alto-grey);
    --button-border-default: var(--sand);
    --button-hover-shadow-default: var(--green);
    --button-hover-default: var(--black);
    --link: var(--black);
    --link-hover: var(--ocean-blue);
    --inline-link: var(--green);
    --inline-link-hover: var(--black);
    --inline-link-hover-accent: var(--green);
    --inline-link-bg: var(--green);
    --small-button: var(--black);
    --small-button-bg: var(--unicorn-silver);
    --small-button-border: var(--sand);
    --small-button-hover-shadow: var(--green);
    --small-button-hover: var(--black);
    --big-button: var(--black);
    --big-button-bg: var(--unicorn-silver);
    --big-button-border: var(--green);
    --big-button-hover-shadow: var(--green);
    --big-button-hover: var(--alto-grey);
    --box-shadow-default: var(--alto-grey);
    --box-shadow-hover-default: var(--green);
    --mixins-fancy-list: var(--black);

    /* ----- Components ----- */

    /* About */
    --about-skill-bullet: var(--green);
    --about-wrapper-bg: var(--alto-grey);
    --about-blend-overlay: var(--soft-yellow);
    --about-border: var(--sand);
    --about-category-text: var(--green);

    /* Contact */
    --contact-overline: var(--green);
    --contact-title: var(--black);
    --contact-email-link-bg: var(--unicorn-silver);

    /* Featured */
    --featured-overline: var(--green);
    --featured-title: var(--black);
    --featured-description-bg: var(--lightest-zeus);
    --featured-description-text: var(--dark-slate);
    --featured-tech-list: var(--light-slate);
    --featured-tech-list-mobile: var(--lightest-slate);
    --featured-link-color: var(--dark-slate);
    --featured-image-bg: var(--unicorn-silver);
    --featured-image-overlay: var(--cloud-white);

    /* Hero */
    --hero-h1-title: var(--black);
    --hero-h2-title: var(--slate);
    --hero-h3-title: var(--green);

    /* Jobs */
    --jobs-tab-border: var(--sand);
    --jobs-tab-active: var(--green);
    --jobs-tab-inactive: var(--black);
    --jobs-hover-bg: var(--alto-grey);
    --jobs-highlight-bg: var(--green);
    --jobs-company-text: var(--sand);
    --jobs-department-text: var(--light-slate);
    --jobs-range-text: var(--sand);

    /* Projects */
    --projects-bg: var(--lightest-zeus);
    --projects-folder-color: var(--green);
    --projects-links-color: var(--slate);
    --projects-title-color: var(--black);
    --projects-description-color: var(--dark-slate);
    --projects-tech-color: var(--light-slate);

    /* Email */
    --email-text-color: var(--black);
    --email-hover-color: var(--green);
    --email-copied-message-color: var(--green);
    --email-copied-message-shadow: rgba(2, 12, 27, 0.7);

    /* Footer */
    --footer-text-color: var(--black);
    --footer-social-link-color: var(--black);

    /* Options */
    --options-icon-color: var(--black);
    --options-icon-hover-color: var(--green);
    --options-border-color: var(--black);

    /* Side */
    --side-color: var(--black);
    --side-element-left-margin: 5%;
    --side-element-right-margin: 5%;
    --side-element-left-margin-mobile: 20px;
    --side-element-right-margin-mobile: 20px;

    
  }
`;

export default variables;
