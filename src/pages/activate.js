import React from "react"
import { colors } from "../theme"
import configs from "../../site-config"
import SEO from "../components/Seo"
import { PageLayout } from "../components/Layout"
import ActivateYourSiteForm from "../components/ActivateYourSiteForm"

import "@fortawesome/fontawesome-free/css/all.min.css"

const ActivateYourSitePage = ({ location }) => {
  const url = new URL(location.href || "https://test.com")

  return (
    <PageLayout>
      <SEO
        page="activateYourSite"
        title={configs.activate_your_site_title}
        keywords={configs.activate_your_site_keywords}
      />
      <div
        css={{
          background: "#000",
          padding: "5rem 1rem",
          maxWidth: 600,
        }}
        className="container"
      >
        <div css={{ marginBottom: "3rem" }}>
          <h1 className="is-size-2" css={{ color: colors.darkThemeWhite }}>
            Activate your site
          </h1>
          <h3 className="is-size-5" css={{ color: colors.darkThemeWhite }}>
            Start using Fortify by clicking the activation link in the email we
            sent when you installed the app. If you can't find it, search your
            email for <em>support@networkchimp.com</em> or email us to get
            started.
          </h3>
        </div>

        <ActivateYourSiteForm
          initialState={{
            code: url.searchParams.get("code"),
            domain: url.searchParams.get("domain"),
            email: url.searchParams.get("email"),
          }}
        />
      </div>
    </PageLayout>
  )
}

export default ActivateYourSitePage
