import React from "react"
import Head from "next/head"
import Link from "next/link"
import { getAllArticles } from "../../../utils/mdx"
export default function Page({ posts }) {
  console.log({ ...components })
  return (
    <>
      <Head>
        <title>Nexus-UI</title>
        <meta
          name="description"
          content="Documentation for Zenith UI Components"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
