import React, { Fragment } from "react"

const HomeSectionLayout = ({ children }) => {
  return (
    <div
      className="home__section__layout"
      css={{
        padding: "6.5rem 1.5rem;",
      }}
    >
      {children}
    </div>
  )
}

export default HomeSectionLayout
