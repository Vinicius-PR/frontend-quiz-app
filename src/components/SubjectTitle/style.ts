import styled from "styled-components"
import { device } from "../../styles/breakpoints"
import { textPreset4, textPreset4Mobile } from "../../styles/typography"

export const SubjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media ${device.sm} {
    gap: 1rem;
  }
`

export const Title = styled.h2`
  ${textPreset4};
  color: ${props => props.theme.colors.text};

  @media ${device.sm} {
    ${textPreset4Mobile};
  }
`