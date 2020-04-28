import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "../HomeSquareItem"
import HomeSectionHeader from "../HomeSectionHeader"
import ResourcesMailingList from "./ResourcesMailingList"
import ResourcesFollowTwitter from "./ResourcesFollowTwitter"

import { meta, media, colors } from "../../theme"

import { Question, MachineLearning, Book, Github } from "../../svg"

const HomeResourcesSection = () => (
  <Flex
    id="resources"
    halign="center"
    direction="column"
    css={{
      padding: "6.5rem 1.5rem;",
      backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
    }}
  >
    <Flex
      className="resources__inner"
      direction="column"
      halign="stretch"
      css={{
        maxWidth: "1152px",
        margin: "0 auto",
      }}
    >
      <HomeSectionHeader
        title="# RESOURCES"
        text={`Browse our resources to get started with ${meta.app.title}.`}
      />

      <Flex
        className="resources__resources"
        valign="stretch"
        css={{
          color: "#f2f4f8",
          alignItems: "stretch",
          [media.lessThan("medium")]: {
            flexDirection: "column!important",
            width: "100%",
          },
        }}
      >
        <div
          className="resources__resources__left"
          css={{
            flex: 1,
            height: "100%",
          }}
        >
          <Flex
            css={{
              width: "100%",
            }}
          >
            <HomeSquareItem
              backgroundColor={colors.greyBlue}
              logo={Question}
              header="FAQ"
              text="Have a question? We may already have an answer."
            />
          </Flex>

          <Flex
            css={{
              width: "100%",
              height: "30%",
            }}
          >
            <HomeSquareItem
              backgroundColor={colors.greyBlue}
              logo={MachineLearning}
              header="Learn"
              text="Explore our tutorials and demos for detailed walkthroughs."
            />
          </Flex>
        </div>

        <Flex
          className="resources__resources__right"
          valign="stretch"
          css={{
            flex: "2!important",
          }}
        >
          <Flex
            valign="stretch"
            css={{
              width: "100%",
              height: "100%",
              [media.lessThan("medium")]: {
                flexDirection: "column!important",
              },
            }}
          >
            <Flex
              css={{
                flex: 1,
              }}
            >
              <HomeSquareItem
                backgroundColor={colors.greyBlue}
                link="https://www.google.com"
                logo={Book}
                header="Docs"
                text={`Check our documentation for detailed information about ${meta.app.title}.`}
              />
            </Flex>
            <Flex
              css={{
                flex: 1,
              }}
            >
              <HomeSquareItem
                backgroundColor={colors.greyBlue}
                link="https://www.google.com"
                logo={Github}
                header="Contribute"
                text={`Help us improve ${meta.app.title} by submitting bugs and feature requests on GitHub.`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="resources__resources__bottom"
        valign="stretch"
        halign="stretch"
        css={{
          [media.lessThan("medium")]: {
            flexDirection: "column !important",
          },
        }}
      >
        <ResourcesMailingList />
        <ResourcesFollowTwitter />
      </Flex>
    </Flex>
  </Flex>
)

export default HomeResourcesSection
