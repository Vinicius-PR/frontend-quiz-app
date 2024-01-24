import { useContext, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./styles/themes/light";
import { QuizContext } from "./context/QuizContext";
import QuizComponent from "./components/QuizComponent";


function App() {

  const {quizMode} = useContext(QuizContext)

  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  function handleSetTheme() {
    setTheme((state) => state === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : lightTheme}>
      <GlobalStyle />
      <Header 
        handleSetTheme={handleSetTheme}  
        theme={theme} 
      />

      {
        quizMode === 'idle' ? (
          <Home />
        ) : (
          <QuizComponent />
        )
      }

    </ThemeProvider>
  );
}

export default App;
