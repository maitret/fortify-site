import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "./HomeSquareItem"
import HomeSquareItemContent from "./HomeSquareItemContent"
import HomeSectionHeader from "../HomeSectionHeader"
import HomeSectionLargeText from "../HomeSectionLargeText"

import { media } from "../../theme"

import ScreenShotSmall from "../../images/screenshot-small.png"
import { Question, Medium, Book, Github, Exit } from "../../svg"

const HomeResourcesSection = () => {
  return (
    <Flex
      id="resources__section"
      className="resources__section"
      halign="center"
      direction="column"
      css={{
        padding: "6.5rem 1.5rem;",
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
      }}
    >
      <Flex
        className="resources__section__inner"
        direction="column"
        halign="center"
        css={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <Flex
          className="resources__section__container"
          halign="center"
          direction="column"
        >
          <Flex
            className="resources__section__description"
            direction="column"
            css={{
              width: "83.333%",
              [media.size("xsmall")]: {
                width: "100%!important",
              },
            }}
          >
            <HomeSectionHeader text="# RESOURCES" />
            <HomeSectionLargeText text="Browse our resources to get started with Networkchimp." />
          </Flex>
        </Flex>

        <Flex
          className="resources__section__resources"
          valign="stretch"
          css={{
            color: "#f2f4f8",
            alignItems: "stretch",
            [media.size("xsmall")]: {
              flexDirection: "column!important",
            },
          }}
        >
          <div
            className="resources__section__resources__left"
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
              <HomeSquareItem backgroundColor="#23263c">
                <Flex valign="center">
                  <HomeSquareItemContent
                    logo={Question}
                    text="Frequently Asked Questions"
                  />
                </Flex>
              </HomeSquareItem>
            </Flex>

            <Flex
              css={{
                width: "100%",
                height: "30%",
              }}
            >
              <HomeSquareItem backgroundColor="#23263c">
                <Flex valign="center">
                  <HomeSquareItemContent
                    logo={Medium}
                    text="Explore our blog articles for news and usage tips."
                  />
                </Flex>
              </HomeSquareItem>
            </Flex>
          </div>

          <Flex
            className="resources__section__resources__right"
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
                [media.size("xsmall")]: {
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
                  title="BASIC"
                  backgroundColor="#23263c"
                  title={<img src={Exit} alt="exit" />}
                  link="https://www.google.com"
                >
                  <Flex valign="center">
                    <HomeSquareItemContent
                      logo={Book}
                      title="Docs"
                      text="Check our documentation to get all your devices up and running in a matter of minutes."
                    />
                  </Flex>
                </HomeSquareItem>
              </Flex>
              <Flex
                css={{
                  flex: 1,
                }}
              >
                <HomeSquareItem
                  title="BASIC"
                  backgroundColor="#23263c"
                  title={<img src={Exit} alt="exit" />}
                  link="https://www.google.com"
                >
                  <Flex valign="center">
                    <HomeSquareItemContent
                      logo={Github}
                      title="Contribute"
                      text="Help us improving Networkchip by submitting bugs and feature requests on GitHub."
                    />
                  </Flex>
                </HomeSquareItem>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeResourcesSection
