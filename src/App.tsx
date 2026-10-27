import { useContext } from "react"
import { QuizContext, QuizContextProvider } from "./context/QuizContext"

import Header from "./components/Header"
import StartScreen from "./components/StartScreen"
import GameScreen from "./components/GameScreen"

import { ThemeProvider } from "styled-components"
import { Container } from "./styles/container"
import { lightTheme, darkTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  const { quizMode } = useContext(QuizContext)

  console.log('quizMode is ', quizMode)

  return (
    <QuizContextProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Container>
          <Header/>
          {
            quizMode === "idle" ? <StartScreen/> : <GameScreen/>
          }
        </Container>
      </ThemeProvider>
    </QuizContextProvider>
  )
}

export default App
