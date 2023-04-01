import { Html, Head, Main, NextScript } from "next/document"
import { ZenithProvider } from "zenith-ui"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ZenithProvider>
          <Main />
        </ZenithProvider>
        <NextScript />
      </body>
    </Html>
  )
}
