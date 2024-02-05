import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string,
    colors: {
      background: string,
      circle: string,
      mainText: string,
      semiText: string,
      backgroundOptions: string,
      linecolor: string,
      pureWhite: string,
      lightGray: string,
      purple: string,
      lightPurple: string
    }
  }
}