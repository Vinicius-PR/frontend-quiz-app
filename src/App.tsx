import { useContext } from "react"
import Header from "./components/Header"
import { Container } from "./styles/container"
import { QuizContext } from "./context/QuizContext"
import StartScreen from "./components/StartScreen"

function App() {

  const { quizMode } = useContext(QuizContext)

  console.log('quizMode is ', quizMode)

  return (
    <Container>
      <Header/>
      {
        // quizMode === "idle" ? <StartScreen/> : <> Game Running</>
        <StartScreen/>
      }
    </Container>
  )
}

export default App
