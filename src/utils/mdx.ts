import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { sync } from "glob"
import { ArticleType } from "@/types/articleType"

const articlesPath = path.join(process.cwd(), "data/mdx")

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split("/")
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split(".")

    return slug
  })
}

export async function getArticleFromSlug(slug: string) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      category: data.category,
      package: data.package,
      ...data,
    },
  }
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), "data/mdx"))

  return articles.reduce((allArticles, articleSlug): any => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "data/mdx", articleSlug),
      "utf-8",
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
      },
      ...allArticles,
    ]
  }, [])
}
