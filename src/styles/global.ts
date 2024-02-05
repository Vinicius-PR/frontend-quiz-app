import styled, { createGlobalStyle } from "styled-components";
import { device } from "../breakpoints";

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
    color: ${props => props.theme.colors.mainText};
    background-color: ${props => props.theme.colors.background};
    
    @media ${device.lg} {
      margin: 0 64px 64px;
    }

    @media ${device.sm} {
      margin: 0 24px 24px;
    }
  }
`

export const BodyM = styled.p`
  font-size: 1.5rem; // 24px
  font-weight: 400;
  line-height: 150%; /* 36px */
`

export const BodyS = styled.p`
  font-size: 1.25rem; // 20px
  font-style: italic;
  font-weight: 400;
  line-height: 150%; /* 30px */

  @media ${device.sm} {
    font-size: 1rem; // 16px
  }

  @media ${device.xs} {
    font-size: 0.875rem; // 14px
  }
`

export const Display = styled.h1`
  font-size: 9rem; // 144px
  font-weight: 500;
  line-height: 100%; /* 144px */
`

export const HeadingLBold = styled.h1`
  font-size: 4rem; // 64px
  font-weight: 500;
  line-height: 100%; /* 64px */

  @media ${device.sm} {
    font-size: 3.125rem; // 50px
  }

  @media ${device.xs} {
    font-size: 2.5rem; // 40px
  }
`

export const HeadingLRegular = styled.h1`
  font-size: 4rem; // 64px
  font-weight: 300;
  line-height: 100%; /* 64px */

  @media ${device.sm} {
    font-size: 3.125rem; // 50px
  }

  @media ${device.xs} {
    font-size: 2.5rem; // 40px
  }
`

export const HeadingM = styled.h2`
  font-size: 2.25rem; // 36px
  font-weight: 500;
  line-height: 120%; /* 43.2px */
`

export const HeadingS = styled.h3`
  font-size: 1.75rem; // 28px
  font-weight: 500;
  line-height: 100%; /* 28px */

  @media ${device.sm} {
    font-size: 1.375rem; // 22px
  }

  @media ${device.xs} {
    font-size: 1.125rem; // 18px
  }
`