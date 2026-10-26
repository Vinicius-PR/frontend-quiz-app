import backImgDesktopDark from '../assets/images/pattern-background-desktop-dark.svg'
import backImgTabletDark from '../assets/images/pattern-background-tablet-dark.svg'
import backImgMobileDark from '../assets/images/pattern-background-mobile-dark.svg'

import backImgDesktopLight from '../assets/images/pattern-background-desktop-light.svg'
import backImgTabletLight from '../assets/images/pattern-background-tablet-light.svg'
import backImgMobileLight from '../assets/images/pattern-background-mobile-light.svg'

import { colors } from './colors';

export const lightTheme = {
  name: 'light',
  backgroundImages: {
    mobile: backImgMobileLight,
    tablet: backImgTabletLight,
    desktop: backImgDesktopLight,
  },
  colors: {
    background: colors.grey50,
    text: colors.blue900,
    spanText: colors.grey500,
    backgroundOptions: colors.white,

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
  backgroundImages: {
    mobile: backImgMobileDark,
    tablet: backImgTabletDark,
    desktop: backImgDesktopDark,
  },
  colors: {
    background: colors.blue900,
    text: colors.white,
    spanText: colors.blue300,
    backgroundOptions: colors.blue850,

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