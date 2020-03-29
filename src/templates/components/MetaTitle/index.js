import React from "react"
import { colors, media } from "../../../theme"

const MetaTitle = ({ children, title, cssProps = {}, onDark = false }) => (
  <div
    css={{
      color: onDark ? "#f2f4f8" : colors.subtle,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: 3,
      textTransform: "uppercase",
      textAlign: "start",
      letterSpacing: "0.08em",
      [media.size("xsmall")]: {
        textAlign: "center!important",
      },
      ...cssProps,
    }}
  >
    {children}
  </div>
)

export default MetaTitle
