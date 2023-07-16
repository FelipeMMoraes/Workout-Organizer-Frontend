import { Container } from 'react-dom'
import { FaBell, FaGear } from 'react-icons/fa6'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const Container = styled.header`
  background-color: ${theme.color.background.neutral.primary};
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;

  border-bottom: ${theme.border.width.thin} ${theme.border.style.solid};
  border-color: ${theme.color.border.weak};

  grid-area: header;

  position: fixed;
  right: 0;
  width: calc(100vw - 230px);
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const FaBellCustom = styled(FaBell)`
  color: ${theme.color.background.neutral.tertiary};
  transition: 0.3s;

  &:hover {
    color: ${theme.color.background.orange.secondary};
  }
`

const FaGearCustom = styled(FaGear)`
  color: ${theme.color.background.neutral.tertiary};
  transition: 0.3s;

  &:hover {
    color: ${theme.color.background.orange.secondary};
  }
`

const Right = styled.div``

const IconsHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;

  button {
    cursor: pointer;
  }
`

const Avatar = styled.img`
  width: 40px;
  border-radius: ${theme.border.radius.circle};
  border-color: ${theme.color.background.orange.secondary};
  border-width: 3px;
  border-style: solid;
`

const SearchBar = styled.div``

export {
  Avatar,
  Container,
  FaBellCustom,
  FaGearCustom,
  IconsHeader,
  Left,
  Right,
  SearchBar
}
