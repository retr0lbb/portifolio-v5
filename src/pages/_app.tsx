import "@/styles/globals.css";
import "@/styles/glassy.css"
import type { AppProps } from "next/app";
import { Providers as ThemeProvider } from "@/providers/theme.provider"
import { Providers } from "@/providers/nextUi.provider"
import { Poppins } from "next/font/google"
import {NextIntlClientProvider} from "next-intl"
import { useRouter } from "next/router";


const rubick = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "auto",
  preload: true
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider>
      <Providers>
        <main className={rubick.className}>
          <NextIntlClientProvider 
            locale={router.locale}
            messages={pageProps.messages}
            timeZone="America/Sao_Paulo"
            >
            <Component {...pageProps} />
          </NextIntlClientProvider>
        </main>
      </Providers>
    </ThemeProvider>
  )
}
