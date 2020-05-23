import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { globalWindow } from "../../utils/window"
import { colors, media } from "../../theme"

const HeaderLink = ({ isActive, title, to, isAnchor }) => {
  const [isHome, setIsHome] = useState(false)
  useEffect(() => setIsHome(globalWindow.location.pathname === "/"), [])

  return isAnchor && isHome ? (
    <AnchorLink css={[style, isActive && activeStyle]} href={to}>
      {title}
      {isActive && <span css={activeAfterStyle} />}
    </AnchorLink>
  ) : (
    <Link css={[style, isActive && activeStyle]} to={`/${to}`}>
      {title}
      {isActive && <span css={activeAfterStyle} />}
    </Link>
  )
}

const style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: colors.white,
  transition: "color 0.2s ease-out",
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
  textDecoration: "none",
  fontSize: "17px",

  ":focus": {
    outline: 0,
  },

  ":hover": {
    color: colors.brand,
  },

  [media.size("xsmall")]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between("small", "medium")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan("xlarge")]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,

    ":hover:not(:focus)": {
      color: colors.brand,
    },
  },
  "@media (max-width:980px)": {
    fontSize: "1.6rem",
    paddingRight: "30px",
  },
}

const activeStyle = {
  color: colors.brand,

  [media.greaterThan("small")]: {
    position: "relative",
  },
}

const activeAfterStyle = {
  [media.greaterThan("small")]: {
    position: "absolute",
    bottom: -1,
    height: 4,
    background: colors.brand,
    left: 0,
    right: 0,
    zIndex: 1,
  },
}

export default HeaderLink
