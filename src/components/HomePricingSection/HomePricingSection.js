import React, { useRef, useState } from "react"
import Flex from "../Flex"
import HomePricingTableItem from "./HomePricingTableItem"
import HomeSectionHeader from "../HomeSectionHeader"
import PaymentModal from "../PaymentModal"
import { useDrift } from "../Drift"
import DomainCounter from "./DomainCounter"
import CheckoutSuccessNotification from "./CheckoutSuccessNotification"
import { media, colors, meta } from "../../theme"
import plans from "../../plans"
import { Check } from "../../svg"

const HomePricingSection = () => {
  const [openSidebar] = useDrift()
  const [selectedOption, setSelectedOption] = useState(plans.productConfig[0])

  const [
    showCheckoutSuccessNotification,
    setShowCheckoutSuccessNotification,
  ] = useState(false)
  const paymentModalRef = useRef(null)

  const handlePlanClick = () => {
    paymentModalRef.current &&
      paymentModalRef.current.classList.add("is-active")
  }

  const handleDomainChange = option => {
    setSelectedOption(
      plans.productConfig.find(listed => listed.value === option.value)
    )
  }

  return (
    <>
      {showCheckoutSuccessNotification && (
        <CheckoutSuccessNotification
          visible={showCheckoutSuccessNotification}
        />
      )}

      <PaymentModal
        rootRef={paymentModalRef}
        onCheckoutSuccess={() => {
          setShowCheckoutSuccessNotification(true)
        }}
      />
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
          text={
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>
                Try {meta.app.title} for 14 days free.{" "}
                <a
                  css={{
                    color: colors.cloudflare,
                    WebkitTextFillColor: colors.cloudflare,
                  }}
                  rel="noopener"
                  target="_blank"
                  href={`https://www.cloudflare.com/apps/${meta.app.slug}`}
                >
                  Click here
                </a>{" "}
                to install it. Or, set up a plan below when you're ready.
              </p>
            </div>
          }
        />
        <div css={{ fontSize: "2rem", margin: "2rem 0" }}>
          <DomainCounter
            options={plans.productConfig}
            selectedOption={selectedOption}
            onChange={handleDomainChange}
          />
        </div>

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
            contentItems={[
              "# of Route Configurations",
              "Single Page App support",
              "Proxy any subdomain",
              "Cache proxied requests",
              "HTTP/S support",
              "Websocket support",
            ]}
            footer={<span css={{ opacity: 0 }}>.</span>}
            customStyles={{
              width: "33%",
              boxShadow: "0 10px 60px 0 rgba(158,161,184,.4)",
              [media.size("xsmall")]: {
                width: "50%!important",
              },
            }}
          />
          <HomePricingTableItem
            title="Basic"
            contentItems={[
              "∞",
              <img alt="checkmark" css={{ width: "14px" }} src={Check} />,
              <img alt="checkmark" css={{ width: "14px" }} src={Check} />,
              <img alt="checkmark" css={{ width: "14px" }} src={Check} />,
              <img alt="checkmark" css={{ width: "14px" }} src={Check} />,
              "❌",
            ]}
            footer={
              <button
                onClick={
                  selectedOption.value === "0" ? openSidebar : handlePlanClick
                }
                css={{
                  transition: "all 0.75s",
                  border: "1px solid black",
                }}
                className="button  is-fullwidth is-primary"
              >
                {selectedOption.value === "0"
                  ? "Contact us to get started"
                  : `Get started @ ${selectedOption.price} / mo`}
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
