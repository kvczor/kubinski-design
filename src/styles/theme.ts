export type Color =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
type ColorShade =
  | "000"
  | "025"
  | "050"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"

export type Colors = { [color in Color]?: { [key in ColorShade]?: string } }

export const getSize = (factor = 1): string => {
  const isInteger = Number.isInteger(factor)
  if (!isInteger) {
    console.warn("Factor must be an integer in order to maintain 4 point rule.")
  }
  return `${factor / 4}rem`
}

export type Sizes = {
  xSmall: string
  small: string
  medium: string
  large: string
  xLarge: string
  xxLarge: string
}

export const sizes: Sizes = {
  xSmall: getSize(1), // 4px
  small: getSize(3), // 12px
  medium: getSize(4), // 16rem
  large: getSize(6), // 24px
  xLarge: getSize(10), // 40px
  xxLarge: getSize(16), // 64px
}

export const colors: Colors = {
  primary: {
    "500": "#FF3200",
  },
  neutral: {
    "000": "#FFFFFF",
    "025": "#E5E4E9",
    "900": "#000000",
  },
  success: {
    "500": "#00C76B",
  },
}

export const mediaQueries = {
  mobileS: `@media (min-width: 320px)`,
  mobileM: `@media (min-width: 375px)`,
  mobileL: `@media (min-width: 425px)`,
  tablet: `@media (min-width: 768px)`,
  laptop: `@media (min-width: 1024px)`,
  laptopL: `@media (min-width: 1440px)`,
  desktop: `@media (min-width: 2560px)`,
}

export type Theme = {
  colors: Colors
  sizes: Sizes
  mediaQueries: typeof mediaQueries
  getSpacing: () => string
}

const theme: Theme = {
  colors,
  sizes,
  mediaQueries,
  getSpacing: getSize,
}

export default theme
