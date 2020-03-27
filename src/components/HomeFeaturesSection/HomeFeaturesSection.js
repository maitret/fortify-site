import React from "react"
import Flex from "../Flex"
import HomeSquareItem from "./HomeSquareItem"
import HomeSquareItemContent from "./HomeSquareItemContent"
import ScreenShotSmall from "../../images/screenshot-small.png"
import {
  Themes,
  SmallLogo,
  ComputerLogo,
  ReverseTime,
  Time,
  Menu,
} from "../../svg"

const HomeFeaturesSection = () => {
  return (
    <Flex
      id="features__section"
      className="features__section"
      halign="center"
      direction="column"
      css={{
        padding: "9rem 1.5rem;",
        backgroundImage: "linear-gradient(180deg, transparent,#0b0d1b)",
      }}
    >
      <Flex
        className="features__section__inner"
        direction="column"
        halign="center"
        css={{
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        <Flex
          className="features__section__container"
          halign="center"
          direction="column"
        >
          <Flex
            className="features__section__description"
            direction="column"
            css={{
              width: "83.333%",
            }}
          >
            <span
              css={{
                fontSize: "1rem",
                color: "#9ea1b8",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              # FEATURES
            </span>
            <p
              css={{
                fontSize: "3rem",
                letterSpacing: "-.06em",
                background: "-webkit-linear-gradient(#f2f4f8,#7a80b1)",
                WebkitBackgroundClip: "text!important",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              Runlet is a cloud-based job manager that offers device
              synchronization and reliable message delivery in a network of
              connected devices even after connectivity issues.
            </p>
          </Flex>
        </Flex>

        <Flex
          className="features__section__features"
          css={{
            color: "#f2f4f8",
            height: "840px",
          }}
        >
          <div
            css={{
              width: "58%",
              height: "100%",
            }}
          >
            <div
              css={{
                width: "100%",
                height: "70%",
                display: "flex",
              }}
            >
              <div
                css={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  css={{
                    width: "100%",
                    borderRadius: "4px",
                  }}
                >
                  <HomeSquareItem backgroundColor="#23263c">
                    <Flex valign="center">
                      <img
                        css={{
                          width: "18px",
                          marginRight: "10px",
                        }}
                        src={SmallLogo}
                      />
                      <span
                        css={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#9ea1b8",
                        }}
                      >
                        Compact mode
                      </span>
                    </Flex>
                  </HomeSquareItem>
                </div>

                <div
                  css={{
                    width: "100%",
                  }}
                >
                  <HomeSquareItem backgroundColor="#23263c">
                    <img
                      css={{
                        width: "100%",
                      }}
                      src={ScreenShotSmall}
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
                  <HomeSquareItem backgroundColor="#23263c">
                    <Flex valign="center">
                      <HomeSquareItemContent
                        logo={ComputerLogo}
                        title="Device sync"
                        text="View and execute jobs from any authorized devices."
                      />
                    </Flex>
                  </HomeSquareItem>
                </div>

                <div
                  css={{
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <HomeSquareItem backgroundColor="#23263c">
                    <Flex valign="center">
                      <HomeSquareItemContent
                        logo={ReverseTime}
                        title="Activity logs"
                        text="Timestamped and uniquely identified output logs."
                      />
                    </Flex>
                  </HomeSquareItem>
                </div>
              </div>
            </div>

            <div
              css={{
                width: "100%",
                height: "30%",
              }}
            >
              <HomeSquareItem backgroundColor="#23263c">
                <Flex valign="center">
                  <HomeSquareItemContent
                    logo={Themes}
                    title="Themes"
                    text="A diverse set of dark themes available for choosing."
                  />
                </Flex>
              </HomeSquareItem>
            </div>
          </div>

          <div
            css={{
              width: "42%",
              height: "100%",
            }}
            className="features__section__right"
          >
            <div
              css={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                css={{
                  flex: 1,
                }}
              >
                <HomeSquareItem title="BASIC" backgroundColor="transparent">
                  <Flex valign="center">
                    <HomeSquareItemContent
                      logo={Time}
                      title="Scheduled Jobs"
                      text="Schedule your jobs for execution on specific dates and times. You can also define the devices in which the job will be executed."
                    />
                  </Flex>
                </HomeSquareItem>
              </div>
              <div
                css={{
                  flex: 1,
                }}
              >
                <HomeSquareItem title="BASIC" backgroundColor="transparent">
                  <Flex valign="center">
                    <HomeSquareItemContent
                      logo={Menu}
                      title="Parallel Execution"
                      text="Have your nonconcurrent jobs run in parallel to get the most of the processing power available."
                    />
                  </Flex>
                </HomeSquareItem>
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeFeaturesSection
