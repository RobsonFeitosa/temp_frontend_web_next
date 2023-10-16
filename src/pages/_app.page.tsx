import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { globalStyles, darkTheme } from '../styles/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppProvider from '@/hooks'
import { RouteGuard } from './router/RouterGuard'

globalStyles()

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <RouteGuard>
              <Component {...pageProps} />
            </RouteGuard>
          </AppProvider>
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
