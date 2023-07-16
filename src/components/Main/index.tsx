import { Banner } from '../Banner'
import * as S from './styled'

export type MainProps = {}

import Banner1 from '../../assets/img/Banner1.png'
import Banner2 from '../../assets/img/Banner2.png'
import Banner3 from '../../assets/img/Banner3.png'

const Main = ({}: MainProps) => (
  <S.Container>
    <Banner bgImage={Banner1} title="Plan Your Diet Plan This Week">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </Banner>
    <Banner bgImage={Banner2} title="Start Your Workout From Today">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </Banner>
    <Banner bgImage={Banner3} title="Track Your Daily Activities">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </Banner>
  </S.Container>
)

export { Main }
