import { useContext, useEffect, useState } from 'react'
import WorkoutsContext from '../../../../context/workouts'
import { PropsWorkout } from '../../types'

import * as S from './styles'

function WorkoutTable() {
  const { workouts } = useContext(WorkoutsContext)

  const [treinos, setTreinos] = useState<PropsWorkout[]>([])
  const [filteredWorkout, setfilteredWorkout] = useState('MostrarTodos')

  useEffect(() => {
    if (filteredWorkout === 'MostrarTodos') {
      setTreinos(workouts)
    } else {
      const filteredWorkouts = workouts.filter(
        (treino) => treino.treino === filteredWorkout
      )
      setTreinos(filteredWorkouts)
    }
  }, [filteredWorkout, workouts])

  return (
    <S.TableContainer>
      <h2>Treinos Salvos</h2>

      <select
        onChange={(e) => setfilteredWorkout(e.target.value)}
        value={filteredWorkout}
      >
        <option value="MostrarTodos">Mostrar Todos</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Treino</th>
            <th>Grupo Muscular</th>
            <th>Exercício</th>
            <th>Repetições</th>
            <th>Séries</th>
            <th>Carga</th>
          </tr>
        </thead>
        <tbody>
          {treinos.map((treino, i) => (
            <tr key={i}>
              <td>{treino.treino}</td>
              <td>{treino.grupoMuscular}</td>
              <td>{treino.exercicio}</td>
              <td>{treino.repeticoes}</td>
              <td>{treino.series}</td>
              <td>{treino.carga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.TableContainer>
  )
}

export default WorkoutTable
