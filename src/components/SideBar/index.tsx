import { Button } from '../Button'
import { Logo } from '../Logo'

import { AiFillAppstore } from 'react-icons/ai'
import {
  BiDumbbell,
  BiHelpCircle,
  BiLogOut,
  BiMedal,
  BiNotepad,
  BiSolidBarChartAlt2
} from 'react-icons/bi'

import { BsCalendarWeek } from 'react-icons/bs'

import * as S from './styled'

const SideBar = () => {
  return (
    <S.Container>
      <S.AsideTop>
        <S.ContainerLogo>
          <Logo></Logo>
          <S.LineBelow />
        </S.ContainerLogo>

        <S.ContainerButtons>
          <Button to={'/'} icon={AiFillAppstore}>
            Overview
          </Button>

          <Button to={'/workout'} icon={BiDumbbell}>
            Workout
          </Button>

          <Button to={'/dietplan'} icon={BiNotepad}>
            Diet Plan
          </Button>
          <Button to={'/goals'} icon={BiMedal}>
            Goals
          </Button>
          <Button to={'/schedule'} icon={BsCalendarWeek}>
            My Schedule
          </Button>
          <Button to={'/progress'} icon={BiSolidBarChartAlt2}>
            Progress
          </Button>
        </S.ContainerButtons>
      </S.AsideTop>
      <S.AsideBot>
        <S.LineBelow2 />
        <Button to={'/help'} icon={BiHelpCircle}>
          Help
        </Button>
        <Button to={'/logout'} icon={BiLogOut}>
          Logout
        </Button>
      </S.AsideBot>
    </S.Container>
  )
}

export { SideBar }
