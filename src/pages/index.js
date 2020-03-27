import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/Seo"
import { PageLayout } from "../components/Layout"
import { useDrift } from "../components/Drift"
import HomeHeroSection from "../components/HomeHeroSection"
import HomeFeaturesSection from "../components/HomeFeaturesSection"

import configs from "../../site-config"

const IndexPage = ({ data }) => {
  const [openSidebar] = useDrift()

  return (
    <PageLayout>
      <SEO
        page="index"
        keywords={configs.app_keywords}
        title={configs.app_subtitle_short}
      />
      <div
        css={{
          paddingTop: "80px",
          background: "#000",
        }}
      >
        <HomeHeroSection />
        <HomeFeaturesSection />
      </div>
      {/* <button onClick={openSidebar}>chat</button> */}
    </PageLayout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    playStore: file(relativePath: { eq: "playstore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
