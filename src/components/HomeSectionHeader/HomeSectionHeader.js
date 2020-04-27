import React from "react"
import Title from "./Title"
import Flex from "../Flex"
import LargeText from "./LargeText"
import { media } from "../../theme"

const HomeSectionHeader = ({ title, text }) => (
  <Flex halign="center" direction="column">
    <Flex
      direction="column"
      css={{
        width: "83.333%",
        marginBottom: "2rem",
        [media.lessThan("medium")]: {
          width: "100%!important",
        },
      }}
    >
      <Title text={title} />
      <LargeText text={text} />
    </Flex>
  </Flex>
)

export default HomeSectionHeader
