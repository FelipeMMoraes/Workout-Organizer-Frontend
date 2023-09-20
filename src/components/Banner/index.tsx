import { Typography } from '../Typography'
import * as S from './styled'
import type { BannerProps } from './types'

const Banner = ({ bgImage, title, text }: BannerProps) => (
  <S.BannerContainer>
    <S.ContentContainer>
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
        line="medium"
      >
        {text}
      </Typography>
    </S.ContentContainer>
    <S.BackgroundContainer bgImage={bgImage} />
  </S.BannerContainer>
)

export { Banner }
