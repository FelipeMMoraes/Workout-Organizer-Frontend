import styled from 'styled-components'
import { theme } from '../../styles/theme'

const header = styled.header`
  background-color: ${theme.color.background.neutral.primary};
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;

  border-bottom: ${theme.border.width.thin} ${theme.border.style.solid};
  border-color: ${theme.color.border.weak};

  .left {
    display: flex;
    flex-direction: column;
  }

  .rigth {
  }

  .iconsHeader {
    align-items: center;
    display: flex;
    gap: 1rem;

    svg {
      color: ${theme.color.background.neutral.terciary};
    }
  }
`

const Avatar = styled.div`
  img {
    width: 40px;
    border-radius: ${theme.border.radius.circle};
    border-color: ${theme.color.background.orange.secondary};
    border-width: 3px;
    border-style: solid;
  }
`

const SearchBar = styled.div``

export { Avatar, SearchBar, header }
