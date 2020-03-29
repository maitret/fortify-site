import React, { Fragment } from "react"
import Flex from "../Flex"
import { media } from "../../theme"

const Content = ({ title, backgroundColor, children }) => {
  return (
    <Flex
      css={{
        width: "100%",
        height: "100%",
        padding: ".75rem",
        alignItems: "stretch",
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 1,
        minHeight: "min-content",
        [media.size("xsmall")]: {
          paddingLeft: "0!important",
          paddingRight: "0!important",
        },
      }}
    >
      <Flex
        direction="column"
        valign="center"
        css={{
          width: "100%",
          height: "100%",
          background: "transparent",
          background: backgroundColor,
          border: "1px solid #313131",
          borderRadius: "inherit",
          transition: "300ms all ease",
          borderRadius: "4px",
          padding: "13px 20px",
          position: "relative",
          ":hover": {
            borderColor: "#f2f4f8",
            boxShadow: " 0 15px 90px 0 rgba(35, 38, 60, .75)",
          },
        }}
      >
        {children}

        {title && (
          <span
            css={{
              color: "#363636",
              fontSize: "1rem",
              position: "absolute",
              padding: "5px 15px",
              background: "#f2f4f8",
              fontWeight: "bold",
              right: 0,
              top: 0,
              borderBottomLeftRadius: "20px",
            }}
          >
            {title}
          </span>
        )}
      </Flex>
    </Flex>
  )
}

const HomeSquareItem = ({ children, backgroundColor, title, link = null }) => {
  return (
    <Fragment>
      {link ? (
        <a
          css={{
            display: "flex",
            width: "100%",
            height: "100%",
            color: "inherit!important",
          }}
          target="_blank"
          href={link}
        >
          <Content backgroundColor={backgroundColor} title={title}>
            {children}
          </Content>
        </a>
      ) : (
        <Content backgroundColor={backgroundColor} title={title}>
          {children}
        </Content>
      )}
    </Fragment>
  )
}

export default HomeSquareItem
