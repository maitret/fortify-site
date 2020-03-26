import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import { colors } from "../../theme"
import LayoutHeader from "../LayoutHeader/Header"
import PageLayoutCSS from "./PageLayout.scss"

const { Header, Footer, Content } = Layout

const PageLayout = ({ children }) => (
  <Layout
    css={{
      minHeight: "100vh",
      backgroundColor: colors.black,
    }}
  >
    <LayoutHeader />
    <Content>{children}</Content>
    <Footer>Footer goes here</Footer>
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
