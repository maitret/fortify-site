import React from "react"
import { media } from "../../theme"

const LargeText = ({ elementName = "h4", text = "", customStyles = {} }) => {
  const css = {
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
  }

  switch (elementName) {
    case "h1":
      return <h1 css={css}>{text}</h1>
    case "h2":
      return <h2 css={css}>{text}</h2>
    case "h3":
      return <h3 css={css}>{text}</h3>
    default:
      return <h4 css={css}>{text}</h4>
  }
}

export default LargeText
