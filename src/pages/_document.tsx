import { Html, Head, Main, NextScript } from "next/document";
import {Analytics} from "@vercel/analytics/next"


export default function Document() {
  return (
    <Html className="p-0 m-0 box-border antialiased scroll-smooth" lang="en">
      <Head></Head>
      <body>
            <Main />
            <NextScript />
            <Analytics mode="production" />
      </body>
    </Html>
  );
}
