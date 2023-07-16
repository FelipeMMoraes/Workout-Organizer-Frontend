import { Header } from './components/Header'
import { Main } from './components/Main'
import { SideBar } from './components/SideBar'
import { Container } from './styles/App'

function App() {
  return (
    <Container>
      <Header></Header>
      <SideBar></SideBar>
      <Main></Main>
    </Container>
  )
}
export default App
