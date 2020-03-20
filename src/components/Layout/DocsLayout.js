import patchDOMForGoogleTranslate from "../../utils/patchDOMForGoogleTranslate"
import React, { Component } from "react"
import Flex from "../Flex"
import Footer from "../LayoutFooter"
import Header from "../LayoutHeader"
import { media } from "../../theme"

patchDOMForGoogleTranslate()

class Template extends Component {
  render() {
    const { children, location } = this.props

    let layoutHasSidebar = false
    if (location && location.pathname.match(/^\/(docs|blog)/)) {
      layoutHasSidebar = true
    }

    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 40px)",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol"`,
        }}
      >
        <Header location={location} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: "1 0 auto",
            marginTop: 60,
            [media.between("medium", "large")]: {
              marginTop: 50,
            },
            [media.lessThan("medium")]: {
              marginTop: 40,
            },
          }}
        >
          {children}
        </Flex>
        <Footer layoutHasSidebar={layoutHasSidebar} />
      </div>
    )
  }
}

export default Template
