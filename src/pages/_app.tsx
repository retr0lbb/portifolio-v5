import "@/styles/globals.css";
import "@/styles/glassy.css"
import type { AppProps } from "next/app";
import {Providers as ThemeProvider} from "@/providers/theme.provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
