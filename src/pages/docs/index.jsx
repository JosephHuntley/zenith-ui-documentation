import React from "react"
import { allDocs } from "contentlayer/generated"
import Head from "next/head"
import Link from "next/link"
import Layout from "@/layout/Layout"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Container,
} from "zenith-ui"

export default function Page({ docs }) {
  return (
    <>
      <Head>
        <title>Zenith-UI</title>
        <meta
          name="description"
          content="Documentation for Zenith UI Components"
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container
          margin={{ x: "3rem", y: "3rem" }}
          grid={{ gap: "1rem", colTemplate: "1fr 1fr 1fr" }}
          md={{
            grid: { colTemplate: "1fr 1fr", gap: "3rem" },
            margin: { x: "6rem" },
          }}
          sm={{ grid: { colTemplate: "1fr" }, margin: { x: "5.5rem" } }}
        >
          {docs.map((doc) => {
            return (
              <Link href={`/docs/${doc.slug}`} passHref key={doc.title}>
                <Card size="md">
                  <CardHeader>
                    <Text
                      variant="h3"
                      align="center"
                      size={{ width: "100%" }}
                      font={{ color: "inherit" }}
                    >
                      {doc.title}
                    </Text>
                  </CardHeader>
                  <CardBody></CardBody>
                  <CardFooter>
                    <p>{doc.description}</p>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const articles = allDocs

  return {
    props: {
      docs: articles,
    },
  }
}
