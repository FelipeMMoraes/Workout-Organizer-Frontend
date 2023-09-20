import styled from 'styled-components'
import { theme } from '../../styles/theme'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: linear-gradient(150deg, #7c6dd7 4.71%, #c4baff 110.44%);
  width: 100%;
  max-width: 380px;

  border-radius: ${theme.border.radius.medium};
  padding: 26px;

  position: relative;

  overflow: hidden;

  &::before {
    position: absolute;

    content: '';
    background-color: rgba(124, 109, 215, 0.5);
    width: 145px;
    height: 145px;
    border-radius: ${theme.border.radius.circle};

    top: -35px;
    right: -35px;
  }

  &::after {
    position: absolute;

    content: '';
    background-color: rgba(124, 109, 215);
    width: 67px;
    height: 67px;
    border-radius: ${theme.border.radius.circle};

    top: -17px;
    right: -17px;

    z-index: 2;
  }
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

  margin-bottom: 38px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 20px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`

const CardFooter = styled.div`
  display: flex;
  background-color: ${theme.color.background.neutral.primary};
  border-radius: 38px;
  padding: 20px 24px;
  gap: 36px;
`

const CardFooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
const CardFooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export {
  CardContainer,
  CardContent,
  CardFooter,
  CardFooterLeft,
  CardFooterRight,
  CardHeader,
  CardImageContainer,
  CardText,
  Image
}
