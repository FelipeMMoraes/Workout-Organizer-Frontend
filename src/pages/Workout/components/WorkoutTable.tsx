import { PropsWorkout } from '../types'

function WorkoutTable({ treinos }: { treinos: PropsWorkout[] }) {
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
          {treinos.map((treino, index) => (
            <tr key={index}>
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
