import { FaBell, FaGear } from 'react-icons/fa6'

import { Typography } from '../Typography'

import * as S from './styled'

type HeaderProps = {}

const Header = ({}: HeaderProps) => (
  <S.header>
    <div className="left">
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
    </div>

    <div className="right">
      <S.SearchBar></S.SearchBar>
      <div className="iconsHeader">
        <a href="#">
          <FaBell size={24} />
        </a>
        <a href="#">
          <FaGear size={24} />
        </a>
        <S.Avatar>
          <img src="https://github.com/FelipeMMoraes.png" alt="" />
        </S.Avatar>
      </div>
    </div>
  </S.header>
)

export { Header }
