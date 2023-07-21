import * as S from './styled'
import type { RewardProps } from './types'

const Rewards = ({ children, icon: Icon }: RewardProps) => (
  <S.RewardContainer>
    {Icon && <Icon size={55} />}
    {children}
  </S.RewardContainer>
)
export { Rewards }
