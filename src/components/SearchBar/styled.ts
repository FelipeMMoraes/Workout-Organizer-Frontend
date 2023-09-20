import styled from 'styled-components'
import { theme } from '../../styles/theme'

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.color.background.neutral.secondary};
  border: none;
  border-radius: 5px;
  padding: 8px;
`

const SearchIcon = styled.div`
  padding: 0 8px;
  color: ${theme.color.background.neutral.tertiary};
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  background-color: ${theme.color.background.neutral.secondary};

  color: ${theme.color.background.neutral.tertiary};

  font-family: ${theme.font.family.body};
  font-weight: ${theme.font.weight.medium};
`

export { SearchBarWrapper, SearchIcon, SearchInput }
