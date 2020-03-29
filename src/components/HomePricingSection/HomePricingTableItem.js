import React from "react"
import { css } from "emotion"
import { media } from "../../theme"

const HomePricingTableItem = ({
  title = "",
  price = "",
  footer = "",
  contentItems = [],
  customStyles = {},
}) => {
  console.error(
    customStyles,
    " customStylescustomStylescustomStylescustomStyles"
  )
  return (
    <div
      css={{
        // width: "406px",
        background: "#fff",
        border: ".1rem solid #f5f5f5",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        [media.size("xsmall")]: {
          margin: "0 5px!important",
        },
        ...customStyles,
      }}
    >
      <div
        className="pricing__table__header"
        css={{
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          backgroundColor: "#23263c",
          color: "#4a4a4a",
          fontSize: "1.25rem",
          fontWeight: "600",
          padding: ".75em",
          alignContent: "center",
          textAlign: "center",
          color: "#f2f4f8",
        }}
      >
        <span>{title}</span>
      </div>
      <div
        css={{
          backgroundColor: "#fff",
          color: "#4a4a4a",
          fontSize: ".75rem",
          fontWeight: 400,
          padding: ".75em",
          alignContent: "center",
          textAlign: "center",
        }}
        className="pricing__table__price"
      >
        <span
          css={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {price}
        </span>
      </div>
      <div className="pricing__table__items">
        {contentItems.map(item => (
          <span
            css={{
              display: "block",
              background: "#f2f4f8",
              borderBottom: ".1rem solid #fff",
              padding: ".75em",
              alignContent: "center",
              textAlign: "center",
              fontSize: ".9em",
              color: "#23263c",
            }}
            className="pricing-item"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className="pricing__table__footer"
        css={{
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          padding: ".75em",
          alignContent: "center",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        {footer}
      </div>
    </div>
  )
}

export default HomePricingTableItem
