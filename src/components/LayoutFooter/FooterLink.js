import { Link } from "gatsby"
import React from "react"
import { media } from "../../theme"

const FooterLink = ({ children, target, to }) => (
  <Link
    css={{
      color: "#9ea1b8",
      borderBottom: "2px solid transparent",
      marginBottom: "3px",
      ":hover": {
        color: "#fff",
        borderColor: "#fff",
      },
      [media.size("xsmall")]: {
        textAlign: "center!important",
      },
    }}
    to={to}
    target={target}
  >
    {children}
  </Link>
)

export default FooterLink
