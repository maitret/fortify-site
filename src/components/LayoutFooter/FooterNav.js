import React from "react"
import { media } from "../../theme"

const FooterNav = ({ children }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: 40,
      marginRight: "2rem",
      [media.size("sidebarFixed")]: {
        paddingTop: 0,
        width: "25%",
      },
      [media.size("xsmall")]: {
        marginRight: "0!important",
        alignItems: "center",
      },
    }}
  >
    <div
      css={{
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  </div>
)

export default FooterNav
