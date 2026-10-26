import { useContext } from "react";
import { AccessibilityIcon, Container, CssIcon, HtmlIcon, JavaScriptIcon, SpanText, SubjectContainer, Subtitle, TextContainer, Title, TitleContainer } from "./styles";
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

        <TitleContainer>
          <Subtitle>
            Welcome to the
          </Subtitle>

          <Title>
            Frontend Quiz!
          </Title>
        </TitleContainer>

        <SpanText>
          Pick a subject to get started.
        </SpanText>

      </TextContainer>

      <SubjectContainer>
        <ul>
          <li
            onClick={() => handleSetSubject('HTML')}
          >
            <HtmlIcon src={htmlIcon} alt="HTML" />
            <p>HTML</p>
          </li>

          <li
            onClick={() => handleSetSubject('CSS')}
          >
            <CssIcon src={cssIcon} alt="CSS" />
            <p>CSS</p>
          </li>

          <li
            onClick={() => handleSetSubject('JavaScript')}
          >
            <JavaScriptIcon src={javaScriptIcon} alt="JavaScript" />
            <p>Javascript</p>
          </li>

          <li
            onClick={() => handleSetSubject('Accessibility')}
          >
            <AccessibilityIcon src={accessibilityIcon} alt="Accessibility" />
            <p>Accessibility</p>
          </li>
        </ul>

      </SubjectContainer>
    </Container>
  )
}