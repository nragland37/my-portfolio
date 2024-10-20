import { css } from 'styled-components';

const lightMode = css`
  .light-mode {
    --midnight: #0e1116;
    --light-midnight: #1a1d24;
    --lightest-midnight: #282c33;

    --zeus: #1c1c1c;
    --light-zeus: #2a2a2a;
    --lightest-zeus: #3d3d3d;

    --dark-slate: #4b5259;
    --light-slate: #c9cfd4;
    --lightest-slate: #e5e8eb;

    --contessa: #b46c6c;
    --light-contessa: #d0a4a4;

    --white: #ededed;
    --cloud-white: #f2f2f2;
    --offwhite: #e6e6e6;
    --unicorn-silver: #dedede;
    --alto-grey: #d4d4d4;
    --dim-gray: #7c7c7c;

    --green: #17d4a9;
    --sand: #efcc94;
    --soft-yellow: #f7e5c6;
    --ocean-blue: #78b0e0;

    /********************************/
    /* ----- LIGHT MODE COLORS ----- */
    /********************************/

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
    --menu-text-color: var(--midnight);
    --menu-background: var(--midnight);
    --menu-hover-text: var(--green);
    --menu-hover-background: var(--lightest-slate);
    --social-section-background: var(--lightest-slate);
    --social-icon-color: var(--midnight);
    --resume-button-text: var(--midnight);
    --resume-button-background: var(--green);
    --hamburger-button-color: var(--midnight);
    --hamburger-active-color: var(--green);

    /* ----- Nav ----- */
    --nav-background: var(--lightest-slate);
    --nav-box-shadow: var(--green);
    --nav-logo-color: var(--midnight);
    --nav-logo-background: var(--lightest-slate);
    --nav-hover-logo-fill: var(--midnight);
    --nav-link-color: var(--green);
    --nav-logo-svg-fill: var(--midnight);
    --social-icon-color: var(--midnight);

    /* ----- Global ----- */
    /* Backgrounds */
    --bg: var(--unicorn-silver);
    --bg-header: var(--light-slate);
    --bg-star-color: var(--midnight);

    /* Logo */
    --logo: var(--midnight);

    /* Main Text */
    --text-primary: var(--dark-slate);
    --text-secondary: var(--slate);
    --section-title: var(--midnight);
    --section-title-hover: var(--green);

    /* Highlight Selection */
    --highlight-bg: var(--light-slate);
    --highlight-text: var(--midnight);

    /* Scrollbar */
    --scrollbar-bg: var(--lightest-zeus);
    --scrollbar-thumb: var(--dark-slate);
    --scrollbar-thumb-hover: var(--slate);
    --scrollbar-border: var(--lightest-zeus);
    --scrollbar-border-radius: 10px;

    /* Miscellaneous */
    --bg-code: var(--offwhite);
    --code: var(--midnight);
    --blockquote-border: var(--sand);
    --bg-hr: var(--light-slate);
    --overline: var(--sand);
    --subtitle: var(--sand);
    --breadcrumb: var(--sand);
    --global-fancy-list: var(--midnight);
    --section-accent: var(--dark-slate);
    --section-number: var(--green);

    /* ----- Mixins ----- */
    --button-default: var(--midnight);
    --button-bg-default: var(--white);
    --button-border-default: var(--sand);
    --button-hover-shadow-default: var(--sand);
    --button-hover-default: var(--lightest-slate);

    --link: var(--midnight);
    --link-hover: var(--sand);

    --inline-link: var(--green);
    --inline-link-hover: var(--midnight);
    --inline-link-hover-accent: var(--green);
    --inline-link-bg: var(--green);

    --small-button: var(--midnight);
    --small-button-bg: var(--white);
    --small-button-border: var(--sand);
    --small-button-hover-shadow: var(--sand);
    --small-button-hover: var(--lightest-slate);

    --big-button: var(--midnight);
    --big-button-bg: var(--white);
    --big-button-border: var(--green);
    --big-button-hover-shadow: var(--green);
    --big-button-hover: var(--lightest-slate);
    --box-shadow-default: var(--lightest-zeus);
    --box-shadow-hover-default: var(--sand);

    --mixins-fancy-list: var(--midnight);

    /* ----- Components ----- */

    /* About */
    --about-skill-bullet: var(--green);
    --about-wrapper-bg: var(--light-slate);
    --about-blend-overlay: var(--sand);
    --about-border: var(--sand);
    --about-category-text: var(--green);

    /* Contact */
    --contact-overline: var(--green);
    --contact-title: var(--midnight);
    --contact-email-link-bg: var(--white);

    /* Featured */
    --featured-overline: var(--green);
    --featured-title: var(--midnight);
    --featured-description-bg: var(--offwhite);
    --featured-description-text: var(--dark-slate);
    --featured-tech-list: var(--slate);
    --featured-tech-list-mobile: var(--dark-slate);
    --featured-link-color: var(--dark-slate);
    --featured-image-bg: var(--midnight);
    --featured-image-overlay: var(--light-slate);

    /* Hero */
    --hero-h1-title: var(--midnight);
    --hero-h2-title: var(--dark-slate);
    --hero-h3-title: var(--green);

    /* Jobs */
    --jobs-tab-border: var(--sand);
    --jobs-tab-active: var(--green);
    --jobs-tab-inactive: var(--midnight);
    --jobs-hover-bg: var(--lightest-slate);
    --jobs-highlight-bg: var(--green);
    --jobs-company-text: var(--sand);
    --jobs-department-text: var(--slate);
    --jobs-range-text: var(--sand);

    /* Projects */
    --projects-bg: var(--offwhite);
    --projects-folder-color: var(--green);
    --projects-links-color: var(--dark-slate);
    --projects-title-color: var(--dark-slate);
    --projects-description-color: var(--dark-slate);
    --projects-tech-color: var(--slate);

    /* Email */
    --email-text-color: var(--midnight);
    --email-hover-color: var(--green);
    --email-copied-message-color: var(--green);
    --email-copied-message-shadow: rgba(0, 0, 0, 0.7);

    /* Footer */
    --footer-text-color: var(--midnight);
    --footer-social-link-color: var(--midnight);

    /* Options */
    --options-icon-color: var(--midnight);
    --options-icon-hover-color: var(--green);
    --options-border-color: var(--midnight);

    /* Side */
    --side-color: var(--midnight);

    /* ----- Archive ----- */
    --table-bg: var(--lightest-slate);
    --table-header-bg: var(--offwhite);
    --table-text-primary: var(--midnight);
    --table-accent: var(--green);
    --table-row-hover: var(--light-slate);
    --table-border-color: var(--dark-slate);
  }
`;

export default lightMode;
