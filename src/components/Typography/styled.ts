import { createElement } from 'react'

import styled, { DefaultTheme, css } from 'styled-components'
import {
  ColorVariant,
  DynamicTypographyProps,
  SizeVariant,
  TagVariant,
  WeightVariant
} from './types'

const variantStyles = (theme: DefaultTheme, variant: TagVariant) =>
  ({
    h1: css``,
    h2: css``,
    h3: css``,
    h4: css``,
    h5: css``,
    h6: css``,
    p: css``,
    span: css``
  })[variant]

const variantWeight = (theme: DefaultTheme, variant: WeightVariant) =>
  ({
    regular: css`
      font-weight: ${theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${theme.font.weight.medium};
    `,
    bold: css`
      font-weight: ${theme.font.weight.bold};
    `
  })[variant]

const variantColor = (theme: DefaultTheme, variant: ColorVariant) =>
  ({
    orangeDefault: css`
      color: ${theme.color.text.orange.default};
    `,
    neutralInverted: css`
      color: ${theme.color.text.neutral.inverted};
    `,
    neutralWeak: css`
      color: ${theme.color.text.neutral.weak};
    `,
    neutralDefault: css`
      color: ${theme.color.text.neutral.default};
    `,
    neutralStrong: css`
      color: ${theme.color.text.neutral.strong};
    `
  })[variant]

const variantSize = (theme: DefaultTheme, variant: SizeVariant) =>
  ({
    headingSm: css`
      font-size: ${theme.font.size.m6};
    `,
    headingMd: css`
      font-size: ${theme.font.size.m7};
    `,
    headingLg: css`
      /* font-size: ${theme.font.size.m7}; */
    `,
    bodySm: css`
      font-size: ${theme.font.size.m1};
    `,
    bodyMd: css`
      font-size: ${theme.font.size.m2};
    `,
    bodyLg: css`
      font-size: ${theme.font.size.m3};
    `,
    base: css`
      font-size: ${theme.font.size.base};
    `
  })[variant]

export const DynamicTypography = styled(
  ({ tag, children, ...props }: DynamicTypographyProps) =>
    createElement(tag, props, children)
)`
  ${({ theme, tag, weight, color, size }) => css`
    ${variantStyles(theme, tag)};
    ${variantWeight(theme, weight)};
    ${variantColor(theme, color)};
    ${size && variantSize(theme, size)};
  `};
`
