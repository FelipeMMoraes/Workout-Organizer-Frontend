import { ReactNode } from 'react'
import * as S from './styled'

type ButtonProps = {
  children: ReactNode
  isActive?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, isActive = false }) => {
  return (
    <S.NavbarLinkContainer>
      <S.NavbarLink isActive={isActive}>{children}</S.NavbarLink>
    </S.NavbarLinkContainer>
  )
}

export { Button }
