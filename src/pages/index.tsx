import Head from "next/head"
import { Switch } from "zenith-ui"
import Layout from "@/layout/Layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Zenith UI Docs</title>
        <meta name="description" content="Documentation for Zenith UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Switch />
        </main>
      </Layout>
    </>
  )
}
