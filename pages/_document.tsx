import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  const [theme, settheme] = useState("dark");
  return (
    <Html className={theme}>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
