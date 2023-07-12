import { ReactNode } from 'react'

type TagVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

type WeightVariant = 'regular' | 'medium' | 'bold'

type ColorVariant =
  | 'orangeDefault'
  | 'neutralInverted'
  | 'neutralWeak'
  | 'neutralDefault'
  | 'neutralStrong'

type SizeVariant =
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'bodySm'
  | 'bodyMd'
  | 'bodyLg'
  | 'base'

type TypographyProps = {
  tag?: TagVariant
  children: ReactNode
  weight?: WeightVariant
  color?: ColorVariant
  size?: SizeVariant
}

type DynamicTypographyProps = {
  tag: TagVariant
  children: ReactNode
  weight: WeightVariant
  color: ColorVariant
  size?: SizeVariant
}

export type {
  ColorVariant,
  DynamicTypographyProps,
  SizeVariant,
  TagVariant,
  TypographyProps,
  WeightVariant
}
