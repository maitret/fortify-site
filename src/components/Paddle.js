import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { globalWindow } from "../utils/window"
import plans from "../plans"

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
