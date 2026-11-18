import styled from "styled-components"
import { device } from "../../styles/breakpoints"
import { textPreset1, textPreset1Mobile, textPreset2Light, textPreset2Medium, textPreset2MobileLight, textPreset2MobileMedium, textPreset4, textPreset4Mobile, textPreset5Regular} from "../../styles/typography"

export const GameFinishedContainer = styled.div`
  display: flex;
  gap: 8rem; // 128px
  max-width: 72.30rem; // 1156.8px
  color: ${props => props.theme.colors.text};

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

export const GameFinishedContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameFinishedText1 = styled.h2`
  ${textPreset2Light}

  @media ${device.sm} {
    ${textPreset2MobileLight}
  }
`

export const GameFinishedText2 = styled.h2`
  ${textPreset2Medium}

  @media ${device.sm} {
    ${textPreset2MobileMedium}
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; // 32px
  width: 35.25rem; // 564px

  @media ${device.sm} {
    width: 100%;
  }
`

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem; // 40px
  padding: 3rem; // 48px
  border-radius: 1.5rem; // 24px
  text-align: center;

  background-color: ${props => props.theme.colors.backgroundOptions};
`

export const ResultHeader = styled.div`
  display: flex;
  justify-content: center;
`

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 16px
`

export const ResultText = styled.h2`
  ${textPreset1}

  @media ${device.sm} {
    ${textPreset1Mobile}
  }
`

export const ResultSpan = styled.span`
  ${textPreset5Regular};
  color: ${props => props.theme.colors.spanText};

  @media ${device.sm} {
    ${textPreset4Mobile};
  }
`

export const PlayAgainButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  ${textPreset4};
  padding: 2rem;
  border-radius: 24px;
  border: none;
  cursor: pointer;

  @media ${device.sm} {
    padding: 1rem;
    ${textPreset4Mobile};
  }
`