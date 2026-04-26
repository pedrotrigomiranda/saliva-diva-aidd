'use client';

import { CacheProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from './emotion-cache';

const theme = createTheme({
  typography: {
    fontFamily: "'Akzidenz Grotesk Pro', Arial, Helvetica, sans-serif",
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
