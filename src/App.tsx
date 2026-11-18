import { useContext, useState } from "react"
import { QuizContext } from "./context/QuizContext"

import Header from "./components/Header"
import StartScreen from "./components/StartScreen"
import GameScreen from "./components/GameScreen"

import { ThemeProvider } from "styled-components"
import { Container } from "./styles/container"
import { lightTheme, darkTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/GlobalStyle"
import GameFinished from "./components/GameFinished"

function App() {

  const { quizMode } = useContext(QuizContext)

  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  )
  function handleSetTheme() {
    setTheme((state) => state === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header
          handleSetTheme={handleSetTheme}
          theme={theme}
        />
        {
          quizMode === "idle" 
            ? <StartScreen/> 
            : quizMode === "running"
              ? <GameScreen/>
              : <GameFinished/>
        }
      </Container>
    </ThemeProvider>
  )
}

export default App
