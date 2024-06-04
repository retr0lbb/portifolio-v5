import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html suppressHydrationWarning className="p-0 m-0 box-border scroll-smooth" lang="en">
      <Head></Head>
      <body>
            <Main />
            <NextScript />
      </body>
    </Html>
  );
}
