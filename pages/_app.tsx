/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Provider, useDispatch } from 'react-redux'
import { initStore, useStore } from '@/modules/store';
import GlobalDndContext from '@/components/dnd-context';
import { useEffect, useMemo, useState } from 'react';

// RTL plugins
import rtlPlugin from 'stylis-plugin-rtl';

// Material Dashboard 2 PRO React TS themes
import theme from '@/mui/assets/theme';
import themeRTL from '@/mui/assets/theme/theme-rtl';
import ScrollTop from '@/components/ScrollTop';
import CookieConsentTool from '@/components/CookieConsentTool';
import 'typeface-roboto';
import '@/assets/scrollbar.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MyApp({Component, pageProps}) {
  const store = useStore({});

  useEffect(() => {
    document.documentElement.className = `${'info'}-scrollbar`;
  },[]);

  return (
    <GlobalDndContext>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <ScrollTop />
        </ThemeProvider>
      </Provider>
    </GlobalDndContext>
  )
}

export default MyApp;