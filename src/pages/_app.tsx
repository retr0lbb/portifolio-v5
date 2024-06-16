import "@/styles/globals.css";
import "@/styles/glassy.css"
import type { AppProps } from "next/app";
import { Providers as ThemeProvider } from "@/providers/theme.provider"
import { Providers } from "@/providers/nextUi.provider"
import { Poppins } from "next/font/google"


const rubick = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "auto",
  preload: true
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
