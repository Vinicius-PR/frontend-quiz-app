import styled, { css } from "styled-components"
import { device } from "./breakpoints"

const iconBaseStyles = css`
  padding: 8px;
  border-radius: 8px;

  @media ${device.sm} {
    width: 40px;
    height: 40px;
  }
`

export const HtmlIcon = styled.img`
  background-color: ${props => props.theme.colors.orangeLight};
  ${iconBaseStyles};
`

export const CssIcon = styled.img`
  background-color: ${props => props.theme.colors.greenLight};
  ${iconBaseStyles};
`

export const JavaScriptIcon = styled.img`
  background-color: ${props => props.theme.colors.bluelight};
  ${iconBaseStyles};
`

export const AccessibilityIcon = styled.img`
  background-color: ${props => props.theme.colors.primaryLight};
  ${iconBaseStyles};
`