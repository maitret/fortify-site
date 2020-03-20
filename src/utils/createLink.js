import { Link } from "gatsby"
import React from "react"
import slugify from "./slugify"
import { colors, media } from "../theme"

const createLinkBlog = ({ isActive, item, section }) => {
  return (
    <Link css={[linkCss, isActive && activeLinkCss]} to={item.id}>
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  )
}

const createLinkDocs = ({ isActive, item, section }) => {
  return (
    <Link
      css={[linkCss, isActive && activeLinkCss]}
      to={slugify(item.id, section.directory)}
    >
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  )
}

const activeLinkCss = {
  fontWeight: 700,
}

const activeLinkBefore = {
  width: 4,
  height: 25,
  borderLeft: `4px solid ${colors.brand}`,
  paddingLeft: 16,
  position: "absolute",
  left: 0,
  marginTop: -3,

  [media.greaterThan("largerSidebar")]: {
    left: 15,
  },
}

const linkCss = {
  color: colors.text,
  display: "inline-block",
  borderBottom: "1px solid transparent",
  transition: "border 0.2s ease",
  marginTop: 5,

  "&:hover": {
    color: colors.subtle,
  },
}

export { createLinkBlog, createLinkDocs }
