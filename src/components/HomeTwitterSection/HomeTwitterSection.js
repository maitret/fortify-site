import React from "react"
import Flex from "../Flex"
import TweetEmbed from "react-tweet-embed"

import { media } from "../../theme"

const EmbedContainer = ({ ids }) => {
  return (
    <Flex
      halign="center"
      css={{
        flexWrap: "wrap",
        width: "50%",
        [media.size("xsmall")]: {
          width: "100%!important",
        },
      }}
    >
      {ids.map(id => (
        <Flex
          halign="center"
          key={id.toString()}
          css={{
            margin: "5px",
            width: "100%",
          }}
        >
          <TweetEmbed
            id={id}
            options={{
              tweetLimit: "10",
              width: "100%",
              height: "100%",
            }}
          />
        </Flex>
      ))}
    </Flex>
  )
}

const HomeTwitterSection = () => {
  return (
    <Flex
      halign="center"
      css={{
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
        padding: "6.5rem 1.5rem",
        flexWrap: "wrap",
        [media.size("xsmall")]: {
          flexDirection: "column!important",
        },
      }}
    >
      <EmbedContainer
        ids={[
          "1244660209118822401",
          "1244660209118822401",
          "1244660209118822401",
        ]}
      />
      <EmbedContainer
        ids={[
          "1244660209118822401",
          "1244660209118822401",
          "1244660209118822401",
        ]}
      />
    </Flex>
  )
}

export default HomeTwitterSection
