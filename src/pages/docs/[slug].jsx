import React from "react"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import { getSlug, getArticleFromSlug } from "../../utils/mdx"

export default function Doc({ post: { source, frontmatter, components } }) {
  const title = `${frontmatter.title} | Zenith-UI`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{frontmatter.title}</h1>
        <div>
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  // const mdxSource = await serialize(content, {
  // 	mdxOptions: {
  // 		rehypePlugins: [
  // 			rehypeSlug,
  // 			[
  // 				rehypeAutolinkHeadings,
  // 				{
  // 					properties: { className: ['anchor'] },
  // 				},
  // 				{ behavior: 'wrap' },
  // 			],
  // 			rehypeHighlight,
  // 			rehypeCodeTitles,
  // 		],
  // 	},
  // });
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
}
