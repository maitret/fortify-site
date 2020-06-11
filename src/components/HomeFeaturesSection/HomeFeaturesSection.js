import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "../HomeSquareItem"
import HomeSectionHeader from "../HomeSectionHeader"
import FortifyConfig from "../../../static/portzilla-config.png"
import { media, colors } from "../../theme"

const HomeFeaturesSection = () => {
  return (
    <Flex
      id="features"
      halign="center"
      direction="column"
      css={{
        padding: "2.5rem 1.5rem",
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
          text="Fine-grain HTTP header controls packed into powerful, route-based configurations"
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
                    text="Want to add headers on several different routes? Set up as many as you need"
                  />
                </div>

                <div
                  css={{
                    width: "100%",
                  }}
                >
                  <HomeSquareItem
                    header="Intuitive UI"
                    text="Set up Fortify in a few minutes with our easy to use user interface"
                    backgroundColor={colors.greyBlue}
                  >
                    <img
                      css={{
                        width: "100%",
                        height: "100%",
                        border: "1rem solid black",
                        borderRadius: "1rem",
                      }}
                      src={FortifyConfig}
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
                    icon={<i className="fas fa-3x fa-road"></i>}
                    header="Route-based Configurations"
                    text="Add headers to all incoming traffic or specify individual or glob-based routes"
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
                    icon={<i className="fas fa-3x fa-people-arrows"></i>}
                    header="Inheritance-based Configurations"
                    text="Create powerful parent-child inheritance patterns where child routes inherit headers from parent routes"
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
                icon={<i className="fas fa-3x fa-asterisk"></i>}
                header="Powerful glob matching"
                text={
                  <>
                    Use powerful glob patterns like{" "}
                    <em>*.yoursite.com/blog/*</em> to add headers on any
                    matching traffic.
                  </>
                }
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
                  icon={<i className="fas fa-3x fa-shield-alt"></i>}
                  header="Managed Security Headers"
                  text={
                    <div>
                      Fortify your site with one-click configurable security
                      headers:
                      <ul css={{ marginTop: "0.5rem" }}>
                        {[
                          "Content Security Policy",
                          "HTTP Strict Transport Security",
                          "Referrer Policy",
                          "XSS Protection",
                          "MIME type sniffing",
                          "Browser caching",
                          "Site embeddability",
                          "DNS prefetching",
                          "Fingerprinting",
                        ].map(text => (
                          <li
                            css={{
                              listStyleType: "square",
                              marginLeft: "2.2rem",
                              marginBottom: "0.2rem",
                            }}
                            key={text}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </div>
              <div css={{ flex: 1 }}>
                <HomeSquareItem
                  backgroundColor="transparent"
                  icon={<i className="fas fa-3x fa-id-badge"></i>}
                  header="Enforce HTTPS"
                  text="Redirect insecure HTTP requests to HTTPS and forbid insecure POST data in one click"
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
