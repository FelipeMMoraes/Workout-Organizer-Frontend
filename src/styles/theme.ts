const theme = {
  border: {
    radius: {
      none: '0px',
      small: '4px',
      medium: '8px',
      large: '12px',
      xlarge: '20px',
      pill: '100px',
      circle: '100%'
    },
    style: {
      solid: 'solid',
      dashed: 'dashed'
    },
    width: {
      none: '0px',
      thinner: '1px',
      thin: '2px',
      thick: '4px'
    }
  },
  breakpoint: {
    sm: {
      minWidth: '0px',
      maxWidth: '479px'
    },
    md: {
      minWidth: '480px',
      maxWidth: '1023px'
    },
    lg: {
      minWidth: '1024px',
      maxWidth: '1365px'
    },
    xlg: {
      minWidth: '1366px'
    }
  },
  color: {
    background: {
      neutral: {
        primary: '#FFFFFF',
        secondary: '#F8FAFB',
        tertiary: '#64748B',
        quaternary: '#475569'
      },
      orange: {
        primary: '#F97316',
        secondary: '#FF4B00'
      },
      purple: {
        primary: '#8B5CF6',
        secondary: '#6D28D9'
      },
      blue: {
        primary: '#06B6D4',
        secondary: '#0891B2'
      }
    },
    text: {
      orange: {
        default: '#F97316'
      },
      neutral: {
        inverted: '#FFFFFF',
        weak: '#64748B',
        default: '#475569',
        strong: '#1E293B'
      }
    },
    border: {
      default: 'transparent',
      weak: '#CBD5E1'
    }
  },
  font: {
    family: {
      display: "'Manrope', sans-serif",
      heading: "'Manrope', sans-serif",
      body: "'Manrope', sans-serif",
      caption: "'Manrope', sans-serif"
    },
    spacing: {
      tighty: '-0.06em',
      tight: '-0.04em',
      cozy: '0',
      roomy: '0.02em',
      spacious: '0.04em'
    },
    lineHeight: {
      large: '1.6',
      medium: '1.5',
      small: '1.4',
      tiny: '1.3',
      micro: '1.1',
      none: '1.0'
    },
    size: {
      base: '16px',
      m1: '0.625rem',
      m2: '0.75rem',
      m3: '0.875rem',
      m4: '1rem',
      m5: '1.125rem',
      m6: '1.25rem',
      m7: '1.5rem',
      m8: '2rem',
      m9: '2.5rem',
      m10: '3rem',
      m11: '4rem',
      m12: '6rem'
    },
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
      extrabold: '900'
    }
  },
  icon: {
    tiny: '16px',
    small: '20px',
    medium: '24px',
    large: '32px',
    xlarge: '44px'
  },
  opacity: {
    level: {
      semitransparent: '0.08',
      light: '0.16',
      medium: '0.32',
      intense: '0.64',
      semiopaque: '0.80'
    }
  },
  padding: {
    km0: '0px',
    km1: '4px',
    km2: '8px',
    km3: '12px',
    km4: '16px',
    km5: '20px',
    km6: '24px'
  },
  spacing: {
    km0: '0px',
    km1: '4px',
    km2: '8px',
    km3: '12px',
    km4: '16px',
    km5: '20px',
    km6: '24px',
    km8: '32px',
    km10: '40px',
    km12: '48px',
    km14: '56px',
    km16: '64px'
  },
  zIndex: {
    default: 0,
    absolute: 1,
    tooltip: 40,
    modal: 1000,
    toast: 1100
  }
}

export { theme }
