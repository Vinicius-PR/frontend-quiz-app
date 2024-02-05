import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width:768px) {
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width:375px) {
    flex-direction: column;
    gap: 40px;
  }
`

export const TextContainer = styled.div`
  p {
    margin-top: 48px;
  }

  @media (max-width:768px) {
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
      background-color: ${props => props.theme.colors.pureWhite};
      border-radius: 24px;
      padding: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 32px;
    }
  }

  @media (max-width:768px) {
    width: 100%;
  }
`