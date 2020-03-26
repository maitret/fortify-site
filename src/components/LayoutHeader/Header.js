import HeaderLink from "./HeaderLink"
import { Link } from "gatsby"
import React from "react"
import { colors, media } from "../../theme"
import DocSearch from "./DocSearch"
import { useDrift } from "../Drift"
import navHeader from "../../../content/headerNav.yml"
import logoPng from "../../../static/icon.png"

const Header = ({ location }) => {
  const [, openSidebar] = useDrift()

  return (
    <header
      css={{
        backgroundColor: colors.black,
        color: colors.darker,
        position: "fixed",
        zIndex: 1,
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        padding: "0 30px",
        "@media print": {
          display: "none",
        },
      }}
    >
      <div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 60,
            [media.lessThan("xsmall")]: {
              height: 50,
            },
          }}
        >
          <Link
            css={{
              display: "flex",
              marginRight: 10,
              height: "100%",
              alignItems: "center",
              color: colors.brand,
              fontFamily: `"Righteous", -apple-system, BlinkMacSystemFont, "Segoe UI"`,
              textTransform: "uppercase",
              padding: "0.5rem 0.75rem",
              ":focus": {
                outline: 0,
              },

              [media.lessThan("small")]: {
                flex: "0 0 auto",
              },
              ":hover": {
                color: colors.brand,
              },
            }}
            to="/"
          >
            <img alt="logo" src={logoPng} style={{ width: 50 }} />
            <span
              css={{
                color: "inherit",
                marginLeft: 10,
                fontSize: "1.8rem",
                [media.lessThan("large")]: {
                  marginTop: 1,
                },
                [media.lessThan("small")]: {
                  // Visually hidden
                  position: "absolute",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  width: 1,
                  margin: -1,
                  padding: 0,
                  border: 0,
                },
              }}
            >
              Static.site
            </span>
          </Link>

          <nav
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              overflowX: "auto",
              overflowY: "hidden",
              WebkitOverflowScrolling: "touch",
              height: "100%",

              // Hide horizontal scrollbar
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },

              [media.size("xsmall")]: {
                flexGrow: "1",
                width: "auto",
              },
              [media.greaterThan("xlarge")]: {
                width: null,
              },
              [media.lessThan("small")]: {
                maskImage:
                  "linear-gradient(to right, transparent, black 20px, black 90%, transparent)",
              },
            }}
          >
            <HeaderLink title="Features" to="#" />
            <HeaderLink title="Download" to="#" />
            <HeaderLink title="Resources" to="#" />
            <HeaderLink title="Pricing" to="#" />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
