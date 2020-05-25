import React from "react"
import PropTypes from "prop-types"
import { colors } from "../../theme"
import LayoutHeader from "../LayoutHeader/Header"
import LayoutFooter from "../LayoutFooter/Footer"

import "./PageLayout.scss"

const PageLayout = ({ children }) => (
  <div
    css={{
      minHeight: "100vh",
      backgroundColor: colors.black,
    }}
  >
    <LayoutHeader />
    {children}
    <LayoutFooter />
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
