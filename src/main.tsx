import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes.ts'
import { GlobalStyle } from './styles/GlobalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
