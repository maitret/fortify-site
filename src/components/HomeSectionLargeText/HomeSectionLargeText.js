import React from "react"
import { media } from "../../theme"

const HomeSectionLargeText = ({ text = "", customStyles = {} }) => {
  return (
    <p
      css={{
        fontSize: "3rem",
        letterSpacing: "-.06em",
        background: "-webkit-linear-gradient(#f2f4f8,#7a80b1)",
        WebkitBackgroundClip: "text!important",
        WebkitTextFillColor: "transparent",
        fontWeight: "700",
        lineHeight: "1.2",
        color: "#f2f4f8",
        [media.size("xsmall")]: {
          fontSize: "23px!important",
        },
        ...customStyles,
      }}
    >
      {text}
    </p>
  )
}

export default HomeSectionLargeText
