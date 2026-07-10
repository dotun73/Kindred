export const COLORS = {
  // Primary palette — matches the design
  purple: {
    50:  '#F5F3FF',
    100: '#EDE9FE',
    300: '#C4B5FD',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    900: '#2E1065',
  },
  coral: {
    50:  '#FFF1EE',
    100: '#FFE4DE',
    300: '#FCA89A',
    500: '#F97316',
    600: '#EA580C',
  },
  // Neutrals
  gray: {
    50:  '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  white: '#FFFFFF',
  black: '#000000',

  // Semantic
  success: '#22C55E',
  error:   '#EF4444',
  warning: '#F59E0B',
};

export const DARK = {
  background:      '#0F0F13',
  surface:         '#1A1A24',
  surfaceElevated: '#252535',
  border:          '#2E2E40',
  text: {
    primary:   '#F5F5F5',
    secondary: '#A3A3A3',
    muted:     '#525252',
  },
};

export const LIGHT = {
  background:      '#FAFAFA',
  surface:         '#FFFFFF',
  surfaceElevated: '#F5F5F5',
  border:          '#E5E5E5',
  text: {
    primary:   '#171717',
    secondary: '#525252',
    muted:     '#A3A3A3',
  },
};

export const SPACING = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
};

export const RADIUS = {
  sm:   8,
  md:   12,
  lg:   16,
  xl:   24,
  full: 9999,
};

export const FONT = {
  size: {
    xs:   11,
    sm:   13,
    md:   15,
    lg:   17,
    xl:   20,
    xxl:  24,
    xxxl: 32,
  },
  weight: {
    regular:  '400' as const,
    medium:   '500' as const,
    semibold: '600' as const,
    bold:     '700' as const,
  },
};

// Gradient configs for LinearGradient
export const GRADIENTS = {
  primary:  ['#8B5CF6', '#EA580C'],
  card:     ['rgba(139,92,246,0.15)', 'rgba(234,88,12,0.08)'],
  matchBg:  ['#6D28D9', '#EA580C'],
};