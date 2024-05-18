import { Html, Head, Main, NextScript } from "next/document";
import {Providers} from "@/providers/nextUi.provider"
import { DarkModeProvider } from "@/providers/darkModeProvider"
import { useDarkmode } from "@/use-case/useDarkmode";

export default function Document() {
  const {isDarkModed, toogleDarkmode} = useDarkmode()
  console.log("from main: ", isDarkModed)
  return (
    <Html className="p-0 m-0 box-border scroll-smooth dark" lang="en">
      <Head></Head>
      <body className={`${isDarkModed? "dark" : ""}`}>
        <Providers>
          <DarkModeProvider>
            <Main />
            <NextScript />
          </DarkModeProvider>
        </Providers>
      </body>
    </Html>
  );
}
