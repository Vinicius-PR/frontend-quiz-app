import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import { GameScreenContainer, LabelOption, OptionsContainer, SpanOptionLetter } from "./style"

export default function GameScreen() {
  
  const { quiz, currentQuestionPos } = useContext(QuizContext)

  return (
    <GameScreenContainer>
      <section>
        <h3>Question {currentQuestionPos} to {quiz.questions.length}</h3>
        <h2>
          {quiz.questions[0].question}
        </h2>

        <div>
          <hr />
        </div>
      </section>

      <OptionsContainer>
        <ul>
          {quiz.questions[0].options.map((option, index) => (
            <li key={index}>
              <LabelOption>
                <SpanOptionLetter>A</SpanOptionLetter>
                <input type="radio" name="answer" />
                {option}
              </LabelOption>
            </li>
          ))}
        </ul>

        <button>
          Submit Answer
        </button>
      </OptionsContainer>
    </GameScreenContainer>
  )
}