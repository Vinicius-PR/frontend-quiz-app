import { useContext, useState } from "react"
import { QuizContext } from "../../context/QuizContext"
import { ButtonSubmitAnswer, ErrorContainer, ErrorMessage, GameScreenContainer, ImgLabelContainer, LabelOption, OptionsContainer, ProgressContainer, ProgressLine, QuestionContainer, QuestionTitle, SpanOptionLetter, SpanQuestionPosition } from "./style"
import errorIcon from '../../assets/images/icon-error.svg'
import correctIcon from '../../assets/images/icon-correct.svg'

export default function GameScreen() {
  
  const { quiz, currentQuestionPos, handleCheckAnswer, handleNextQuestion, handleGameFinished } = useContext(QuizContext)

  const [questionSelected, setQuestionSelected] = useState<string | null>('')
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)
  const [showRightAnswer, setShowRightAnswer] = useState<boolean>(false)

  const letters = ['A', 'B', 'C', 'D', 'E']

  function submitAnswer() {
    if (!questionSelected) {
      setQuestionSelected(null)
      return
    }

    setQuestionAnswered(true)

    if (handleCheckAnswer(questionSelected, quiz.questions[currentQuestionPos - 1].answer)) {
      setIsCorrectAnswer(true)
    } else {
      setIsCorrectAnswer(false)
      setShowRightAnswer(true)
    }
  }

  function goToNextQuestion() {
    setQuestionSelected('')
    setQuestionAnswered(false)
    setIsCorrectAnswer(null)
    setShowRightAnswer(false)
    handleNextQuestion()
  }

  return (
    <GameScreenContainer>

      <QuestionContainer>
        <SpanQuestionPosition>Question {currentQuestionPos} of {quiz.questions.length}</SpanQuestionPosition>

        <QuestionTitle>
          {quiz.questions[currentQuestionPos - 1].question}
        </QuestionTitle>

        <ProgressContainer>
          <ProgressLine $progress={(currentQuestionPos * 100) / quiz.questions.length} />
        </ProgressContainer>
      </QuestionContainer>

      <OptionsContainer>
        <ul>
          {quiz.questions[currentQuestionPos - 1].options.map((option, index) => (
            <li key={`${currentQuestionPos}-${index}`}>

              <LabelOption
                data-status={
                  isCorrectAnswer === null 
                    ? 'idle' 
                    : isCorrectAnswer
                      ? 'correct'
                      : 'incorrect'
                }
              >
                <SpanOptionLetter>{letters[index]}</SpanOptionLetter>
                <input
                  disabled={ isCorrectAnswer === null ? false : true }
                  type="radio"
                  name={`question-${currentQuestionPos}`}
                  onChange={() => setQuestionSelected(option)}
                />
                <p>{option}</p>
                <ImgLabelContainer>
                  {
                    isCorrectAnswer && option === questionSelected
                    && (<img src={correctIcon} alt="Correct" />)
                  }

                  {
                    isCorrectAnswer === false && option === questionSelected
                      && (<img src={errorIcon} alt="Incorrect" />)
                  }

                  {
                    showRightAnswer && option === quiz.questions[currentQuestionPos -1].answer
                      && (<img src={correctIcon} alt="Correct" />)
                  }

                </ImgLabelContainer>
              </LabelOption>

            </li>
          ))}
        </ul>

        <ButtonSubmitAnswer
          data-select={questionSelected === null || questionSelected === '' ? 'false' : 'true'}
          onClick={() => {
            if (questionAnswered === false) {
              submitAnswer()
            } else if (quiz.questions.length === currentQuestionPos) {
              handleGameFinished()
            } else {
              goToNextQuestion()
            }
          }}
        >
          {questionAnswered === false ? 'Submit Answer'
            : quiz.questions.length === currentQuestionPos
              ? 'Finish Quiz'
              : 'Next Question'} 
        </ButtonSubmitAnswer>
        
        <ErrorContainer $showError={questionSelected === null}>
          <img src={errorIcon} alt="Error" />
          <ErrorMessage>
            Please select an answer
          </ErrorMessage>
        </ErrorContainer>

      </OptionsContainer>
    </GameScreenContainer>
  )
}