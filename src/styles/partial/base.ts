import { css } from 'styled-components';

export const BaseStyles = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.2;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-size: 62.5%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    background: var(--color-background);
    color: var(--color-text);
    font-size: calc(1.8rem + 0.2vw);
    font-weight: 300;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  /*
  Text-level semantics
  ====================
  */

  h1 {
    font-size: calc(3rem + 3vw);
    margin: 3rem 0;
    font-weight: 900;
    text-transform: capitalize;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: calc(2.5rem + 2vw);
    margin: 2.5rem 0;
    font-weight: 800;
  }

  h3 {
    font-size: calc(2.5rem + 1.2vw);
    margin: 2rem 0;
    font-weight: 600;
  }

  h4 {
    font-size: calc(2rem + 1vw);
    margin: 2rem 0;
    font-weight: 400;
  }

  h5 {
    font-size: calc(1.8rem + 1vw);
    margin: 1.5rem 0;
    font-weight: 300;
  }

  h6 {
    font-size: calc(1.8rem + 0.7vw);
    margin: 1rem 0;
    font-weight: 200;
  }

  a {
    text-decoration: none;
    margin: 0;
    cursor: pointer;
    font-weight: 400;
    color: var(--color-primary);
  }

  p {
    font-size: calc(1.8rem + 0.2vw);
    margin: 1rem 0;
    font-weight: 300;
    line-height: calc(1.4em + 0.2vw);
    word-break: break-word;
    text-align: justify;
    width: 100%;
  }

  abbr[title] {
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.2em;
  }

  /*
  Images
  ======
  */

  img {
    max-width: 100%;
  }

  /*
  Code sections
  =============
  */

  code,
  kbd,
  samp,
  pre {
    font-size: 1em;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-size: 1.7rem;
    line-height: 1.7;
  }

  pre[class*='language-'] {
    position: relative;
    padding: 2.5rem 2rem 2rem;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: rgba(6, 188, 240, 0.1);
  }

  pre[class*='language-']::before {
    border-radius: 4px;
    font-size: 1.2rem;
    line-height: 1;
    padding: 0.5rem 0.8rem;
    position: absolute;
    right: 2px;
    text-transform: uppercase;
    font-weight: 600;
    top: 0;
  }

  /*
  Lists
  =====
  */
  ul,
  ol {
    margin: 0;
  }

  li {
    margin: 1.1rem 0;
  }

  li p {
    margin: 0 0 1.1rem;
  }

  ul li {
    list-style-type: circle;
    line-height: 1;
  }

  /*
  Tabular data
  ============
  */

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
    margin: 2.5rem 0;
    font-size: 0.9em;
    font-family: inherit;
    min-width: 4rem;
  }

  thead tr {
    text-align: left;
    background-color: var(--color-primary100);
    color:  var(--color-text);
  }
  tbody tr {
    border-bottom: var(--color-secondary100);
  }

  tbody tr:nth-of-type(even) {
    background-color: var(--color-secondary100);
  }

  th,
  td {
    padding: 12px 15px;
    min-width: 12rem;
  }

  /*
  Forms
  =====
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  /*
  Blockquotes
  =====
  */

  blockquote {
    background: var(--color-secondary100);
    border-left: 8px solid var(--color-secondary100);
    margin: 3rem 1rem;
    padding: 1rem;
    quotes: "\\201C""\\201D""\\2018""\\2019";
  }

  blockquote:before {
    color: var(--color-secondary100);
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
  }
`;
