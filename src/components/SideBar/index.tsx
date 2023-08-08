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

import { ButtonAside } from '../Button'
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
          <ButtonAside to={'/'} icon={AiFillAppstore}>
            Overview
          </ButtonAside>

          <ButtonAside to={'/workout'} icon={BiDumbbell}>
            Workout
          </ButtonAside>

          <ButtonAside to={'/dietplan'} icon={BiNotepad}>
            Diet Plan
          </ButtonAside>

          <ButtonAside to={'/goals'} icon={BiMedal}>
            Goals
          </ButtonAside>

          <ButtonAside to={'/schedule'} icon={BsCalendarWeek}>
            My Schedule
          </ButtonAside>

          <ButtonAside to={'/progress'} icon={BiSolidBarChartAlt2}>
            Progress
          </ButtonAside>
        </S.ContainerButtons>
      </S.AsideTop>
      <S.AsideBot>
        <S.LineBelow2 />
        <ButtonAside to={'/help'} icon={BiHelpCircle}>
          Help
        </ButtonAside>
        <ButtonAside to={'/logout'} icon={BiLogOut}>
          Logout
        </ButtonAside>
      </S.AsideBot>
    </S.Container>
  )
}

export { SideBar }
