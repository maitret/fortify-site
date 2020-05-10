import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "../HomeSquareItem"
import HomeSectionHeader from "../HomeSectionHeader"
import PortzillaConfig from "../../../static/portzilla-config.png"
import { media, colors, meta } from "../../theme"

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
          text="Seamlessly move HTTP traffic from one place to another in a feature-rich, easy to use interface"
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
                    text="Want to proxy multiple ports on the same domain? Configure as many as you need."
                  />
                </div>

                <div
                  css={{
                    width: "100%",
                  }}
                >
                  <HomeSquareItem
                    header="Intuitive UI"
                    text="Set up Portzilla in a few minutes with our easy to use user interface"
                    backgroundColor={colors.greyBlue}
                  >
                    <img
                      css={{
                        width: "100%",
                        height: "100%",
                        border: "1rem solid black",
                        borderRadius: "1rem",
                      }}
                      src={PortzillaConfig}
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
                    icon={<i className="fas fa-3x fa-pencil-alt"></i>}
                    header="Custom request headers"
                    text="Append any number of custom request headers to proxied requests"
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
                    icon={<i className="fas fa-3x fa-bug"></i>}
                    header="Custom error pages"
                    text="Set up custom error pages for services that aren't responding or use our default error page"
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
                icon={<i className="fab fa-3x fa-react"></i>}
                header="Single Page App Mode"
                text="Using a modern Javascript frontend like React or VueJS?  Proxy it with Portzilla in a few clicks"
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
                  icon={<i className="fas fa-3x fa-broadcast-tower"></i>}
                  header="Proxy anywhere"
                  text="Want to proxy a port unsupported by Cloudflare? Use Portzilla to proxy any port on your domain."
                />
              </div>
              <div css={{ flex: 1 }}>
                <HomeSquareItem
                  backgroundColor="transparent"
                  icon={<i className="fas fa-3x fa-globe"></i>}
                  header="Proxy any way"
                  text="Portzilla proxies any subdomain or subpath on your domain"
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
