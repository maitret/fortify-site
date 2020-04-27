import React from "react"
import SEO from "../components/Seo"
import { PageLayout } from "../components/Layout"
import HomeHeroSection from "../components/HomeHeroSection"
import HomeFeaturesSection from "../components/HomeFeaturesSection"
import HomePricingSection from "../components/HomePricingSection"
import HomeResourcesSection from "../components/HomeResourcesSection"
import HomeSectionLayout from "../components/HomeSectionLayout"
import HomeTwitterSection from "../components/HomeTwitterSection"
import configs from "../../site-config"

import "@fortawesome/fontawesome-free/css/all.min.css"

const IndexPage = () => (
  <PageLayout>
    <SEO
      page="index"
      keywords={configs.app_keywords}
      title={configs.app_subtitle_short}
    />
    <div
      css={{
        paddingTop: "60px",
        background: "#000",
      }}
    >
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

      <HomeSectionLayout>
        <HomeTwitterSection />
      </HomeSectionLayout>
    </div>
  </PageLayout>
)

export default IndexPage
