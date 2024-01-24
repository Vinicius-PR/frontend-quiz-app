import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  p {
    margin-top: 48px;
  }
`

export const SubjectContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      background-color: ${props => props.theme.colors.pureWhite};
      border-radius: 24px;
      padding: 20px;

      display: flex;
      gap: 32px;
    }
  }
`