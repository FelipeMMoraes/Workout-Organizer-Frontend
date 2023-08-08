import { ReactNode } from 'react'
import { Typography } from '../Typography'
import * as S from './styled'

type CardProps = {
  title: string
  subtitle: string
  imageUrl: string
  altImg?: string
  children: ReactNode
}

const Card = ({ title, subtitle, imageUrl, altImg, children }: CardProps) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardImageContainer>
          <S.Image src={imageUrl} alt={altImg} />
        </S.CardImageContainer>
        <S.CardText>
          <Typography
            tag="span"
            weight="bold"
            color="neutralInverted"
            size="base"
          >
            {title}
          </Typography>

          <Typography
            tag="span"
            weight="regular"
            color="neutralInverted"
            size="bodyLg"
          >
            {subtitle}
          </Typography>
        </S.CardText>
        {children}
      </S.CardHeader>
    </S.CardContainer>
  )
}

export { Card }
