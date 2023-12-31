import { ReactNode } from 'react'

// Define a variação da tag HTML a ser usada para a tipografia
type TagVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

// Define a variação de peso da fonte
type WeightVariant = 'regular' | 'medium' | 'bold'

// Define a variação de cor do texto
type ColorVariant =
  | 'orangeDefault'
  | 'neutralInverted'
  | 'neutralWeak'
  | 'neutralDefault'
  | 'neutralStrong'

// Define a variação de tamanho da fonte
type SizeVariant =
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'bodySm'
  | 'bodyMd'
  | 'bodyLg'
  | 'base'

type LineVariant = 'large' | 'medium' | 'small' | 'tiny' | 'micro' | 'none'

// Interface que representa as props do componente Typography
type TypographyProps = {
  tag?: TagVariant
  children: ReactNode
  weight?: WeightVariant
  color?: ColorVariant
  size?: SizeVariant
  line?: LineVariant
}

type DynamicTypographyProps = {
  tag: TagVariant
  children: ReactNode
  weight: WeightVariant
  color: ColorVariant
  line: LineVariant
  size?: SizeVariant
}

export type {
  ColorVariant,
  DynamicTypographyProps,
  LineVariant,
  SizeVariant,
  TagVariant,
  TypographyProps,
  WeightVariant
}
