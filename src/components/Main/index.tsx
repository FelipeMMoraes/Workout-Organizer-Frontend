import { Banner } from '../Banner'
import * as S from './styled'

import { AiOutlineClockCircle } from 'react-icons/ai'

export type MainProps = {}

import Banner1 from '../../assets/img/Banner1.png'

import { Rewards } from '../Rewards'
import { Typography } from '../Typography'

const Main = ({}: MainProps) => (
  <S.Container>
    <S.LeftMain>
      <Banner bgImage={Banner1}>
        <Typography
          tag="h1"
          size="headingMd"
          weight="bold"
          color="neutralInverted"
        >
          Plan Your Diet Plan This Week
        </Typography>
        <Typography
          tag="p"
          size="bodyMd"
          weight="regular"
          color="neutralInverted"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod
        </Typography>
      </Banner>
    </S.LeftMain>

    <S.RightMain>
      <Rewards icon={AiOutlineClockCircle}>
        <Typography
          color="neutralInverted"
          size="base"
          tag="span"
          weight="regular"
        >
          hours
        </Typography>
        <Typography
          color="neutralInverted"
          size="headingMd"
          tag="span"
          weight="bold"
        >
          1.5
        </Typography>
      </Rewards>
    </S.RightMain>
  </S.Container>
)

export { Main }
