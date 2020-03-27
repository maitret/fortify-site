import React from "react"
import Flex from "../Flex"

const HomeSquareItemContent = ({ logo, title, text }) => {
  return (
    <Flex
      direction="column"
      css={{
        padding: "1.5rem 1rem",
      }}
    >
      {logo && (
        <img
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
          }}
        >
          {text}
        </span>
      )}
    </Flex>
  )
}

export default HomeSquareItemContent
