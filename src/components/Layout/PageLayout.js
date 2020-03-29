import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import { colors } from "../../theme"
import LayoutHeader from "../LayoutHeader/Header"
import LayoutFooter from "../LayoutFooter/Footer"
import PageLayoutCSS from "./PageLayout.scss"

const { Header, Footer, Content } = Layout

const PageLayout = ({ children }) => (
  <Layout
    css={{
      minHeight: "100vh",
      backgroundColor: "#0a0c19",
    }}
  >
    <LayoutHeader />
    <Content>{children}</Content>
    <LayoutFooter />
  </Layout>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
