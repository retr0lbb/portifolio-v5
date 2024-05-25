import { Html, Head, Main, NextScript } from "next/document";
import {Providers} from "@/providers/nextUi.provider"
import { DarkModeProvider } from "@/providers/darkModeProvider"

export default function Document() {
  return (
    <Html className="p-0 m-0 box-border scroll-smooth dark" lang="en">
      <Head></Head>
      <body className={"dark"}>
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
