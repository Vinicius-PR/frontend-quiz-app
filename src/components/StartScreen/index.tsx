import { useContext } from "react";
import { Container, SubjectContainer, TextContainer } from "./styles";
import { QuizContext } from "../../context/QuizContext";

import htmlIcon from '../../assets/images/icon-html.svg'
import cssIcon from '../../assets/images/icon-css.svg'
import javaScriptIcon from '../../assets/images/icon-js.svg'
import accessibilityIcon from '../../assets/images/icon-accessibility.svg'

export default function StartScreen() {

  const { handleSetSubject, quiz } = useContext(QuizContext)
  console.log('quiz is', quiz)

  return (
    <Container>
      <TextContainer>

        <h2>
          Welcome to the
        </h2>
        <br />
        <h3>
          Frontend Quiz!
        </h3>

        <p>
          Pick a subject to get started.
        </p>

      </TextContainer>

      <SubjectContainer>
        <ul>
          <li
            onClick={() => handleSetSubject('HTML')}
          >
            <img src={htmlIcon} alt="HTML" />
            <p>HTML</p>
          </li>

          <li
            onClick={() => handleSetSubject('CSS')}
          >
            <img src={cssIcon} alt="CSS" />
            <p>CSS</p>
          </li>

          <li
            onClick={() => handleSetSubject('JavaScript')}
          >
            <img src={javaScriptIcon} alt="JavaScript" />
            <p>Javascript</p>
          </li>

          <li
            onClick={() => handleSetSubject('Accessibility')}
          >
            <img src={accessibilityIcon} alt="Accessibility" />
            <p>Accessibility</p>
          </li>
        </ul>

      </SubjectContainer>
    </Container>
  )
}