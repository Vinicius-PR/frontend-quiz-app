import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import { OptionsContainer, QuestionContainer, QuizContainer } from "./styles"
import { HeadingM } from "../../styles/global"

export default function QuizComponent() {
  const { quiz, quizCount } = useContext(QuizContext)
  const optionsLetters = ['A', 'B', 'C', 'D'] // If some question have more than 4 options, need to include more letters.

  return (
    <QuizContainer>
      <QuestionContainer>
        <span>Question {quizCount + 1} of {quiz.questions.length}</span>
        <HeadingM>
          {quiz.questions[quizCount].question}
        </HeadingM>

        <hr />
      </QuestionContainer>

      <OptionsContainer>
        <ul>
          {
            quiz.questions[quizCount].options.map((option, index) => {
              return (
                <li key={index}>
                  <span>{optionsLetters[index]}</span>
                  <p>{option}</p>
                </li>
              )
            })
          }
        </ul>

        <button type="submit">Submit Answer</button>
      </OptionsContainer>
    </QuizContainer>
  )
}
