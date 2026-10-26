import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    background-image: ${props => `url("${props.theme.backgroundImages.desktop}")`};
    font-family: 'Rubik', sans-serif;

    @media ${device.md} {
      background-image: ${props => `url("${props.theme.backgroundImages.tablet}")`};
    }

    @media ${device.xs} {
      background-image: ${props => `url("${props.theme.backgroundImages.mobile}")`};
    }
  }
`
