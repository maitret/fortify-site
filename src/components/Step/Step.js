import React from "react"
import PropTypes from "prop-types"

import "./Step.scss"

const Step = ({ number }) => (
  <div className="step">
    <div className="circle">
      <span className="title">{number}</span>
    </div>
  </div>
)

Step.propTypes = {
  number: PropTypes.number,
}

export default Step
