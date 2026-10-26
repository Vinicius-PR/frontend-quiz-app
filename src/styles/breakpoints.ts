interface Size {
  xs: string
  sm: string
  md: string
  ml: string
  lg: string
  xl: string
  xxl: string
}

const size: Size = {
  xs: '375px', // for small screen mobile
  sm: '580px', // for mobile screen
  md: '768px', // for tablets
  ml: '950px', // for small laptops
  lg: '1160px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  ml: `(max-width: ${size.ml})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
}