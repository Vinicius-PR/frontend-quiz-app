import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import { GameScreenContainer, LabelOption, OptionsContainer, ProgressContainer, ProgressLine, QuestionContainer, QuestionTitle, SpanOptionLetter, SpanQuestionPosition } from "./style"

export default function GameScreen() {
  
  const { quiz, currentQuestionPos } = useContext(QuizContext)

  return (
    <GameScreenContainer>

      <QuestionContainer>
        <SpanQuestionPosition>Question {currentQuestionPos} to {quiz.questions.length}</SpanQuestionPosition>

        <QuestionTitle>
          {quiz.questions[0].question}
        </QuestionTitle>

        <ProgressContainer>
          <ProgressLine $progress={(currentQuestionPos * 100) / quiz.questions.length} />
        </ProgressContainer>
      </QuestionContainer>

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