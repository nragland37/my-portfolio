import { css } from 'styled-components';

// Using the current color palette
const prismColors = {
  bg: `var(--midnight)`, // Background for code blocks
  lineHighlight: `var(--light-midnight)`, // Background for highlighted lines
  green: `var(--green)`, // Green for important code
  contessa: `var(--contessa)`, // Contessa for functions, errors, and deletions
  lightContessa: `var(--light-contessa)`, // Light Contessa for operators, attributes, etc.
  sand: `var(--sand)`, // Sand for constants, numbers, and more
  slate: `var(--slate)`, // Slate for punctuation
  lightSlate: `var(--light-slate)`, // Light Slate for comments
};

const PrismStyles = css`
  /* General styles for code blocks */
  .gatsby-highlight {
    background-color: ${prismColors.bg};
    color: ${prismColors.slate};
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

  /* Remove default PrismJS styles and adjust for gatsby-highlight */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
    padding-top: 2em;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${prismColors.bg};
    color: ${prismColors.slate};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${prismColors.lineHighlight};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${prismColors.lineHighlight};
    border-left: 2px solid ${prismColors.green};
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  /* Language badges */
  .gatsby-highlight pre[class*='language-']::before {
    background: var(--light-midnight);
    color: var(--white);
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

  /* Prism token styles */
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.lightSlate}; /* Comments */
  }

  .token.punctuation {
    color: ${prismColors.slate}; /* Punctuation */
  }

  .token.namespace,
  .token.deleted {
    color: ${prismColors.contessa}; /* Deleted code or errors */
  }

  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${prismColors.sand}; /* Constants, symbols */
  }

  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${prismColors.lightContessa}; /* Operators, attributes */
  }

  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${prismColors.sand}; /* Keywords, numbers */
  }

  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${prismColors.green}; /* Tags, URLs, built-in properties */
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${prismColors.green}; /* Strings, variables */
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
