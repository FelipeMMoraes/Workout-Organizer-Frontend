import { Typography } from '../../components/Typography'
import { WorkoutForm } from './components/WorkoutForm/'
import WorkoutTable from './components/WorkoutTable'

import * as S from './styles'

function Workout() {
  return (
    <S.WorkoutContainer>
      <Typography tag="h1" weight="bold" size="headingMd">
        Crie seu novo Treino
      </Typography>

      <WorkoutForm />

      <WorkoutTable />
    </S.WorkoutContainer>
  )
}

export { Workout }
