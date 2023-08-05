import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'
import { LayoutContainer, OutletContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <SideBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  )
}
