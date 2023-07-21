import styled from 'styled-components'
import { theme } from '../../styles/theme'

const RewardContainer = styled.div`
  background: linear-gradient(180deg, #fe6221 30%, #cf3e02 80%);
  box-shadow: 0px 23px 42px 0px rgba(0, 0, 0, 0.15);
  width: 110px;
  padding: 26px 24px;
  border-radius: ${theme.border.radius.pill};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  svg {
    fill: ${theme.color.text.neutral.inverted};
  }
`

export { RewardContainer }
