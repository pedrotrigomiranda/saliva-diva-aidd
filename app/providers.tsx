'use client';

import { CacheProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from './emotion-cache';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7249b0', // Purple
    },
    secondary: {
      main: '#7cfec3', // Cyan/Mint
    },
    background: {
      default: '#7249b0',
      paper: '#7249b0',
    },
    text: {
      primary: '#ffffff',
      secondary: '#7cfec3',
    },
  },
  typography: {
    fontFamily: "'Akzidenz Grotesk Pro', Arial, Helvetica, sans-serif",
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      color: '#7cfec3',
      lineHeight: 1.2,
      textDecoration: 'none',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#7cfec3',
      lineHeight: 1.3,
      textDecoration: 'none',
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: '#7cfec3',
      lineHeight: 1.3,
      textDecoration: 'none',
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 700,
      color: '#7cfec3',
      lineHeight: 1.4,
      textDecoration: 'none',
    },
    body1: {
      fontSize: '0.8rem',
      color: '#ffffff',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      color: '#ffffff',
      lineHeight: 1.5,
    },
  },
});
const clientSideEmotionCache = createEmotionCache();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
