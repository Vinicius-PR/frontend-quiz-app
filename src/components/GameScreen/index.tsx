import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import { GameScreenContainer } from "./style"

export default function GameScreen() {
  
  const { quiz } = useContext(QuizContext)

  return (
    <GameScreenContainer>
      <section>
        <h3>Question 1 to {quiz.questions.length}</h3>
        <h2>
          {quiz.questions[0].question}
        </h2>

        <div>
          <hr />
        </div>
      </section>

      <section>
        <ol type="A">
          {quiz.questions[0].options.map((option, index) => (
            <li key={index}>
              <label>
                <input type="radio" name="answer" />
                {option}
              </label>
            </li>
          ))}
        </ol>

        <button>
          Submit Answer
        </button>
      </section>
    </GameScreenContainer>
  )
}