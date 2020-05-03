import React from "react"
import Notification from "../Notification"
import { meta } from "../../theme"
import { useDrift } from "../Drift"
const CheckoutSuccessNotification = props => {
  const [showDrift] = useDrift()

  return (
    <Notification title="🚀 Plan activated" {...props}>
      Welcome to {meta.app.title}. Look for a confirmation email arriving in
      your inbox (or spam folder) soon.{" "}
      <span
        onClick={showDrift}
        css={{ cursor: "pointer", textDecoration: "underline" }}
      >
        We're always here for your questions and feedback.
      </span>{" "}
      Feel free to reach out to us at any time.
      <div css={{ marginTop: "1rem" }}>♥ Network Chimp</div>
    </Notification>
  )
}

export default CheckoutSuccessNotification
