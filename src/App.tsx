import { useContext } from "react"
import Header from "./components/Header"
import { Container } from "./styles/container"
import { QuizContext } from "./context/QuizContext"
import StartScreen from "./components/StartScreen"
import GameScreen from "./components/GameScreen"

function App() {

  const { quizMode } = useContext(QuizContext)

  console.log('quizMode is ', quizMode)

  return (
    <Container>
      <Header/>
      {
        quizMode === "idle" ? <StartScreen/> : <GameScreen/>
      }
    </Container>
  )
}

export default App
