import { FaSearch } from 'react-icons/fa'

import * as S from './styled'
import { SearchBarProps } from './types'

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <S.SearchBarWrapper>
      <S.SearchIcon>
        <FaSearch />
      </S.SearchIcon>
      <S.SearchInput type="text" placeholder={placeholder} />
    </S.SearchBarWrapper>
  )
}

export { SearchBar }
