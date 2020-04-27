import React from "react"
import { graphql } from "gatsby"
import { DocsLayout } from "../components/Layout"
import MarkdownPage from "../components/MarkdownPage"
import { createLinkBlog } from "..//utils/createLink"
import configs from "../../site-config"
import { meta } from "../theme"

const toSectionList = allMarkdownData => [
  {
    title: "Recent Posts",
    items: allMarkdownData.edges
      .map(({ node }) => ({
        id: node.fields.slug,
        title: node.frontmatter.title,
      }))
      .concat({
        id: "/blog/all.html",
        title: "All posts ...",
      }),
  },
]

const Blog = ({ data, location }) => (
  <DocsLayout location={location}>
    <MarkdownPage
      authors={data.mdx.frontmatter.author}
      createLink={createLinkBlog}
      date={data.mdx.fields.date}
      location={location}
      ogDescription={data.mdx.excerpt}
      markdownData={data.mdx}
      metaKeywords={configs.blog_keywords}
      sectionList={toSectionList(data.allMdx)}
      titlePostfix={` &ndash; ${meta.app.title} Blog`}
    />
  </DocsLayout>
)

export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        author {
          frontmatter {
            name
            url
          }
        }
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
      }
    }
    allMdx(
      limit: 10
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog
