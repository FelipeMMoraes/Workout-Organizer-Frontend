import { Button } from '../Button'
import { Logo } from '../Logo'

import * as S from './styled'

const SideBar = () => {
  return (
    <S.Container>
      <S.ContainerLogo>
        <Logo></Logo>
        <S.LineBelow />
      </S.ContainerLogo>

      <S.ContainerButtons>
        <Button isActive>Overview</Button>
        <Button>Workout</Button>
        <Button>Diet Plan</Button>
        <Button>Goals</Button>
        <Button>My Schedule</Button>
        <Button>Progress</Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export { SideBar }
