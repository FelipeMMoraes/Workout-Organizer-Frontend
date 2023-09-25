import { ReactNode } from 'react'
import { WorkoutsProvider } from './workouts'

type PropsGlobalContext = {
  children: ReactNode
}

export default function GlobalConext({ children }: PropsGlobalContext) {
  return <WorkoutsProvider>{children}</WorkoutsProvider>
}
