import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const NavbarLinkContainer = styled.div``

const NavbarLink = styled(NavLink)`
  display: flex;
  gap: 16px;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  padding: 16px;
  border-radius: 8px;

  text-align: left;
  cursor: pointer;

  background-color: ${theme.color.background.neutral.primary};
  color: ${theme.color.text.neutral.default};

  &.active {
    background-color: ${theme.color.background.orange.primary};
    color: ${theme.color.text.neutral.inverted};
  }
`

export { NavbarLink, NavbarLinkContainer }
