import type { AppProps } from "next/app"
import { ZenithProvider } from "zenith-ui"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ZenithProvider>
      <Component {...pageProps} />
    </ZenithProvider>
  )
}
