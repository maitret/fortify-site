import React from "react"
import { colors } from "../theme"
import { PageLayout } from "../components/Layout"
import ExtendFreeTrialForm from "../components/ExtendFreeTrialForm"

import "@fortawesome/fontawesome-free/css/all.min.css"

const ExtendFreeTrialPage = () => (
  <PageLayout>
    <div
      css={{
        background: "#000",
        padding: "5rem 1rem",
        maxWidth: 600,
      }}
      className="container"
    >
      <div css={{ marginBottom: "2rem" }}>
        <h1 className="is-size-2" css={{ color: colors.darkThemeWhite }}>
          Extend your free trial
        </h1>
        <h3 className="is-size-5" css={{ color: colors.darkThemeGrey }}>
          Have a Twitter account and want to add another 14 days to your
          Portzilla free trial? Tweet something awesome about Portzilla and drop
          us a link to the tweet below.
        </h3>
      </div>

      <ExtendFreeTrialForm />
    </div>
  </PageLayout>
)

export default ExtendFreeTrialPage
