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
import ScrollTop from '@/components/ScrollTop';
import CookieConsentTool from '@/components/CookieConsentTool';

function MyApp(props: AppProps) {
  const store = useStore({});
  
  return (
    <GlobalDndContext>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App {...props} />
          <ScrollTop />
          <CookieConsentTool />
        </ThemeProvider>
      </Provider>
    </GlobalDndContext>
  )
}

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch()
  
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;