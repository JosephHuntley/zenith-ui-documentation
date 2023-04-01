import React from "react"
import Head from "next/head"
import Link from "next/link"
import { getAllArticles } from "../../../utils/mdx"
import * as components from "zenith-ui"

export default function Page({ posts }) {
  console.log({ ...components })
  return (
    <>
      <Head>
        <title>Nexus-UI</title>
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
