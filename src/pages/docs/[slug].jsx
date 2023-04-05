import React from "react"
import Head from "next/head"
import Layout from "@/layout/Layout"
import { allDocs } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
// import { getSlug, getArticleFromSlug } from "../../utils/mdx"
import { MDXComponents } from "../../components/mdx-components/mdx-components"

export default function Doc({ doc }) {
  const Component = useMDXComponent(doc?.body?.code)
  const title = `${doc.title} | Zenith-UI`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={doc.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <h1>{doc.title}</h1>
          <Component components={MDXComponents} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = allDocs.map((doc) => ({ params: { slug: doc.slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const doc = allDocs.find((doc) => doc.slug === params.slug)
  return {
    props: {
      doc,
    },
  }
}
