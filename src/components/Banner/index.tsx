import * as S from './styled'
import type { BannerProps } from './types'

const Banner = ({ children, bgImage }: BannerProps) => (
  <S.BannerContainer>
    <S.ContentContainer>{children}</S.ContentContainer>
    <S.BackgroundContainer bgImage={bgImage} />
  </S.BannerContainer>
)

export { Banner }
