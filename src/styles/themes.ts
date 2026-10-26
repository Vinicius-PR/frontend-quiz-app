import { colors } from './colors';

export const lightTheme = {
  name: 'light',
  colors: {
    background: colors.grey50,
    text: colors.blue900,
    spanText: colors.grey500,
    
    primary: colors.purple600,
    primaryLight: colors.purple100,
    incorrect: colors.red500,
    green: colors.green500,
    greenLight: colors.green100,
    orange: colors.orange400,
    orangeLight: colors.orange50,
    blue: colors.blue500,
    bluelight: colors.blue50,
  }
}

export const darkTheme = {
  name: 'dark',
  colors: {
    background: colors.blue900,
    text: colors.white,
    spanText: colors.blue300,

    primary: colors.purple600,
    primaryLight: colors.purple100,
    incorrect: colors.red500,
    green: colors.green500,
    greenLight: colors.green100,
    orange: colors.orange400,
    orangeLight: colors.orange50,
    blue: colors.blue500,
    bluelight: colors.blue50,
  }
}