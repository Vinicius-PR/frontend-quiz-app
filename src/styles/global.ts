import styled, { createGlobalStyle } from "styled-components";

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

    @media (max-width: 1288px) {
      margin: 0 64px;
    }

    @media (max-width: 760px) {
      margin: 0 24px;
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
`

export const HeadingLRegular = styled.h1`
  font-size: 4rem; // 64px
  font-weight: 300;
  line-height: 100%; /* 64px */
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
`