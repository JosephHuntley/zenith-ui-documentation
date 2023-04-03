import type { AppProps } from "next/app"
import Theme from "../styles/Theme"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
