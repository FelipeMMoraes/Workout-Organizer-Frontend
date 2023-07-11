import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: {
        none: string
        small: string
        medium: string
        large: string
        xlarge: string
        pill: string
        circle: string
      }
      style: {
        solid: string
        dashed: string
      }
      width: {
        none: string
        thinner: string
        thin: string
        thick: string
      }
    }
    breakpoint: {
      sm: {
        minWidth: string
        maxWidth: string
      }
      md: {
        minWidth: string
        maxWidth: string
      }
      lg: {
        minWidth: string
        maxWidth: string
      }
      xlg: {
        minWidth: string
      }
    }
    color: {
      background: {
        neutral: {
          primary: string
          secondary: string
          tertiary: string
          quaternary: string
        }
        orange: {
          primary: string
          secondary: string
        }
        purple: {
          primary: string
          secondary: string
        }
        blue: {
          primary: string
          secondary: string
        }
      }
      text: {
        orange: {
          default: string
        }
        neutral: {
          inverted: string
          weak: string
          default: string
          strong: string
        }
      }
      border: {
        neutral: {
          default: string
          weak: string
        }
      }
    }
    font: {
      family: {
        display: string
        heading: string
        body: string
        caption: string
      }
      spacing: {
        tighty: string
        tight: string
        cozy: string
        roomy: string
        spacious: string
      }
      lineHeight: {
        large: string
        medium: string
        small: string
        tiny: string
        micro: string
        none: string
      }
      size: {
        base: string
        m1: string
        m2: string
        m3: string
        m4: string
        m5: string
        m6: string
        m7: string
        m8: string
        m9: string
        m10: string
        m11: string
        m12: string
      }
      weight: {
        regular: string
        medium: string
        bold: string
      }
    }
    icon: {
      tiny: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    opacity: {
      level: {
        semitransparent: string
        light: string
        medium: string
        intense: string
        semiopaque: string
      }
    }
    padding: {
      km0: string
      km1: string
      km2: string
      km3: string
      km4: string
      km5: string
      km6: string
    }
    spacing: {
      km0: string
      km1: string
      km2: string
      km3: string
      km4: string
      km5: string
      km6: string
      km8: string
      km10: string
      km12: string
      km14: string
      km16: string
    }
    zIndex: {
      default: number
      absolute: number
      tooltip: number
      modal: number
      toast: number
    }
  }
}
