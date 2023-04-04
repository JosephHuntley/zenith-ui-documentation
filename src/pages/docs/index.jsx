import React from "react"
import Head from "next/head"
import Link from "next/link"
import { getAllArticles } from "../../utils/mdx"
import Layout from "@/layout/Layout"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Container,
} from "zenith-ui"

export default function Page({ posts }) {
  return (
    <>
      <Head>
        <title>Zenith-UI</title>
        <meta
          name="description"
          content="Documentation for Zenith UI Components"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container
          margin={{ m: "3rem" }}
          grid={{ gap: "1rem", colTemplate: "1fr 1fr 1fr" }}
        >
          {posts.map((frontMatter) => {
            return (
              <Link
                href={`/docs/${frontMatter.slug}`}
                passHref
                key={frontMatter.title}
              >
                <Card size="md">
                  <CardHeader>
                    <Text
                      variant="h3"
                      align="center"
                      size={{ width: "100%" }}
                      font={{ color: "inherit" }}
                    >
                      {frontMatter.title}
                    </Text>
                  </CardHeader>
                  <CardBody></CardBody>
                  <CardFooter>
                    <p>{frontMatter.description}</p>
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
  const articles = await getAllArticles()

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}
