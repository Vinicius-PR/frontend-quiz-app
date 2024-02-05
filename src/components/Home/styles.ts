import styled from "styled-components";
import { device } from "../../breakpoints";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;

  @media ${device.md} {
    flex-direction: column;
    gap: 64px;
  }

  @media ${device.sm} {
    gap: 40px;
  }
`

export const TextContainer = styled.div`
  p {
    margin-top: 48px;
  }

   @media ${device.md} {
    p {
      margin-top: 16px;
    }
  }
`

export const SubjectContainer = styled.div`
  width: 564px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      background-color: ${props => props.theme.colors.backgroundOptions};
      border-radius: 24px;
      padding: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 32px;
    }
  }

   @media ${device.md} {
    width: 100%;
  }
`