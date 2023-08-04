import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 1. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: true,
};

// 2. extend the theme
const theme = extendTheme({ config });

export default theme;