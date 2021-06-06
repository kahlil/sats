import { extendTheme, ThemeConfig, Colors } from '@chakra-ui/react'

const config: Partial<ThemeConfig> = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const colors: Partial<Colors> = {
  gray: {
    50: '#f8f0f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#120b0d',
  },
}

const customTheme = extendTheme({
  config,
  // colors,
})

export default customTheme
