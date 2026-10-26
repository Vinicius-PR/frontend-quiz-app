import 'styled-components'
import type { lightTheme } from './themes'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}