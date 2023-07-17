import { Banner } from '../Banner'
import * as S from './styled'

export type MainProps = {}

import Banner1 from '../../assets/img/Banner1.png'
import Banner3 from '../../assets/img/Banner3.png'
import { Typography } from '../Typography'

const Main = ({}: MainProps) => (
  <S.Container>
    <S.LeftMain>
      <Banner bgImage={Banner1} title="Plan Your Diet Plan This Week">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </Banner>

      <Banner bgImage={Banner3} title="Track Your Daily Activities">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </Banner>
    </S.LeftMain>

    <S.RightMain>
      <Typography tag="h1" size="headingLg" color="orangeDefault" weight="bold">
        OI
      </Typography>
    </S.RightMain>
  </S.Container>
)

export { Main }
