import { FormEvent, useEffect, useState } from 'react'
import { Typography } from '../../components/Typography'
import WorkoutTable from './components/WorkoutTable'

import * as S from './styles'

function Workout() {
  const INITIAL_STATE = {
    treino: 'A',
    grupoMuscular: 'peito',
    exercicio: '',
    repeticoes: 0,
    series: 0,
    carga: 0
  }

  const [exerciseInfo, setExerciseInfo] = useState(INITIAL_STATE)

  type HandleChangeTypes =
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

  const handleChange = (e: HandleChangeTypes) => {
    const { name, value } = e.target

    setExerciseInfo((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const localStorageData = localStorage.getItem('@WorkoutOrganizer')
    const checkLocalStorage = localStorageData ?? '[]'
    const exercisesArray = JSON.parse(checkLocalStorage)

    const newStorageItems = [...exercisesArray, exerciseInfo]

    // exercisesArray.push(exerciseInfo)

    localStorage.setItem('@WorkoutOrganizer', JSON.stringify(newStorageItems))

    setSavedTreinos(newStorageItems)
  }

  const [savedTreinos, setSavedTreinos] = useState([])

  useEffect(() => {
    // Quando o componente montar, carregue os treinos salvos do Local Storage
    const localStorageData = localStorage.getItem('@WorkoutOrganizer')
    const checkLocalStorage = localStorageData ?? '[]'
    const exercisesArray = JSON.parse(checkLocalStorage)

    setSavedTreinos(exercisesArray)
  }, [])

  return (
    <S.WorkoutContainer>
      <Typography>Crie seu novo Treino</Typography>

      <S.ContainerForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <select name="treino" onChange={(e) => handleChange(e)}>
              <option defaultValue={'A'} value="A">
                A
              </option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </label>
          <label>
            <select name="grupoMuscular" onChange={(e) => handleChange(e)}>
              <option defaultValue={'peito'} value="peito">
                Peito
              </option>
              <option value="biceps">Biceps</option>
            </select>
          </label>
          <label htmlFor="workoutName">
            <Typography>Nome do treino</Typography>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="exercicio"
              id="workoutName"
            />
          </label>
          <label htmlFor="workoutName">
            <Typography>Repeticoes</Typography>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="repeticoes"
              id="workoutName"
            />
          </label>
          <label htmlFor="workoutName">
            <Typography>Series</Typography>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="series"
              id="workoutName"
            />
          </label>
          <label htmlFor="workoutName">
            <Typography>Carga</Typography>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="carga"
              id="workoutName"
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </S.ContainerForm>

      <S.TableContainer>
        <WorkoutTable treinos={savedTreinos} />
      </S.TableContainer>
    </S.WorkoutContainer>
  )
}

export { Workout }
