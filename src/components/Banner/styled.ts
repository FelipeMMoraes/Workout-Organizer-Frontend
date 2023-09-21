import styled from 'styled-components'
import { theme } from '../../styles/theme'

interface BackgroundContainerProps {
  bgImage: string
}

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${theme.color.background.orange.primary};
  height: auto;

  border-radius: ${theme.border.radius.medium};

  position: relative;

  overflow: hidden;

  &::before {
    position: absolute;

    content: '';
    background-color: rgba(255, 167, 121, 0.2);
    width: 145px;
    height: 145px;
    border-radius: ${theme.border.radius.circle};

    bottom: -35px;
    left: -35px;
  }

  &::after {
    position: absolute;

    content: '';
    background-color: rgba(255, 167, 121, 0.2);
    width: 67px;
    height: 67px;
    border-radius: ${theme.border.radius.circle};

    bottom: -17px;
    left: -17px;

    z-index: 2;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
`

const BackgroundContainer = styled.div<BackgroundContainerProps>`
  background:
    linear-gradient(
      90deg,
      rgba(249, 115, 22, 0.7344187675070029) 33%,
      rgba(249, 115, 22, 0.4206932773109243) 70%
    ),
    url(${(props) => props.bgImage}) no-repeat right;
  background-size: auto 100%;
  height: auto;
  border-radius: 0 ${theme.border.radius.medium} ${theme.border.radius.medium} 0;
`

export { BackgroundContainer, BannerContainer, ContentContainer }
