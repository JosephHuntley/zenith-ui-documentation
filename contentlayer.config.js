import { defineDocumentType, makeSource } from "contentlayer/source-files"
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
  },
}

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `mdx/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    package: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Doc],
})
