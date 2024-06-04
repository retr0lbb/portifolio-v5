import { Html, Head, Main, NextScript } from "next/document";
import { Providers } from "@/providers/nextUi.provider"

export default function Document() {
  return (
    <Html suppressHydrationWarning className="p-0 m-0 box-border scroll-smooth" lang="en">
      <Head></Head>
      <body>
          <Providers>
            <Main />
            <NextScript />
          </Providers>
      </body>
    </Html>
  );
}
