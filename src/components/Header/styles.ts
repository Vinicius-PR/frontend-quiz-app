import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { textPreset4, textPreset4Mobile } from "../../styles/typography";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;

  @media ${device.md} {
    margin-bottom: 50px;
  }
`

export const SubjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media ${device.sm} {
    gap: 1rem;
  }
`

export const SubjectTitle = styled.h2`
  ${textPreset4};

  @media ${device.sm} {
    ${textPreset4Mobile};
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${device.sm} {
    gap: 0.5rem;
  }
`
