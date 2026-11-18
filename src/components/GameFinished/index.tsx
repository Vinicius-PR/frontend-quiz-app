import { GameFinishedContainer, GameFinishedContent, GameFinishedText1, GameFinishedText2, PlayAgainButton, ResultContainer, ResultContent, ResultHeader, ResultSpan, ResultText, ResultTextContainer} from "./style"

import SubjectTitle from "../SubjectTitle"
import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"

export default function GameFinished() {

  const { subject, totalQuestions, totalRightAnswers, handleReset } = useContext(QuizContext)

  return (
    <GameFinishedContainer>

      <GameFinishedContent>
        <GameFinishedText1>
          Quiz completed
        </GameFinishedText1>

        <GameFinishedText2>
          You scored...
        </GameFinishedText2>

      </GameFinishedContent>

      <ResultContainer>

        <ResultContent>

          <ResultHeader>
            <SubjectTitle subject={subject} />
          </ResultHeader>
        
          <ResultTextContainer>
            <ResultText>
              {totalRightAnswers}
            </ResultText>

            <ResultSpan>
                out of {totalQuestions}
            </ResultSpan>
          </ResultTextContainer>          

        </ResultContent>


        <PlayAgainButton
          onClick={handleReset}
        >
          Play Again
        </PlayAgainButton>
      </ResultContainer>
    </GameFinishedContainer>
  )
}