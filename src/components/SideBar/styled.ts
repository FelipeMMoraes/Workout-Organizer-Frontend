import styled from 'styled-components'
import { theme } from '../../styles/theme'

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: ${theme.color.background.neutral.primary};
  padding: 24px;

  border-right: ${theme.border.width.thin} ${theme.border.style.solid};
  border-color: ${theme.color.border.weak};

  position: fixed;
  left: 0;
  top: 0;
`

const LineBelow = styled.div`
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${theme.color.border.weak};
    bottom: 0px;
    left: 0;
  }
`
const ContainerLogo = styled.div`
  position: relative;
  padding-bottom: 30px;
`

const ContainerButtons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export { Container, ContainerButtons, ContainerLogo, LineBelow }
