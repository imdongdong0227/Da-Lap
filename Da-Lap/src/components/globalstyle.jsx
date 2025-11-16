import { createGlobalStyle } from "styled-components";
import SCoreDream from "../fonts/SCDream3.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Escoredream';
    src: url(${SCoreDream}) format('opentype');
    font-weight: 100;
    font-display: swap;
  }

  body {
    font-family: 'Escoredream', sans-serif;
  }
`;

export default GlobalStyle;
