import { css } from 'styled-components';

const button = css`
  color: var(--button-default);
  background-color: var(--button-bg-default);
  border: 1px solid var(--button-border-default);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--button-hover-shadow-default);
    transform: translate(-5px, -5px);
    background-color: var(--button-hover-default);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: var(--link);
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--link-hover);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--inline-link);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--inline-link-hover);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--inline-link-hover-accent) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1.5px;
      position: relative;
      bottom: 0.3em;
      background-color: var(--inline-link-bg);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button, // Reuse the button style

  smallButton: css`
    color: var(--small-button);
    background-color: var(--small-button-bg);
    border: 1px solid var(--small-button-border);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--small-button-hover-shadow);
      transform: translate(-4px, -4px);
      background-color: var(--small-button-hover);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--big-button);
    background-color: var(--big-button-bg);
    border: 1px solid var(--big-button-border);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--big-button-hover-shadow);
      transform: translate(-5px, -5px);
      background-color: var(--big-button-hover);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 20px 40px -15px var(--box-shadow-default);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--box-shadow-hover-default);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--mixins-fancy-list);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
