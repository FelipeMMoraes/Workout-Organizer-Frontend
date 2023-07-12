import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }

  body { 
    background-color: ${theme.color.background.neutral.secondary} ;
}
`
export { GlobalStyle }
