import React from "react"
import { colors } from "../theme"
import configs from "../../site-config"
import SEO from "../components/Seo"
import { Step } from "../components/Step"
import { PageLayout } from "../components/Layout"
import ExtendFreeTrialForm from "../components/ExtendFreeTrialForm"

import "@fortawesome/fontawesome-free/css/all.min.css"

const ExtendFreeTrialPage = () => (
  <PageLayout>
    <SEO
      page="extendFreeTrial"
      title={configs.extend_free_trial_title}
      keywords={configs.extend_free_trial_keywords}
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
          Extend your free trial
        </h1>
        <h3 className="is-size-5" css={{ color: colors.darkThemeGrey }}>
          Have a Twitter account and want to extend your Portzilla free trial
          another 14 days? Follow these two steps and we'll make it happen.
        </h3>
      </div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <Step number={1} />
        <p css={{ color: colors.darkThemeWhite }}>
          We love feedback and use it to make Portzilla better. A minutes or two
          of your time for a{" "}
          <a
            href="https://www.cloudflare.com/apps/portzilla?leaveComment=true"
            target="_blank"
            rel="noopener"
          >
            rating or review
          </a>{" "}
          is valuable to us!
        </p>
      </div>

      <div css={{ display: "flex", alignItems: "center" }}>
        <Step number={2} />
        <p css={{ color: colors.darkThemeGrey }}>
          Tweet something awesome about Portzilla and drop us a link to it
          below. We'll normally reply within 1-3 hours!
        </p>
      </div>
      <ExtendFreeTrialForm />
    </div>
  </PageLayout>
)

export default ExtendFreeTrialPage
