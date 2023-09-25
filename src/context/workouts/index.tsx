import { ReactNode, createContext, useMemo, useState } from 'react'
import { PropsWorkout } from '../../pages/Workout/types'

const DEFAULT_VALUE = {
  workouts: [],
  setWorkouts: () => {}
}

type PropsWorkoutContext = {
  workouts: PropsWorkout[]
  setWorkouts: React.Dispatch<React.SetStateAction<PropsWorkout[]>>
}

const WorkoutsContext = createContext<PropsWorkoutContext>(DEFAULT_VALUE)

type PropsWorkoutProvider = {
  children: ReactNode
}

function WorkoutsProvider({ children }: PropsWorkoutProvider) {
  const [workouts, setWorkouts] = useState<PropsWorkout[]>(
    DEFAULT_VALUE.workouts
  )

  const values = useMemo(
    () => ({ workouts, setWorkouts }),
    [workouts, setWorkouts]
  )

  return (
    <WorkoutsContext.Provider value={{ ...values }}>
      {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutsContext
export { WorkoutsProvider }
