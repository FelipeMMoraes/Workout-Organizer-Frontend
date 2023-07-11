import { createElement } from 'react'

import styled, { DefaultTheme, css } from 'styled-components'
import { DynamicTypographyProps, TagVariant, WeightVariant } from './types'

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
    medium: css``,
    bold: css`
      font-weight: ${theme.font.weight.bold};
    `
  })[variant]

export const DynamicTypography = styled(
  ({ tag, children, ...props }: DynamicTypographyProps) =>
    createElement(tag, props, children)
)`
  ${({ theme, tag, weight }) => css`
    ${variantStyles(theme, tag)};
    ${variantWeight(theme, weight)};
  `};
`
