import React from "react"
import Flex from "../Flex"
import { media } from "../../theme"

const HomeSquareItemContent = ({ logo, title, text }) => (
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
    {title && (
      <span
        css={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "5px",
          [media.size("xsmall")]: {
            lineHeight: "2.1rem!important",
          },
        }}
      >
        {title}
      </span>
    )}
    {text && (
      <span
        css={{
          lineHeight: "1.20",
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
