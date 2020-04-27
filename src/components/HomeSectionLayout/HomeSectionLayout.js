import React from "react"

const HomeSectionLayout = ({ children }) => (
  <div
    className="home__section__layout"
    css={{
      padding: "6.5rem 0;",
      "&:last-child": {
        paddingBottom: 0,
      },
    }}
  >
    {children}
  </div>
)

export default HomeSectionLayout
