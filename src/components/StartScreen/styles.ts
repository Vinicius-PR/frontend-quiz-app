import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { textPreset2Light, textPreset2Medium, textPreset6, textPreset4, textPreset2MobileMedium, textPreset2MobileLight, textPreset4Mobile } from "../../styles/typography";

export const Container = styled.main`
  display: flex;
  gap: 8rem; // 128px 
  max-width: 72.30rem; // 1156.8px

  @media ${device.ml} {
    flex-direction: column;
    gap: 64px;
    align-items: center;
  }

  @media ${device.sm} {
    gap: 40px;
    margin: 0 auto;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem; // 48px

  max-width: 30rem; // 480px
  flex: 1;

  p {
    margin-top: 48px;
  }

   @media ${device.md} {
    p {
      margin-top: 16px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // 8px
`

export const SubjectContainer = styled.div`
  max-width: 35.25rem; // 564px
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      ${textPreset4};
      background-color: ${props => props.theme.colors.backgroundOptions};
      display: flex;
      align-items: center;

      border-radius: 24px;
      padding: 1.5rem;
      cursor: pointer;
      gap: 32px;
      line-height: normal;
      
      @media ${device.sm} {
        ${textPreset4Mobile};
      }
    }
  }

   @media ${device.ml} {
    width: 100%;
  }
`

export const HtmlIcon = styled.img`
  background-color: ${props => props.theme.colors.orangeLight};
  padding: 8px;
  border-radius: 8px;
`

export const CssIcon = styled.img`
  background-color: ${props => props.theme.colors.greenLight};
  padding: 8px;
  border-radius: 8px;
`

export const JavaScriptIcon = styled.img`
  background-color: ${props => props.theme.colors.bluelight};
  padding: 8px;
  border-radius: 8px;
`

export const AccessibilityIcon = styled.img`
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 8px;
  border-radius: 8px;
`

export const Subtitle = styled.h2`
  ${textPreset2Light}
  color: ${props => props.theme.colors.text};

  @media ${device.sm} {
    ${textPreset2MobileLight}
  }
`

export const Title = styled.h1`
  ${textPreset2Medium}
  color: ${props => props.theme.colors.text};

  @media ${device.sm} {
    ${textPreset2MobileMedium}
  }
`

export const SpanText = styled.span`
  ${textPreset6}
  color: ${props => props.theme.colors.spanText};
`