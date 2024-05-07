import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="p-0 m-0 box-border" lang="en">
      <Head></Head>
      <body className="overflow-y-hidden overflow-x-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
