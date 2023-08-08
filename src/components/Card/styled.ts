import styled from 'styled-components'
import { theme } from '../../styles/theme'

const CardContainer = styled.div`
  display: flex;
  background-color: ${theme.color.background.purple.primary};
  width: 380px;

  border-radius: ${theme.border.radius.medium};
  padding: 26px;
`

const CardHeader = styled.div`
  display: flex;
  gap: 22px;
`

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const CardImageContainer = styled.div`
  width: 65px;
  height: 65px;
  display: block;

  border-radius: 20px;
  border: ${theme.border.width.thin} ${theme.border.style.solid};
  border-color: ${theme.color.background.orange.primary};
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 20px;
`

export { CardContainer, CardHeader, CardImageContainer, CardText, Image }
