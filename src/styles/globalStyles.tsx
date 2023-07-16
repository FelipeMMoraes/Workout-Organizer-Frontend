import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    font-family: 'Manrope', sans-serif;
    background-color: ${theme.color.background.neutral.secondary} ;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`
export { GlobalStyle }
