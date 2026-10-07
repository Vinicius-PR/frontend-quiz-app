import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { textPreset4 } from "../../styles/typography";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  /* margin-top: 83px; */
  margin-bottom: 85px;

  @media ${device.md} {
    /* margin-top: 40px; */
    margin-bottom: 50px;
  }
  
`

export const SubjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  div {
    height: 100%;
    border: 1px solid red;
  }

  h3 {
    ${textPreset4}
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
