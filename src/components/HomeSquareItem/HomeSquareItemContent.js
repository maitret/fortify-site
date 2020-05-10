import React, { cloneElement } from "react"
import Flex from "../Flex"
import { media } from "../../theme"

const HomeSquareItemContent = ({ logo, icon, title, text }) => (
  <Flex
    direction="column"
    css={{
      padding: "1.5rem 1rem",
    }}
  >
    {logo && (
      <img
        alt="home square item"
        css={{
          width: "3rem",
          marginBottom: "15px",
        }}
        src={logo}
      />
    )}
    {icon &&
      cloneElement(icon, {
        style: {
          marginBottom: "1rem",
          color: "white",
        },
      })}
    {title && (
      <span
        css={{
          lineHeight: "2rem",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </span>
    )}
    {text && (
      <span
        css={{
          lineHeight: "1.2rem",
          color: "#9ea1b8",
          fontSize: "1.125rem",
          maxWidth: "300px",
          [media.size("xsmall")]: {
            marginTop: "15px!important",
          },
        }}
      >
        {text}
      </span>
    )}
  </Flex>
)

export default HomeSquareItemContent
