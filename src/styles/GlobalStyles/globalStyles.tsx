import { createGlobalStyle } from 'styled-components'
import { theme } from '../theme'

const GlobalStyle = createGlobalStyle`

  body { 
    font-family: 'Manrope', sans-serif;
    background-color: ${theme.color.background.neutral.secondary} ;
    
    -webkit-font-smoothing: antialiased;
    
    &::-webkit-scrollbar{
      width: 12px;
    }
    
    &::-webkit-scrollbar-track{
      ${theme.color.background.neutral.primary}
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${theme.color.background.orange.primary};    
      border-radius: 20px;       
      border: 3.5px solid ${theme.color.background.neutral.primary};  
    }
  }

`
export { GlobalStyle }
