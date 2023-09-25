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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
`

const LineBelow = styled.div`
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: ${theme.color.border.weak};
    bottom: 0px;
    left: 0;
  }
`
const ContainerLogo = styled.div`
  position: relative;
  padding-bottom: 42px;
`

const ContainerButtons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AsideTop = styled.div``

const AsideBot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
`

const LineBelow2 = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: ${theme.color.border.weak};
    top: 0px;
    left: 0;
  }
`

export {
  AsideBot,
  AsideTop,
  Container,
  ContainerButtons,
  ContainerLogo,
  LineBelow,
  LineBelow2
}
