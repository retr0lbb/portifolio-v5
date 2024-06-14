import "@/styles/globals.css";
import "@/styles/glassy.css"
import type { AppProps } from "next/app";
import {Providers as ThemeProvider} from "@/providers/theme.provider"
import { Providers } from "@/providers/nextUi.provider"
import {} from "@next/font/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  )
}
