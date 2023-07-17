import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { GlobalStyle } from './GlobalStyles/globalStyles.tsx'
import { ResetStyle } from './GlobalStyles/resetStyles.tsx'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
