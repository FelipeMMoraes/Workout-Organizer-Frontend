import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/GlobalStyles/globalStyles'
import { ResetStyle } from './styles/GlobalStyles/resetStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App
