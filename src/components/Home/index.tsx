import { BodyS, HeadingLBold, HeadingLRegular, HeadingS } from "../../styles/global"
import { HomeContainer, SubjectContainer, TextContainer } from "./styles"

import htmlImg from '../../assets/images/icon-html.svg'
import cssImg from '../../assets/images/icon-css.svg'
import javaScriptImg from '../../assets/images/icon-js.svg'
import accessibilityImg from '../../assets/images/icon-accessibility.svg'
import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"

export default function Home() {

  const { handleSetSubject } = useContext(QuizContext)

  return (
    <HomeContainer>
      <TextContainer>

        <HeadingLRegular>
          Welcome to the
        </HeadingLRegular>
        <br />
        <HeadingLBold>
          Frontend Quiz!
        </HeadingLBold>

        <BodyS>
          Pick a subject to get started.
        </BodyS>

      </TextContainer>

      <SubjectContainer>
        <ul>
          <li
            onClick={() => handleSetSubject('HTML')}
          >
            <img src={htmlImg} alt="HTML" />
            <HeadingS>HTML</HeadingS>
          </li>

          <li
            onClick={() => handleSetSubject('CSS')}
          >
            <img src={cssImg} alt="CSS" />
            <HeadingS>CSS</HeadingS>
          </li>

          <li
            onClick={() => handleSetSubject('JavaScript')}
          >
            <img src={javaScriptImg} alt="JavaScript" />
            <HeadingS>Javascript</HeadingS>
          </li>

          <li
            onClick={() => handleSetSubject('Accessibility')}
          >
            <img src={accessibilityImg} alt="Accessibility" />
            <HeadingS>Accessibility</HeadingS>
          </li>
        </ul>

      </SubjectContainer>
    </HomeContainer>
  )
}
