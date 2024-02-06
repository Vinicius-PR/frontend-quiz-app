import { useContext, useState } from "react"
import { QuizContext } from "../../context/QuizContext"
import { OptionsContainer, QuestionContainer, QuizContainer, LineDiv } from "./styles"
import { BodyS, HeadingM, HeadingS } from "../../styles/global"
import correctIcon from "../../assets/images/icon-correct.svg"
import wrontIcon from "../../assets/images/icon-error.svg"

export default function QuizComponent() {
  const { quiz, quizCount } = useContext(QuizContext)
  const optionsLetters = ['A', 'B', 'C', 'D'] // If some question have more than 4 options, need to include more letters.

  const [isCorrect, setIsCorrect] = useState<false | true | undefined>(undefined)

  return (
    <QuizContainer>
      <QuestionContainer>
        <BodyS>Question {quizCount + 1} of {quiz.questions.length}</BodyS>
        <HeadingM>
          {quiz.questions[quizCount].question}
        </HeadingM>

        <LineDiv>
          <hr />
        </LineDiv>

      </QuestionContainer>

      <OptionsContainer>
        <form action="#">
          {
            quiz.questions[quizCount].options.map((option, index) => {
              return (
                <div>
                  <input required={true} type="radio" id={option} name={`question number ${quizCount}`} value={option} />

                  <label htmlFor={option}>
                    <span><HeadingS>{optionsLetters[index]}</HeadingS></span>
                    <HeadingS>{option}</HeadingS>
                  </label>

                  <img className='correct' src={correctIcon} alt="correct Icon" />
                  <img className='wrong' src={wrontIcon} alt="wrong Icon" />

                </div>
              )
            })
          }

          <button type="submit">
            <HeadingS>
              Submit Answer
            </HeadingS>
          </button>
        </form>
      </OptionsContainer>
    </QuizContainer>
  )
}
