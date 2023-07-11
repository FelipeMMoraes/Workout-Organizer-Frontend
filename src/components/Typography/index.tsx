import * as S from './styled'
import { TypographyProps } from './types'

const Typography = ({
  tag = 'p',
  children,
  weight = 'medium',
  color = 'neutral-default',
  size
}: TypographyProps) => (
  <S.DynamicTypography tag={tag} weight={weight} color={color} size={size}>
    {children}
  </S.DynamicTypography>
)

export { Typography }
