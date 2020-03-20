import React from "react"
import { MDXProvider } from "@mdx-js/react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Flex from "../Flex"
import Container from "../Container"
import MarkdownHeader from "../MarkdownHeader"
import NavigationFooter from "../../templates/components/NavigationFooter"
import StickyResponsiveSidebar from "../StickyResponsiveSidebar"
import findSectionForPath from "../../utils/findSectionForPath"
import toCommaSeparatedList from "../../utils/toCommaSeparatedList"
import { sharedStyles } from "../../theme"
import ButtonLink from "../ButtonLink"
import mdxComponents from "../mdx"
import SEO from "../Seo"
import Tip from "../Tip"

const getPageById = (sectionList, templateFile) => {
  if (!templateFile) {
    return null
  }
  const [prefix, suffix] = templateFile.split("/")

  let linkId
  if (suffix) {
    linkId = suffix.replace(".html", "")
  } else {
    linkId = prefix.replace(".html", "")
  }

  const sectionItems = sectionList.map(section => section.items)
  const flattenedSectionItems = [].concat.apply([], sectionItems)
  const subitemsList = flattenedSectionItems.map(item =>
    item.subitems ? item.subitems : item
  )
  const flattenedSubitemsList = [].concat.apply([], subitemsList)

  return flattenedSubitemsList.find(item => item.id === linkId)
}

const MarkdownPage = ({
  authors = [],
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownData,
  sectionList,
  titlePostfix = "",
  metaKeywords,
  hideSidebar,
}) => {
  const hasAuthors = authors.length > 0
  const titlePrefix = markdownData.frontmatter.title || ""

  const prev = getPageById(sectionList, markdownData.frontmatter.prev)
  const next = getPageById(sectionList, markdownData.frontmatter.next)

  return (
    <MDXProvider
      components={{
        ...mdxComponents,
        Tip,
        AnchorLink,
        ButtonLink,
      }}
    >
      <Flex
        direction="column"
        grow="1"
        shrink="0"
        halign="stretch"
        css={{
          width: "100%",
          flex: "1 0 auto",
          position: "relative",
          zIndex: 0,
        }}
      >
        <SEO
          description={ogDescription}
          keywords={metaKeywords}
          title={`${titlePrefix}${titlePostfix}`}
        />
        <div css={{ flex: "1 0 auto" }}>
          <Container>
            <div css={sharedStyles.articleLayout.container}>
              <Flex type="article" direction="column" grow="1" halign="stretch">
                <MarkdownHeader title={titlePrefix} />

                {(date || hasAuthors) && (
                  <div css={{ marginTop: 15 }}>
                    {date}{" "}
                    {hasAuthors && (
                      <span>
                        by{" "}
                        {toCommaSeparatedList(authors, author => (
                          <a
                            css={sharedStyles.link}
                            href={author.frontmatter.url}
                            key={author.frontmatter.name}
                          >
                            {author.frontmatter.name}
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                )}

                {/* markdownData.html is true is data is coming from MarkdownRemark query */}
                <div css={sharedStyles.articleLayout.content}>
                  {markdownData.html ? (
                    <div
                      css={[sharedStyles.markdown]}
                      dangerouslySetInnerHTML={{ __html: markdownData.html }}
                    />
                  ) : (
                    <div css={[sharedStyles.markdown]}>
                      <MDXRenderer>{markdownData.body}</MDXRenderer>
                    </div>
                  )}
                </div>
              </Flex>

              {!hideSidebar && (
                <div css={sharedStyles.articleLayout.sidebar}>
                  <StickyResponsiveSidebar
                    enableScrollSync={enableScrollSync}
                    createLink={createLink}
                    defaultActiveSection={findSectionForPath(
                      location.pathname,
                      sectionList
                    )}
                    location={location}
                    sectionList={sectionList}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
        {(next || prev) && (
          <NavigationFooter location={location} next={next} prev={prev} />
        )}
      </Flex>
    </MDXProvider>
  )
}

export default MarkdownPage
