import React from "react"
import PropTypes from "prop-types"

const ExternalLink = ({ href, children, icon = true, ...props }) => (
  <a {...props} href={href} target="_blank" rel="noopener noreferrer">
    {children}
    {icon && (
      <span style={{ marginLeft: 4 }} className="icon">
        <i className="fa fa-external-link-alt" />
      </span>
    )}
  </a>
)

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
}

export default ExternalLink
