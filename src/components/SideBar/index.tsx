import { Button } from '../Button'
import { Logo } from '../Logo'

import { AiFillAppstore } from 'react-icons/ai'
import {
  BiDumbbell,
  BiMedal,
  BiNotepad,
  BiSolidBarChartAlt2
} from 'react-icons/bi'

import { BsCalendarWeek } from 'react-icons/bs'

import * as S from './styled'

const SideBar = () => {
  return (
    <S.Container>
      <S.ContainerLogo>
        <Logo></Logo>
        <S.LineBelow />
      </S.ContainerLogo>

      <S.ContainerButtons>
        <Button isActive icon={AiFillAppstore}>
          Overview
        </Button>
        <Button icon={BiDumbbell}>Workout</Button>
        <Button icon={BiNotepad}>Diet Plan</Button>
        <Button icon={BiMedal}>Goals</Button>
        <Button icon={BsCalendarWeek}>My Schedule</Button>
        <Button icon={BiSolidBarChartAlt2}>Progress</Button>
      </S.ContainerButtons>
    </S.Container>
  )
}

export { SideBar }
