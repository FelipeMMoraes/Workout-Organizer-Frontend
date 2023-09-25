import { useContext, useEffect, useState } from 'react'
import WorkoutsContext from '../../../context/workouts'
import { PropsWorkout } from '../types'

function WorkoutTable() {
  const [treinos, setTreinos] = useState<PropsWorkout[]>([])
  const { workouts } = useContext(WorkoutsContext)

  useEffect(() => {
    const getWorkouts = () => {
      setTreinos(workouts)
    }
    getWorkouts()
  }, [])

  return (
    <div>
      <h2>Treinos Salvos</h2>
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
    </div>
  )
}

export default WorkoutTable
