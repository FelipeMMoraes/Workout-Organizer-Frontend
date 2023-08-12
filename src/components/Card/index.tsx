import { BiDumbbell, BiSolidChevronUp } from 'react-icons/bi'
import { Typography } from '../Typography'
import * as S from './styled'

type CardProps = {
  title: string
  subtitle: string
  exercise: string
  dificulty: string
  workout: string
  imageUrl: string
  altImg?: string
}

const Card = ({
  title,
  subtitle,
  imageUrl,
  altImg,
  exercise,
  dificulty,
  workout
}: CardProps) => {
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
      </S.CardHeader>

      <S.CardContent>
        <Typography
          tag="span"
          size="base"
          weight="bold"
          color="neutralInverted"
        >
          {exercise}
        </Typography>
        <Typography
          tag="span"
          size="headingMd"
          weight="bold"
          color="neutralInverted"
        >
          Workout
        </Typography>
      </S.CardContent>

      <S.CardFooter>
        <S.CardFooterLeft>
          <BiDumbbell size={24} />
          <Typography
            tag="span"
            size="base"
            weight="medium"
            color="neutralDefault"
          >
            {workout}
          </Typography>
        </S.CardFooterLeft>

        <S.CardFooterRight>
          <BiSolidChevronUp size={24} />
          <Typography
            tag="span"
            size="base"
            weight="medium"
            color="neutralDefault"
          >
            {dificulty}
          </Typography>
        </S.CardFooterRight>
      </S.CardFooter>
    </S.CardContainer>
  )
}

export { Card }
