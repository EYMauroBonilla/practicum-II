import _ from 'lodash';
import { createTheme, Theme, ThemeOptions, PaletteOptions, TypeText } from '@mui/material/styles';

import typography from './Typography';
import components from './Override';
import shadows from './Shadows';

const SidebarWidth: number = 265;
const TopbarHeight: number = 70;

interface CustomTypeText extends Partial<TypeText> {
  danger?: string;
}

interface CustomPaletteOptions extends Omit<PaletteOptions, 'text'> {
  text?: CustomTypeText;
  action?: PaletteOptions['action'] & {
    disabledBackground?: string;
    hover?: string;
  };
}

interface CustomThemeOptions extends Omit<ThemeOptions, 'palette'> {
  status?: {
    danger: string;
  };
  palette?: CustomPaletteOptions;
}

const baseTheme: CustomThemeOptions = {
  direction: 'ltr',
  palette: {
    primary: {
      main: '#FF5900',
      light: '#e6f4ff',
      dark: '#1682d4',
    },
    secondary: {
      main: '#908989',
      light: '#ddebff',
      dark: '#173f98',
    },
    success: {
      main: '#006D52',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e46a76',
      light: '#fdf3f5',
      dark: '#e45a68',
    },
    warning: {
      main: '#fec90f',
      light: '#fff4e5',
      dark: '#dcb014',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0bb2fb',
      light: '#a7e3f4',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#777e89',
      danger: '#fc4b6c',
    },
    background: {
      default: '#fafbfb',
      paper: '#ffffff',
    },
    grey: {
      A100: '#ecf0f2',
      A200: '#99abb4',
      A400: '#767e89',
      A700: '#e6f4ff',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hover: 'rgba(215, 40, 47, 0.5)',
    },
  },
  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: TopbarHeight,
        padding: '0 30px',
      },
      '@media(max-width:1280px)': {
        minHeight: '64px',
      },
    },
  },
  status: {
    danger: '#e53e3e',
  },
  components,
  typography,
  shadows,
};

interface ThemeConfig {
  direction?: 'ltr' | 'rtl';
}

const BuildTheme = (config: ThemeConfig = {}): Theme => {
  const theme = createTheme(
    _.merge({}, baseTheme, {
      direction: config.direction,
    }) as ThemeOptions
  );
  return theme;
};

export { BuildTheme, TopbarHeight, SidebarWidth, baseTheme };