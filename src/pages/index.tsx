import Head from "next/head"
import { useRouter } from "next/router"
import {
  Button,
  Center,
  Container,
  Portal,
  Text,
  Alert,
  CloseButton,
} from "zenith-ui"
import { HiArrowNarrowRight } from "react-icons/hi"
import Header from "@/layout/Header/Header"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <Head>
        <title>Zenith UI Docs</title>
        <meta name="description" content="Documentation for Zenith UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header isMenu={false} />
        <Center size={{ height: "100vh" }} xs={{ margin: { y: "15rem" } }}>
          <Container
            flex={{ gap: "1rem", direction: "column", justify: "center" }}
            md={{ size: { width: "75vw" } }}
            sm={{ size: { width: "95vw" } }}
            xs={{ size: { width: "95vw" } }}
            size={{ width: "62rem" }}
          >
            <Text
              variant="h1"
              size={{ width: "100%" }}
              font={{ size: "4rem" }}
              sm={{ font: { size: "4rem" } }}
            >
              Create fast accessible apps with
              <br />
              <span className="logo">Zenith-UI</span>
            </Text>
            <Text variant="p" md={{ font: { size: "3rem" } }}>
              React UI components, built with React and styled-components, offer
              responsive and accessible design Simplify the process of creating
              modern web applications with features like fields, navigation
              menus, and data displays.
            </Text>
          </Container>

          <Container
            margin={{ m: "3rem" }}
            flex={{ direction: "row" }}
            sm={{
              flex: { direction: "column", gap: "1.5rem" },
              size: { width: "calc(100% - 6rem)" },
            }}
            xs={{
              flex: { direction: "column", gap: "1.5rem" },
              size: { width: "calc(100% - 6rem)" },
            }}
          >
            <Button
              variant="outline"
              padding={{ x: "4rem", y: "2rem" }}
              onClick={() => router.push("/docs")}
            >
              <Text variant="h6" font={{ size: "2rem" }}>
                Get Started{"    "}
                <HiArrowNarrowRight />
              </Text>
            </Button>

            <a
              href="https://github.com/JosephHuntley/zenith-ui"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                padding={{ x: "4rem", y: "2rem" }}
                margin={{ left: "1.5rem" }}
                md={{
                  size: { width: "100%" },
                }}
                sm={{ margin: { left: "0" }, size: { width: "100%" } }}
                xs={{ margin: { left: "0" }, size: { width: "100%" } }}
              >
                <Text variant="h6" font={{ size: "2rem" }}>
                  GitHub
                </Text>
              </Button>
            </a>
          </Container>
        </Center>
      </main>
      <Portal>
        <Alert isOpen={isOpen}>
          <Text color="transparent">
            This website is still under development. Feel free to check out the{" "}
            <a
              className="underline"
              href="https://github.com/JosephHuntley/zenith-ui"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              className="underline"
              href="https://www.npmjs.com/package/zenith-ui"
              target="_blank"
              rel="noreferrer"
            >
              NPM Package
            </a>
            .
          </Text>
          <CloseButton
            margin={{ left: "2rem" }}
            size={{ width: "1.5rem" }}
            color="transparent"
            onClick={() => setIsOpen(false)}
          />
        </Alert>
      </Portal>
    </>
  )
}
