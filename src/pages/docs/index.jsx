import React from "react"
import Head from "next/head"
import Link from "next/link"
import { getAllArticles } from "../../utils/mdx"
import Layout from "@/layout/Layout"

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
        <div>
          {posts.map((frontMatter) => {
            return (
              <Link
                href={`/docs/${frontMatter.slug}`}
                passHref
                key={frontMatter.title}
              >
                <div>
                  <h2>{frontMatter.title}</h2>
                  <p>{frontMatter.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
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
