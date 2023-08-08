import * as S from './styled'

import type { ButtonProps } from './types'

const ButtonAside = ({ children, icon: Icon, to }: ButtonProps) => (
  <S.NavbarLinkContainer>
    <S.NavbarLink to={to}>
      {Icon && <Icon size={24} />}
      {children}
    </S.NavbarLink>
  </S.NavbarLinkContainer>
)

export { ButtonAside }
