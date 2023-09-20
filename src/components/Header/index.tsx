import { SearchBar } from '../SearchBar'
import { Typography } from '../Typography'
import * as S from './styled'

const Header = () => (
  <S.Container>
    <S.Left className="left">
      <Typography
        tag="span"
        color="neutralDefault"
        size="bodySm"
        weight="regular"
      >
        Good Morning
      </Typography>
      <Typography tag="span" color="neutralDefault" size="base" weight="bold">
        Welcome Back!
      </Typography>
    </S.Left>

    <S.SearchBarWrapper>
      <SearchBar placeholder="Search" />
    </S.SearchBarWrapper>

    <S.Right>
      <S.IconsHeader>
        <button>
          <S.FaBellCustom size={24} />
        </button>

        <button>
          <S.FaGearCustom size={24} />
        </button>

        <S.Avatar
          src="https://github.com/FelipeMMoraes.png"
          alt="Foto Perfil"
        />
      </S.IconsHeader>
    </S.Right>
  </S.Container>
)

export { Header }
