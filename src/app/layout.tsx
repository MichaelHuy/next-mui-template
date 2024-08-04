import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';
import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

export const metadata: Metadata = {
  title: 'My MUI Next.js App',
  description: 'A responsive Next.js app with MUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}