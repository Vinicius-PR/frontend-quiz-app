import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    max-width: 1160px;
    font-family: 'Rubik', sans-serif;
  }
`
