import * as S from './styled'

import type { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  icon: Icon
}) => {
  return (
    <S.NavbarLinkContainer>
      <S.NavbarLink isActive={isActive}>
        {Icon && <Icon size={24} />}
        {children}
      </S.NavbarLink>
    </S.NavbarLinkContainer>
  )
}

export { Button }
