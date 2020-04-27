import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import { DocsLayout } from "../components/Layout"
import MarkdownPage from "../components/MarkdownPage"
import { createLinkDocs } from "..//utils/createLink"
import { sectionListDocs } from "..//utils/sectionList"
import configs from "../../site-config"
import { meta } from "../theme"

const Docs = ({ data, location }) => (
  <DocsLayout location={location}>
    <MarkdownPage
      location={location}
      markdownData={data.mdx}
      ogDescription={data.mdx.excerpt}
      createLink={createLinkDocs}
      sectionList={sectionListDocs}
      metaKeywords={configs.docs_keywords}
      titlePostfix={` &ndash; ${meta.app.title} Docs`}
    />
  </DocsLayout>
)

Docs.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
      }
      fields {
        path
        slug
      }
    }
  }
`

export default Docs
