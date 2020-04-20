import React, { Fragment } from "react"
import Flex from "../Flex"
import HomePricingTableItem from "./HomePricingTableItem"
import HomeSectionLargeText from "../HomeSectionLargeText"
import HomeSectionHeader from "../HomeSectionHeader"

import { media, colors } from "../../theme"

import { Check, Unchecked } from "../../svg"

const HomePricingSection = () => {
  return (
    <Flex
      id="pricing"
      className="pricing"
      halign="center"
      direction="column"
      css={{
        padding: "2.5rem 1.5rem",
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
      }}
    >
      <Flex
        className="pricing__inner"
        direction="column"
        halign="center"
        css={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <Flex className="pricing__container" halign="center" direction="column">
          <Flex
            className="pricing__description"
            direction="column"
            css={{
              width: "83.333%",
              [media.lessThan("medium")]: {
                width: "100%",
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
          className="pricing__table"
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
                width: "45%!important",
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
                width: "30%!important",
                margin: "0 5px",
              },
            }}
          />
          <HomePricingTableItem
            title="Basic"
            price={
              <Flex
                halign="center"
                valign="center"
                css={{
                  [media.size("xsmall")]: {
                    textAlign: "center",
                    flexDirection: "column!important",
                    alignItems: "center!important",
                    lineHeight: "23.1px",
                  },
                }}
              >
                <Flex>
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
                      color: colors.greyBlue,
                    }}
                  >
                    TBA
                  </span>
                </Flex>
                <span
                  css={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </Flex>
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
                  [media.size("xsmall")]: {
                    fontSize: "14px",
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
                width: "30%!important",
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomePricingSection
