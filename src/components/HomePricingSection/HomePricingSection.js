import React, { Fragment } from "react"
import Flex from "../Flex"
import HomePricingTableItem from "./HomePricingTableItem"
import HomeSectionLargeText from "../HomeSectionLargeText"
import HomeSectionHeader from "../HomeSectionHeader"

import { media } from "../../theme"

import { Check, Unchecked } from "../../svg"

const HomePricingSection = () => {
  return (
    <Flex
      id="pricing__section"
      className="pricing__section"
      halign="center"
      direction="column"
      css={{
        padding: "2.5rem 1.5rem",
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
      }}
    >
      <Flex
        className="pricing__section__inner"
        direction="column"
        halign="center"
        css={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <Flex
          className="pricing__section__container"
          halign="center"
          direction="column"
        >
          <Flex
            className="pricing__section__description"
            direction="column"
            css={{
              width: "83.333%",
              [media.size("xsmall")]: {
                width: "100%!important",
              },
            }}
          >
            <HomeSectionHeader text="# PRICING" />
            <HomeSectionLargeText
              text="We will soon offer more features and customization options
              on a monthly subscription plan."
            />
          </Flex>
        </Flex>

        <Flex
          className="pricing__section__table"
          css={{
            color: "#f2f4f8",
            minWidth: "100%",
            marginTop: "20px",
            [media.size("xsmall")]: {
              justifyContent: "center!important",
            },
          }}
        >
          <HomePricingTableItem
            title="Feautres"
            price={
              <span
                css={{
                  opacity: 0,
                }}
              >
                .
              </span>
            }
            contentItems={[
              "Authorized Devices",
              "Listed Jobs",
              "Account Sync",
              "Themes",
              "Scheduled Jobs",
              "Parallel Jobs",
            ]}
            footer={
              <span
                css={{
                  opacity: 0,
                }}
              >
                .
              </span>
            }
            customStyles={{
              width: "33%",
              boxShadow: "0 10px 60px 0 rgba(158,161,184,.4)",
              [media.size("xsmall")]: {
                display: "none!important",
              },
            }}
          />
          <HomePricingTableItem
            title="Free"
            price="-"
            contentItems={[
              3,
              5,
              <img css={{ width: "13px" }} src={Check} />,
              <img css={{ width: "13px" }} src={Check} />,
              <img css={{ width: "13px" }} src={Unchecked} />,
              <img css={{ width: "13px" }} src={Unchecked} />,
            ]}
            footer={
              <span
                css={{
                  opacity: 0,
                }}
              >
                .
              </span>
            }
            customStyles={{
              width: "28%",
              boxShadow: "0 10px 60px 0 rgba(158,161,184,.4)",
              [media.size("xsmall")]: {
                flex: "1!important",
              },
            }}
          />
          <HomePricingTableItem
            title="Basic"
            price={
              <Fragment>
                <span
                  css={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  $
                </span>
                <span
                  css={{
                    color: "#23263c",
                  }}
                >
                  TBA
                </span>
                <span
                  css={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </Fragment>
            }
            contentItems={[
              10,
              25,
              <img css={{ width: "13px" }} src={Check} />,
              <img css={{ width: "13px" }} src={Check} />,
              <img css={{ width: "13px" }} src={Check} />,
              3,
            ]}
            footer={
              <button
                css={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  backgroundColor: "#91939e",
                  borderColor: "transparent",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 0",
                  fontSize: "18px",
                  borderRadius: "5px",
                  outline: "none",
                  transition: "300ms all ease",
                  ":hover": {
                    background: "#d7d6d0",
                    color: "#a5a5a5",
                    cursor: "not-allowed",
                  },
                }}
              >
                Coming soon
              </button>
            }
            customStyles={{
              width: "39%",
              marginTop: "-9px",
              boxShadow: "0 10px 60px 0 rgba(158,161,184,.4)",
              [media.size("xsmall")]: {
                flex: "2!important",
                marginLeft: "5px",
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomePricingSection
