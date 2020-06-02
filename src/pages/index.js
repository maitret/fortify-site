import React from "react"
import SEO from "../components/Seo"
import { PageLayout } from "../components/Layout"
import HomeHeroSection from "../components/HomeHeroSection"
import HomeFeaturesSection from "../components/HomeFeaturesSection"
import HomePricingSection from "../components/HomePricingSection"
import HomeResourcesSection from "../components/HomeResourcesSection"
import HomeSectionLayout from "../components/HomeSectionLayout"
import configs from "../../site-config"
import { meta } from "../theme"

import "@fortawesome/fontawesome-free/css/all.min.css"

const IndexPage = () => (
  <PageLayout>
    <SEO
      page="index"
      title={meta.app.description}
      keywords={configs.app_keywords}
    />
    <div
      css={{
        paddingTop: "60px",
        background: "#000",
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div
          css={{
            padding: "1rem",
            cursor: "default",
            fontVariant: "small-caps",
            border: `1px solid`,
            borderColor: `#faad3f !important`,
            color: `#faad3f !important`,
            borderRadius: "6px",
          }}
        >
          <i css={{ marginRight: "0.5rem" }} className="fas fa-award"></i>
          Cloudflare Apps (2019): Most Downloaded DevOps solution
        </div>
      </div>

      <HomeHeroSection />

      <HomeSectionLayout>
        <HomeFeaturesSection />
      </HomeSectionLayout>

      <HomeSectionLayout>
        <HomePricingSection />
      </HomeSectionLayout>

      <HomeSectionLayout>
        <HomeResourcesSection />
      </HomeSectionLayout>

      {/* <HomeSectionLayout>
        <HomeTwitterSection />
      </HomeSectionLayout> */}
    </div>
  </PageLayout>
)

export default IndexPage
