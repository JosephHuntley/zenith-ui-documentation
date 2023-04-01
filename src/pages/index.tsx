import Head from "next/head"
import { Switch } from "zenith-ui"

export default function Home() {
  return (
    <>
      <Head>
        <title>Zenith UI Docs</title>
        <meta name="description" content="Documentation for Zenith UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
		<Switch/>
	  </main>
    </>
  )
}
