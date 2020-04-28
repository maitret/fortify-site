import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { globalWindow } from "../utils/window"
import plans from "../plans"

export const Subscribe = (email, marketingConsent = true) =>
  new Promise(resolve => {
    globalWindow.Paddle.Audience.subscribe(email, marketingConsent, function(
      response
    ) {
      resolve(response.success)
    })
  })

const Paddle = () => {
  useEffect(() => {
    globalWindow.Paddle &&
      globalWindow.Paddle.Setup({ vendor: plans.paddle.vendorId })
  }, [])

  return (
    <Helmet>
      <script src="https://cdn.paddle.com/paddle/paddle.js" />
    </Helmet>
  )
}

export default Paddle
