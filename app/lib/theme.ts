/**
 * Harmonics Industries — Theme Configuration
 * TypeScript definitions for design tokens
 */

export const colors = {
  // Foundation
  obsidian: '#0a0a0a',
  graphite: '#1a1a1a',
  steel: '#3d3d3d',
  mist: '#e5e5e5',
  vapor: '#f5f5f5',
  white: '#ffffff',

  // Accent — Harmonic Resonance
  frequency: '#6366f1',
  amplitude: '#8b5cf6',
  wavelength: '#06b6d4',

  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',

  // RGB variants (for opacity)
  rgbFrequency: '99, 102, 241',
  rgbObsidian: '10, 10, 10',
} as const;

export const typography = {
  // Font families
  fontSans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",

  // Font sizes
  textDisplay: '3.5rem',   // 56px
  textH1: '2.5rem',        // 40px
  textH2: '1.75rem',       // 28px
  textH3: '1.25rem',       // 20px
  textBody: '1rem',        // 16px
  textSmall: '0.875rem',   // 14px
  textMono: '0.875rem',    // 14px

  // Line heights
  leadingTight: 1.1,
  leadingSnug: 1.2,
  leadingNormal: 1.4,
  leadingRelaxed: 1.6,
  leadingMono: 1.7,

  // Letter spacing
  trackingTight: '-0.02em',
  trackingNormal: 0,
  trackingWide: '0.05em',

  // Font weights
  weightRegular: 400,
  weightMedium: 500,
  weightSemibold: 600,
  weightBold: 700,
} as const;

export const spacing = {
  space1: '0.25rem',   // 4px
  space2: '0.5rem',    // 8px
  space3: '0.75rem',   // 12px
  space4: '1rem',      // 16px
  space5: '1.25rem',   // 20px
  space6: '1.5rem',    // 24px
  space8: '2rem',      // 32px
  space10: '2.5rem',   // 40px
  space12: '3rem',     // 48px
  space16: '4rem',     // 64px
  space20: '5rem',     // 80px
  space24: '6rem',     // 96px
} as const;

export const containers = {
  narrow: '640px',
  main: '896px',
  wide: '1200px',
  max: '1400px',
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const radius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 12px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 24px rgba(0, 0, 0, 0.12)',
  xl: '0 20px 40px rgba(0, 0, 0, 0.15)',
  frequency: '0 4px 16px rgba(99, 102, 241, 0.25)',
} as const;

export const motion = {
  // Durations
  durationFast: 100,
  durationNormal: 200,
  durationSlow: 300,

  // Easing
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
  easeDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const zIndex = {
  dropdown: 100,
  sticky: 200,
  modal: 300,
  tooltip: 400,
} as const;

export const gradients = {
  harmonic: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  industrial: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
} as const;

export const dataViz = {
  viz1: '#6366f1',  // Frequency
  viz2: '#8b5cf6',  // Amplitude
  viz3: '#06b6d4',  // Wavelength
  viz4: '#10b981',  // Success
  viz5: '#f59e0b',  // Warning
} as const;

// Export as CSS custom properties for dynamic generation
export const asCssCustomProperties = () => {
  return `
    :root {
      --color-obsidian: ${colors.obsidian};
      --color-graphite: ${colors.graphite};
      --color-steel: ${colors.steel};
      --color-mist: ${colors.mist};
      --color-vapor: ${colors.vapor};
      --color-white: ${colors.white};
      --color-frequency: ${colors.frequency};
      --color-amplitude: ${colors.amplitude};
      --color-wavelength: ${colors.wavelength};
      --color-success: ${colors.success};
      --color-warning: ${colors.warning};
      --color-error: ${colors.error};
      --font-sans: ${typography.fontSans};
      --font-mono: ${typography.fontMono};
      --radius-sm: ${radius.sm};
      --radius-md: ${radius.md};
      --radius-lg: ${radius.lg};
      --radius-xl: ${radius.xl};
      --radius-full: ${radius.full};
      --shadow-sm: ${shadows.sm};
      --shadow-md: ${shadows.md};
      --shadow-lg: ${shadows.lg};
      --shadow-xl: ${shadows.xl};
      --gradient-harmonic: ${gradients.harmonic};
    }
  `;
};

// Type exports
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
export type Shadow = keyof typeof shadows;
export type Breakpoint = keyof typeof breakpoints;

export default {
  colors,
  typography,
  spacing,
  containers,
  breakpoints,
  radius,
  shadows,
  motion,
  zIndex,
  gradients,
  dataViz,
};
