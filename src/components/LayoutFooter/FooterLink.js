import { Link } from "gatsby"
import React from "react"
import { colors } from "../../theme"

const FooterLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: 2,
      color: colors.subtle,
      ":hover": {
        color: colors.brand,
      },
    }}
    to={to}
    target={target}
  >
    {children}
  </Link>
)

export default FooterLink
