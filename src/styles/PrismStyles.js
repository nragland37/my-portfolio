import { css } from 'styled-components';

const prismColors = {
  bg: '#2a2c2d', // _very-dark-gray
  lineHighlight: '#222223', // _charcoal
  green: '#19f9d8', // _green
  red: '#FF2C6D', // _red
  lightRed: '#FF4B82', // _light-red
  orange: '#FFB86C', // _orange
  gray: '#BBBBBB', // _gray
  lightGray: '#D0D0D0', // _light-gray
  blue: '#45A9F9', // _blue
  lightBlue: '#6FC1FF', // _light-blue
  purple: '#B084EB', // _purple
  lightPurple: '#BCAAFE', // _light-purple
};

const PrismStyles = css`
  .gatsby-highlight {
    background-color: ${prismColors.bg};
    color: ${prismColors.gray};
    border-radius: var(--border-radius);
    margin: 2em 0;
    padding: 1.25em;
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--fz-sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
    padding-top: 2em;
  }

  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${prismColors.bg};
    color: ${prismColors.gray};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${prismColors.lineHighlight};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: ${prismColors.lineHighlight};
    border-left: 2px solid ${prismColors.green};
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  .gatsby-highlight pre[class*='language-']::before {
    background: ${prismColors.lineHighlight};
    color: ${prismColors.lightGray};
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.lightGray};
  }

  .token.punctuation {
    color: ${prismColors.gray};
  }

  .token.namespace,
  .token.deleted {
    color: ${prismColors.red};
  }

  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${prismColors.orange};
  }

  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${prismColors.lightRed};
  }

  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${prismColors.orange};
  }

  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${prismColors.green};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${prismColors.green};
  }

  .token.important,
  .token.bold {
    font-weight: 600;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }
`;

export default PrismStyles;
