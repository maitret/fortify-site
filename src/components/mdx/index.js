/* eslint-disable */

import React from "react"

const makeId = children =>
  children
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()

export default {
  h1: props => <h1 id={makeId(props.children)} {...props} />,
  h2: props => <h2 id={makeId(props.children)} {...props} />,
  h3: props => <h3 id={makeId(props.children)} {...props} />,
  h4: props => <h4 id={makeId(props.children)} {...props} />,
  h5: props => <h5 id={makeId(props.children)} {...props} />,
  h6: props => <h6 id={makeId(props.children)} {...props} />,
}
