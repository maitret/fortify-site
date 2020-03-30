import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "../HomeSquareItem"
import HomeSectionHeader from "../HomeSectionHeader"
import HomeSectionLargeText from "../HomeSectionLargeText"

import { media, colors } from "../../theme"

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
              [media.lessThan("medium")]: {
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
            [media.lessThan("medium")]: {
              flexDirection: "column!important",
              width: "100%",
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
              <HomeSquareItem
                backgroundColor={colors.greyBlue}
                logo={Question}
                text="Frequently Asked Questions"
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
                logo={Medium}
                text="Explore our blog articles for news and usage tips."
              />
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
                  title={<img src={Exit} alt="exit" />}
                  link="https://www.google.com"
                  logo={Book}
                  header="Docs"
                  text="Check our documentation to get all your devices up and running in a matter of minutes."
                />
              </Flex>
              <Flex
                css={{
                  flex: 1,
                }}
              >
                <HomeSquareItem
                  backgroundColor={colors.greyBlue}
                  title={<img src={Exit} alt="exit" />}
                  link="https://www.google.com"
                  logo={Github}
                  header="Contribute"
                  text="Help us improving Networkchip by submitting bugs and feature requests on GitHub."
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeResourcesSection
