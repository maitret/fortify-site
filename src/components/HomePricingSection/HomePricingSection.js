import React, { useRef } from "react"
import Flex from "../Flex"
import HomePricingTableItem from "./HomePricingTableItem"
import HomeSectionHeader from "../HomeSectionHeader"
import PaymentModal from "../PaymentModal"
import { media, colors, meta } from "../../theme"
import { Check } from "../../svg"

const HomePricingSection = () => {
  const paymentModalRef = useRef(null)

  const handlePlanClick = () => {
    paymentModalRef.current &&
      paymentModalRef.current.classList.add("is-active")
  }

  return (
    <>
      <PaymentModal rootRef={paymentModalRef} />
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
        <HomeSectionHeader
          title="# PRICING"
          text="We will soon offer more features and customization options
              on a monthly subscription plan."
        />

        <Flex
          className="pricing__table"
          css={{
            color: "#f2f4f8",
            minWidth: "100%",
            marginTop: "20px",
            justifyContent: "center!important",
            [media.size("xsmall")]: {
              justifyContent: "center!important",
            },
          }}
        >
          <HomePricingTableItem
            title="Features"
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
                width: "50%!important",
              },
            }}
          />
          {/* <HomePricingTableItem
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
          /> */}
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
                <Flex halign="center" valign="center">
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
                      marginRight: 8,
                    }}
                  >
                    {meta.app.pricePerDomain}
                  </span>
                </Flex>
                <span
                  css={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  / domain / month
                </span>
              </Flex>
            }
            contentItems={[
              10,
              25,
              <img alt="checkmark" css={{ width: "13px" }} src={Check} />,
              <img alt="checkmark" css={{ width: "13px" }} src={Check} />,
              <img alt="checkmark" css={{ width: "13px" }} src={Check} />,
              3,
            ]}
            footer={
              <button
                onClick={handlePlanClick}
                css={{
                  transition: "all 0.75s",
                  border: "1px solid black",
                }}
                className="button  is-fullwidth is-primary"
                // css={{
                //   display: "flex",
                //   justifyContent: "center",
                //   width: "100%",
                //   backgroundColor: "#91939e",
                //   borderColor: "transparent",
                //   color: "#fff",
                //   fontWeight: "bold",
                //   padding: "5px 0",
                //   fontSize: "18px",
                //   borderRadius: "5px",
                //   outline: "none",
                //   transition: "300ms all ease",
                //   ":hover": {
                //     background: colors.brand,
                //     color: "white",
                //     cursor: "pointer",
                //   },
                //   [media.size("xsmall")]: {
                //     fontSize: "14px",
                //   },
                // }}
              >
                Get Started
              </button>
            }
            customStyles={{
              width: "39%",
              marginTop: "-9px",
              boxShadow: "0 10px 60px 0 rgba(158,161,184,.4)",
              [media.size("xsmall")]: {
                width: "50%!important",
                margin: "0 5px",
              },
            }}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default HomePricingSection
