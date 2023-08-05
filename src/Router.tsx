import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { DietPlan } from './pages/DietPlan'
import { Goals } from './pages/Goals'
import { Help } from './pages/Help'
import { Home } from './pages/Home'
import { Logout } from './pages/Logout'
import { MySchedule } from './pages/MySchedule'
import { Progress } from './pages/Progress'
import { Workout } from './pages/Workout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/dietplan" element={<DietPlan />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/schedule" element={<MySchedule />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  )
}
