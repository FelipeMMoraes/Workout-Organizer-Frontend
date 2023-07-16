import * as S from './styled'

import type { ButtonProps } from './types'

const Button = ({ children, isActive = false, icon: Icon }: ButtonProps) => (
  <S.NavbarLinkContainer>
    <S.NavbarLink isActive={isActive}>
      {Icon && <Icon size={24} />}
      {children}
    </S.NavbarLink>
  </S.NavbarLinkContainer>
)

export { Button }
