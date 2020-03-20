import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import { colors } from "../../theme"

const { Header, Footer, Content } = Layout

const PageLayout = ({ children }) => (
  <Layout
    css={{
      minHeight: "100vh",
      backgroundColor: colors.black,
    }}
  >
    <Header>Navbar goes here</Header>
    <Content>{children}</Content>
    <Footer>Footer goes here</Footer>
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
