import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import { OptionsContainer, QuestionContainer, QuizContainer, LineDiv } from "./styles"
import { BodyS, HeadingM, HeadingS } from "../../styles/global"

export default function QuizComponent() {
  const { quiz, quizCount } = useContext(QuizContext)
  const optionsLetters = ['A', 'B', 'C', 'D'] // If some question have more than 4 options, need to include more letters.

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
