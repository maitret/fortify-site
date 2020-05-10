import React from "react"
import Dropdown from "react-dropdown"
import { media } from "../../theme"

import "./DomainCounter.scss"

const DomainCounter = ({ onChange, selectedOption, options }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <p
      css={{
        [media.size("xsmall")]: {
          fontSize: "18px!important",
        },
      }}
    >
      How many domains do you want to enroll?
    </p>

    <Dropdown
      className="domainDropdown"
      onChange={onChange}
      value={selectedOption.value}
      options={options}
    />
  </div>
)

export default DomainCounter
