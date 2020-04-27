import React from "react"
import Flex from "../Flex"
import { media } from "../../theme"
import HomeSquareItemContent from "./HomeSquareItemContent"

import "./HomeSquareItem.css"

const Content = ({
  title,
  backgroundColor = "transparent",
  flippedContent,
  children,
}) => {
  return (
    <div
      css={{
        width: "100%",
        padding: "5px",
      }}
    >
      <Flex
        css={{
          width: "100%",
          height: "100%",

          alignItems: "stretch",
          flexBasis: 0,
          flexGrow: 1,
          flexShrink: 1,
          position: "relative!important",
          minHeight: "min-content",
          [media.size("xsmall")]: {
            paddingLeft: "0!important",
            paddingRight: "0!important",
          },
          ":hover": {
            ".card__face": {
              WebkitTransform: flippedContent ? "rotateY(-180deg)" : "initial",
              transform: flippedContent ? "rotateY(-180deg)" : "initial",
            },
            ".card__back": {
              WebkitTransform: flippedContent ? "rotateY(0)" : "initial",
              transform: flippedContent ? "rotateY(0)" : "initial",
              background: "blue",
            },
          },
          ".card": {
            WebkitTransition: "all 0.8s ease",
            transition: "all 0.8s ease",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          },
        }}
      >
        <Flex
          className="card card__face"
          direction="column"
          valign="center"
          css={{
            width: "100%",
            height: "100%",
            background: backgroundColor,
            border: "1px solid #313131",
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

        {flippedContent && (
          <div
            css={{
              WebkitTransform: "rotateY(180deg)",
              transform: "rotateY(180deg)",
              width: "100%",
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              top: 0,
              borderRadius: "4px",
              padding: "10px",
            }}
            className="card card__back"
          >
            {flippedContent}
          </div>
        )}
      </Flex>
    </div>
  )
}

const HomeSquareItem = ({
  children,
  backgroundColor,
  title,
  logo,
  header,
  text,
  link = null,
  flippedContent,
}) => {
  const content = (
    <Content
      flippedContent={flippedContent}
      backgroundColor={backgroundColor}
      title={title}
    >
      {children ? (
        children
      ) : (
        <Flex valign="center">
          <HomeSquareItemContent title={header} text={text} logo={logo} />
        </Flex>
      )}
    </Content>
  )

  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      {link ? (
        <a
          css={{
            display: "flex",
            width: "100%",
            height: "100%",
            color: "inherit!important",
          }}
          target="_blank"
          rel="noopener"
          href={link}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}

export default HomeSquareItem
