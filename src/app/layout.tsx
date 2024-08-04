'use client'

import AppDrawer from '../components/Drawer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
// import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: 'My MUI Next.js App',
//   description: 'A responsive Next.js app with MUI',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
              <Header onDrawerToggle={handleDrawerToggle} />
              <AppDrawer open={mobileOpen} onClose={handleDrawerToggle} />
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
              >
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                  </Box>
                </ThemeProvider>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}