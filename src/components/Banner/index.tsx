import { Typography } from '../Typography'
import * as S from './styled'
import type { BannerProps } from './types'

const Banner = ({ children, title, bgImage }: BannerProps) => (
  <S.BannerContainer>
    <S.TextContainer>
      <Typography
        tag="h1"
        size="headingMd"
        weight="bold"
        color="neutralInverted"
      >
        {title}
      </Typography>
      <Typography
        tag="p"
        size="bodyMd"
        weight="regular"
        color="neutralInverted"
      >
        {children}
      </Typography>
    </S.TextContainer>
    <S.BackgroundContainer bgImage={bgImage}></S.BackgroundContainer>
  </S.BannerContainer>
)

export { Banner }
