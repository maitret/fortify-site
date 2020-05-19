import React from "react"
import SEO from "../components/Seo"
import { PageLayout } from "../components/Layout"
import ExtendFreeTrialForm from "../components/ExtendFreeTrialForm"
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
        maxWidth: 600,
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
      className="container"
    >
      <h1 className="is-size-2">Extend your free trial</h1>
      <ExtendFreeTrialForm />
    </div>
  </PageLayout>
)

export default IndexPage
