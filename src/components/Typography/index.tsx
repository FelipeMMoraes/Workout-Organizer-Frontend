import * as S from './styled'
import { TypographyProps } from './types'

const Typography = ({
  tag = 'p',
  children,
  weight = 'medium',
  color = 'orangeDefault',
  line = 'none',
  size
}: TypographyProps) => (
  <S.DynamicTypography
    tag={tag}
    weight={weight}
    color={color}
    size={size}
    line={line}
  >
    {children}
  </S.DynamicTypography>
)

export { Typography }
