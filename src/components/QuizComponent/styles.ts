import styled from "styled-components";
import { device } from "../../breakpoints";

export const QuizContainer = styled.main`
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

export const LineDiv = styled.div`
  background-color: ${props => props.theme.colors.linecolor};
  border-radius: 104px;
  padding: 4px;
  hr {
    border-radius: 104px;
    border: none;
    height: 8px;
    max-width: 300px;
    background-color: ${props => props.theme.colors.purple};
  }
`

export const QuestionContainer = styled.div`
  h2 {
    margin-top: 27px;
    margin-bottom: 164px;
  }
`

export const OptionsContainer = styled.div`
  width: 564px;

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
      background-color: ${props => props.theme.colors.backgroundOptions};
      position: relative;
      padding: 18px 20px;
      border-radius: 12px;

      input {
        visibility: hidden;
        position: absolute;
      }

      label {
        span {
          display: inline-block;
          background-color: ${props => props.theme.colors.lightGray};
          width: 56px;
          height: 56px;
          color: #626C7F;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    button {
      height: 98px;
      border-radius: 24px;
      background-color: ${props => props.theme.colors.purple};
      border: none;
      color: ${props => props.theme.colors.pureWhite};
      font-family: 'Rubik', sans-serif;
      margin-top: 8px;
      cursor: pointer;
    }
  }
`