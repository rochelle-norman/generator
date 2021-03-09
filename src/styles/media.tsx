export const breakpoints: { [index: string]: number } = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const device: { [index: string]: {} } = {
  xs: `(min-width: 0rem)`,
  sm: `(min-width: ${breakpoints.sm / 16}rem)`,
  md: `(min-width: ${breakpoints.md / 16}rem)`,
  lg: `(min-width: ${breakpoints.lg / 16}rem)`,
  xl: `(min-width: ${breakpoints.xl / 16}rem)`,
};
