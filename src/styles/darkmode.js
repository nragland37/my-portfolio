import { css } from 'styled-components';

const darkMode = css`
  .dark-mode {
    /* Base Dark Palette 
    --midnight: #0e1116;
    --light-midnight: #141820; 
    --lightest-midnight: #1f232b; 

    /* Accents: Green and Blue */
    --green: #19f9d8;
    --blue: #6fc1ff;
    --sand: #efcc94;

    /********************************/
    /* ----- DARK MODE COLORS ----- */
    /********************************/

    /* ----- Cursor ----- */
    --cursor-border: var(--cloud-white);
    --cursor-dot: var(--green);
    --cursor-bg: var(--charcoal);
    --cursor-background: radial-gradient(
      circle,
      rgba(10, 10, 10, 0.3) 0%,
      rgba(10, 10, 10, 0) 80%
    );
    --cursor-mouse-down-border: var(--green);
    --cursor-mouse-down-shadow: rgba(10, 10, 10, 0.5);
    --cursor-trail-shadow: rgba(25, 249, 216, 0.3);
    --cursor-trail: 25, 249, 216;

    /* ----- Menu ----- */
    --menu-text-color: var(--cloud-white);
    --menu-background: 250, 250, 250;
    --menu-hover-text: var(--green);
    --menu-hover-background: var(--charcoal);
    --social-section-background: var(--midnight);
    --social-icon-color: var(--charcoal); /* Ensure this is fully opaque */
    --resume-button-text: var(--white);
    --resume-button-background: var(--green);
    --hamburger-button-color: var(--white);
    --hamburger-active-color: var(--green);

    /* ----- Nav ----- */
    --nav-box-shadow: var(--green);
    --nav-logo-color: var(--white);
    --nav-logo-background: var(--midnight);
    --nav-link-color: var(--green);
    --nav-logo-svg-fill: var(--white);

    /* ----- Global ----- */
    --bg: var(--midnight);
    --bg-header: var(--light-midnight);
    --bg-star-color: var(--white);

    /* Main Text */
    --text-primary: var(--cloud-white);
    --text-secondary: var(--light-gray);
    --section-title: var(--white);
    --section-title-hover: var(--green);

    /* Highlight Selection */
    --highlight-bg: var(--offwhite);
    --highlight-text: var(--black);

    /* Scrollbar */
    --scrollbar-bg: var(--lightest-midnight);
    --scrollbar-thumb: var(--gray);
    --scrollbar-thumb-hover: var(--light-gray);
    --scrollbar-border: var(--lightest-midnight);

    /* Miscellaneous */
    --bg-code: var(--charcoal);
    --code: var(--cloud-white);
    --blockquote-border: var(--blue);
    --bg-hr: var(--lightest-midnight);
    --overline: var(--green);
    --subtitle: var(--light-gray);
    --breadcrumb: var(--gray);
    --global-fancy-list: var(--cloud-white);
    --section-accent: var(--charcoal);
    --section-number: var(--green);

    /* ----- Mixins ----- */
    --button-default: var(--white);
    --button-bg-default: var(--midnight);
    --button-border-default: var(--green);
    --button-hover-shadow-default: var(--green);
    --button-hover-default: var(--midnight);
    --link: var(--blue);
    --link-hover: var(--green);
    --inline-link: var(--green);
    --inline-link-hover: var(--white);
    --inline-link-hover-accent: var(--blue);
    --inline-link-bg: var(--green);
    --small-button: var(--white);
    --small-button-bg: var(--midnight);
    --small-button-border: var(--blue);
    --small-button-hover-shadow: var(--blue);
    --small-button-hover: var(--midnight);
    --big-button: var(--white);
    --big-button-bg: var(--midnight);
    --big-button-border: var(--green);
    --big-button-hover-shadow: var(--green);
    --big-button-hover: var(--midnight);
    --box-shadow-default: var(--charcoal);
    --box-shadow-hover-default: var(--green);
    --mixins-fancy-list: var(--cloud-white);

    /* ----- Components ----- */

    /* About */
    --about-skill-bullet: var(--green);
    --about-wrapper-bg: var(--very-light-gray);
    --about-blend-overlay: var(--green);
    --about-border: var(--blue);
    --about-category-text: var(--green);

    /* Contact */
    --contact-overline: var(--green);
    --contact-title: var(--cloud-white);
    --contact-email-link-bg: var(--midnight);

    /* Featured */
    --featured-overline: var(--blue);
    --featured-title: var(--cloud-white);
    --featured-description-bg: var(--light-midnight);
    --featured-description-text: var(--very-light-gray);
    --featured-tech-list: var(--light-gray);
    --featured-tech-list-mobile: var(--offwhite);
    --featured-link-color: var(--cloud-white);
    --featured-image-bg: var(--white);
    --featured-image-overlay: var(--charcoal);

    /* Hero */
    --hero-h1-title: var(--cloud-white);
    --hero-h2-title: var(--gray);
    --hero-h3-title: var(--green);
    --hero-shadow: rgba(250, 250, 250, 0.5);
    --hero-mouse: var(--cloud-white);

    /* Jobs */
    --jobs-tab-border: var(--green);
    --jobs-tab-active: var(--green);
    --jobs-tab-inactive: var(--white);
    --jobs-hover-bg: var(--midnight);
    --jobs-highlight-bg: var(--green);
    --jobs-company-text: var(--green);
    --jobs-department-text: var(--light-gray);
    --jobs-range-text: var(--green);

    /* Projects */
    --projects-bg: var(--lightest-midnight);
    --projects-folder-color: var(--blue);
    --projects-links-color: var(--gray);
    --projects-title-color: var(--cloud-white);
    --projects-description-color: var(--very-light-gray);
    --projects-tech-color: var(--light-gray);

    /* ----- Archive ----- */
    --table-bg: var(--midnight);
    --table-header-bg: var(--midnight);

    --table-text-year: var(--cloud-white);
    --table-text-title: var(--green);
    --table-text-tech: var(--cloud-white);
    --table-tech-separator: var(--sand);

    --table-accent: var(--green);
    --table-row-hover: var(--charcoal);
    --table-border-color: var(--light-gray);

    /* ----- Blog ----- */
    --blog-bg: var(--lightest-midnight);
    --blog-icon-color: var(--green);
    --blog-title-color: var(--cloud-white);
    --blog-desc-color: var(--offwhite);
    --blog-date-color: var(--offwhite);
    --blog-tag-color: var(--green);

    /* ----- Blog/Tags ----- */
    --blog-tags-list-color: var(--light-gray);
    --blog-tags-link-color: var(--green);
    --blog-tags-count-color: var(--gray);

    /* ----- 404 ----- */
    --404-title-color: var(--blue);

    /* Email */
    --email-text-color: var(--cloud-white);
    --email-hover-color: var(--green);
    --email-copied-message-color: var(--green);
    --email-copied-message-shadow: rgba(2, 12, 27, 0.7);

    /* Options */
    --options-icon-color: var(--cloud-white);
    --options-icon-hover-color: var(--green);
    --options-border-color: var(--cloud-white);

    /* Footer */
    --footer-text-color: var(--cloud-white);
    --footer-social-link-color: var(--cloud-white);
  }
`;

export default darkMode;
