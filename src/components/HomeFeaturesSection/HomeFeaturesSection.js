import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "../HomeSquareItem"
import HomeSectionHeader from "../HomeSectionHeader"
import EdgyConfig from "../../../static/portzilla-config.png"
import { media, colors } from "../../theme"

const HomeFeaturesSection = () => {
  return (
    <Flex
      id="features"
      halign="center"
      direction="column"
      css={{
        padding: "2.5rem 1.5rem;",
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
      }}
    >
      <Flex
        className="features__inner"
        direction="column"
        halign="center"
        css={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <HomeSectionHeader
          title="# FEATURES"
          text="Enable Maintenance Mode on any route and ensure your website never goes down"
        />

        <Flex
          className="features__features"
          valign="stretch"
          css={{
            color: "#f2f4f8",
            [media.lessThan("large")]: {
              width: "50px!important",
            },
            [media.lessThan("large")]: {
              width: "100%!important",
            },
            [media.lessThan("medium")]: {
              flexDirection: "column!important",
            },
          }}
        >
          <div
            css={{
              width: "58%",
              [media.lessThan("medium")]: {
                width: "100%!important",
              },
            }}
          >
            <div
              css={{
                width: "100%",
                display: "flex",
              }}
            >
              <div
                css={{
                  width: "100%",
                  [media.lessThan("large")]: {
                    display: "none!important",
                  },
                }}
              >
                <div
                  css={{
                    width: "100%",
                    borderRadius: "4px",
                  }}
                >
                  <HomeSquareItem
                    backgroundColor={colors.greyBlue}
                    icon={<i className="fas fa-3x fa-cogs"></i>}
                    header="Unlimited Configurations"
                    text="Want to enable maintenance on multiple routes? Set up as many as you need."
                  />
                </div>

                <div
                  css={{
                    width: "100%",
                  }}
                >
                  <HomeSquareItem
                    header="Intuitive UI"
                    text="Set up Edgy in a few minutes with our easy to use user interface"
                    backgroundColor={colors.greyBlue}
                  >
                    <img
                      css={{
                        width: "100%",
                        height: "100%",
                        border: "1rem solid black",
                        borderRadius: "1rem",
                      }}
                      src={EdgyConfig}
                      alt="Screenshot small"
                    />
                  </HomeSquareItem>
                </div>
              </div>
              <div
                css={{
                  width: "100%",
                  // height: "100%",
                }}
              >
                <div
                  css={{
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <HomeSquareItem
                    backgroundColor={colors.greyBlue}
                    icon={<i className="fas fa-3x fa-wrench"></i>}
                    header="Maintenance Mode"
                    text="Enable maintenance mode on your entire website or only on select routes automatically after a chosen date or manually when you need it."
                  />
                </div>

                <div
                  css={{
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <HomeSquareItem
                    backgroundColor={colors.greyBlue}
                    icon={<i className="fas fa-3x fa-users-cog"></i>}
                    header="Empower your team"
                    text="Developers need access to a website to fix it.  Bypass maintenance mode with password and IP address-based whitelists to get back online fast."
                  />
                </div>
              </div>
            </div>

            <div
              css={{
                width: "100%",
                // height: "30%",
              }}
            >
              <HomeSquareItem
                backgroundColor={colors.greyBlue}
                icon={<i className="fas fa-3x fa-heartbeat"></i>}
                header="Achieve 100% uptime"
                text="Your visitors will always know you're online"
              />
            </div>
          </div>

          <div
            css={{
              width: "42%",
              [media.lessThan("medium")]: {
                width: "100%!important",
              },
            }}
            className="features__right"
          >
            <div
              css={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div css={{ flex: 1 }}>
                <HomeSquareItem
                  backgroundColor="transparent"
                  icon={<i className="fas fa-3x fa-arrow-up"></i>}
                  header="Always Up Mode"
                  text="Render a page of your choice whenever your website is experiencing unexpected downtime (500-level errors) so visitors know you're still there."
                />
              </div>
              <div css={{ flex: 1 }}>
                <HomeSquareItem
                  backgroundColor="transparent"
                  icon={<i className="fab fa-3x fa-html5"></i>}
                  header="Choose your template"
                  text="Already have a maintenance mode page? Use it with Edgy or choose from a variety templates."
                />
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeFeaturesSection
