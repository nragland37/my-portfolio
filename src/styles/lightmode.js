import { css } from 'styled-components';

const lightMode = css`
  .light-mode {
    /* Base Light Palette */
    --white: #f8f9fa;
    --dark-white: #e4e6e8;
    --darkest-white: #d1d4d8;

    /* Accents: Darker Green and Blue */
    --green: #16d5b9; /* Slightly darker */
    --blue: #5aa3d9; /* Slightly darker */
    --sand: #d4a76c; /* Slightly darker */

    /********************************/
    /* ----- LIGHT MODE COLORS ----- */
    /********************************/

    /* ----- Cursor (Inverted) ----- */
    --cursor-border: var(--charcoal);
    --cursor-bg: var(--white);
    --cursor-dot: var(--green);
    --cursor-background: radial-gradient(
      circle,
      rgba(248, 249, 250, 0.3) 0%,
      rgba(248, 249, 250, 0) 80%
    );
    --cursor-mouse-down-border: var(--green);
    --cursor-mouse-down-shadow: rgba(248, 249, 250, 0.5);
    --cursor-trail-shadow: rgba(25, 249, 216, 0.3);
    --cursor-trail: 25, 249, 216;

    /* ----- Menu ----- */
    --menu-text-color: var(--charcoal);
    --menu-background: 0, 0, 0;
    --menu-hover-text: var(--green);
    --menu-hover-background: var(--dark-white);
    --social-section-background: var(--white);
    --social-icon-color: var(--cloud-white);
    --resume-button-text: var(--charcoal);
    --resume-button-background: var(--green);
    --hamburger-button-color: var(--charcoal);
    --hamburger-active-color: var(--green);

    /* ----- Nav ----- */
    --nav-box-shadow: var(--green);
    --nav-logo-color: var(--charcoal);
    --nav-logo-background: var(--white);
    --nav-link-color: var(--green);
    --nav-logo-svg-fill: var(--charcoal);

    /* ----- Global ----- */
    --bg: var(--white);
    --bg-header: var(--dark-white);
    --bg-star-color: var(--charcoal);

    /* Main Text */
    --text-primary: var(--charcoal);
    --text-secondary: var(--gray);
    --section-title: var(--charcoal);
    --section-title-hover: var(--green);

    /* Highlight Selection */
    --highlight-bg: var(--darkest-white);
    --highlight-text: var(--black);

    /* Scrollbar */
    --scrollbar-bg: var(--dark-white);
    --scrollbar-thumb: var(--gray);
    --scrollbar-thumb-hover: var(--charcoal);
    --scrollbar-border: var(--dark-white);

    /* Miscellaneous */
    --bg-code: var(--dark-white);
    --code: var(--charcoal);
    --blockquote-border: var(--blue);
    --bg-hr: var(--darkest-white);
    --overline: var(--green);
    --subtitle: var(--gray);
    --breadcrumb: var(--charcoal);
    --global-fancy-list: var(--charcoal);
    --section-accent: var(--dark-white);
    --section-number: var(--green);

    /* ----- Mixins ----- */
    --button-default: var(--charcoal);
    --button-bg-default: var(--white);
    --button-border-default: var(--green);
    --button-hover-shadow-default: var(--green);
    --button-hover-default: var(--dark-white);
    --link: var(--blue);
    --link-hover: var(--green);
    --inline-link: var(--green);
    --inline-link-hover: var(--charcoal);
    --inline-link-hover-accent: var(--blue);
    --inline-link-bg: var(--green);
    --small-button: var(--charcoal);
    --small-button-bg: var(--white);
    --small-button-border: var(--blue);
    --small-button-hover-shadow: var(--blue);
    --small-button-hover: var(--dark-white);
    --big-button: var(--charcoal);
    --big-button-bg: var(--white);
    --big-button-border: var(--green);
    --big-button-hover-shadow: var(--green);
    --big-button-hover: var(--dark-white);
    --box-shadow-default: var(--charcoal);
    --box-shadow-hover-default: var(--green);
    --mixins-fancy-list: var(--charcoal);

    /* ----- Components ----- */

    /* About */
    --about-skill-bullet: var(--green);
    --about-wrapper-bg: var(--dark-white);
    --about-blend-overlay: var(--gray);
    --about-border: var(--blue);
    --about-category-text: var(--green);

    /* Contact */
    --contact-overline: var(--green);
    --contact-title: var(--charcoal);
    --contact-email-link-bg: var(--dark-white);

    /* Featured */
    --featured-overline: var(--blue);
    --featured-title: var(--charcoal);
    --featured-description-bg: var(--white);
    --featured-description-text: var(--gray);
    --featured-tech-list: var(--gray);
    --featured-tech-list-mobile: var(--gray);
    --featured-link-color: var(--charcoal);
    --featured-image-bg: var(--darkest-white);
    --featured-image-overlay: var(--gray);

    /* Hero */
    --hero-h1-title: var(--charcoal);
    --hero-h2-title: var(--gray);
    --hero-h3-title: var(--green);
    --hero-shadow: rgba(0, 0, 0, 0.8);
    --hero-text-shadow: rgba(0, 0, 0, 0.25);
    --hero-mouse: var(--charcoal);

    /* Jobs */
    --jobs-tab-border: var(--green);
    --jobs-tab-active: var(--green);
    --jobs-tab-inactive: var(--charcoal);
    --jobs-hover-bg: var(--darkest-white);
    --jobs-highlight-bg: var(--green);
    --jobs-company-text: var(--green);
    --jobs-department-text: var(--gray);
    --jobs-range-text: var(--green);

    /* Projects */
    --projects-bg: var(--white);
    --projects-folder-color: var(--blue);
    --projects-links-color: var(--gray);
    --projects-title-color: var(--charcoal);
    --projects-description-color: var(--gray);
    --projects-tech-color: var(--gray);

    /* ----- Archive ----- */
    --table-bg: var(--white);
    --table-header-bg: var(--white);

    --table-text-year: var(--charcoal);
    --table-text-title: var(--green);
    --table-text-tech: var(--charcoal);
    --table-tech-separator: var(--sand);

    --table-accent: var(--green);
    --table-row-hover: var(--very-light-gray);
    --table-border-color: var(--light-gray);

    /* ----- Blog ----- */
    --blog-bg: var(--white);
    --blog-icon-color: var(--green);
    --blog-title-color: var(--charcoal);
    --blog-desc-color: var(--gray);
    --blog-date-color: var(--gray);
    --blog-tag-color: var(--green);

    /* ----- Blog/Tags ----- */
    --blog-tags-list-color: var(--gray);
    --blog-tags-link-color: var(--green);
    --blog-tags-count-color: var(--charcoal);

    /* ----- 404 ----- */
    --404-title-color: var(--blue);

    /* Email */
    --email-text-color: var(--charcoal);
    --email-hover-color: var(--green);
    --email-copied-message-color: var(--green);
    --email-copied-message-shadow: rgba(25, 25, 25, 0.5);

    /* Options */
    --options-icon-color: var(--charcoal);
    --options-icon-hover-color: var(--green);
    --options-border-color: var(--charcoal);

    /* Footer */
    --footer-text-color: var(--charcoal);
    --footer-social-link-color: var(--charcoal);
  }
`;

export default lightMode;
