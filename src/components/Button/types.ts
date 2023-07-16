import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type ButtonProps = {
  children: ReactNode
  isActive?: boolean
  icon?: IconType
}

export type { ButtonProps }
