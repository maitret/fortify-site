import React from "react"

const Title = ({ text = "", customStyles = {} }) => (
  <h3
    css={{
      fontSize: "1rem",
      color: "#9ea1b8",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      ...customStyles,
    }}
  >
    {text}
  </h3>
)

export default Title
