import React from "react"

const HomeSectionHeader = ({ text = "", customStyles = {} }) => {
  return (
    <span
      css={{
        fontSize: "1rem",
        color: "#9ea1b8",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        ...customStyles,
      }}
    >
      {text}
    </span>
  )
}

export default HomeSectionHeader
