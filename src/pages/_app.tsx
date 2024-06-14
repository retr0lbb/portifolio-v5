import "@/styles/globals.css";
import "@/styles/glassy.css"
import type { AppProps } from "next/app";
import { Providers as ThemeProvider } from "@/providers/theme.provider"
import { Providers } from "@/providers/nextUi.provider"
import { Rubik } from "next/font/google"


const rubick = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Providers>
        <main className={rubick.className}>
          <Component {...pageProps} />
        </main>
      </Providers>
    </ThemeProvider>
  )
}
