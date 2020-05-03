import React, { createElement } from "react"
import { media } from "../../theme"

const LargeText = ({ elementName = "h4", text = "", customStyles = {} }) => {
  const GG = createElement(
    elementName,
    {
      style: {
        fontSize: "3rem",
        letterSpacing: "-.06em",
        background: "-webkit-linear-gradient(#f2f4f8, #7a80b1)",
        WebkitBackgroundClip: "text!important",
        WebkitTextFillColor: "transparent",
        fontWeight: "700",
        lineHeight: "1.2",
        color: "#f2f4f8",
        [media.size("xsmall")]: {
          fontSize: "23px!important",
        },
        ...customStyles,
      },
    },
    text
  )

  return GG
}

export default LargeText
