import styled from 'styled-components'
import { theme } from '../../styles/theme'

type NavbarLinkProps = {
  isActive?: boolean
}

const NavbarLinkContainer = styled.div``

const NavbarLink = styled.button<NavbarLinkProps>`
  display: flex;
  gap: 16px;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: 600;

  padding: 16px;
  border-radius: 8px;

  text-align: left;
  cursor: pointer;

  background-color: ${({ isActive }) =>
    isActive
      ? theme.color.background.orange.primary
      : theme.color.background.neutral.secondary};

  color: ${({ isActive }) =>
    isActive
      ? theme.color.text.neutral.inverted
      : theme.color.text.neutral.default};
`

export { NavbarLink, NavbarLinkContainer }
