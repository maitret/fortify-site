import React, { useEffect, useState } from "react"
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
  const [initCounter, setInitCounter] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      if (initCounter > 10) clearTimeout(interval)

      setInitCounter(initCounter + 1)

      globalWindow.Paddle &&
        globalWindow.Paddle.Setup({ vendor: plans.paddle.vendorId })
    }, 2000)
  }, [initCounter])

  return (
    <Helmet>
      <script src="https://cdn.paddle.com/paddle/paddle.js" />
    </Helmet>
  )
}

export default Paddle
