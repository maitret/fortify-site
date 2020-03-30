import React from "react"
import Flex from "../Flex"
import { WindowsLogo, AppleLogo, LinuxLogo, BackgroundLines } from "../../svg"
import ScreenShot from "../../images/screenshot-background.png"
import { media, colors } from "../../theme"

const HomeHeroSection = () => {
  return (
    <Flex
      id="hero__section"
      className="hero__section"
      halign="center"
      direction="column"
      css={{
        backgroundImage: `url(${BackgroundLines})`,
      }}
    >
      <Flex
        className="hero__section__container"
        direction="column"
        halign="center"
        css={{
          padding: "50px 0",
        }}
      >
        <h1
          css={{
            color: "#f2f4f8",
            fontWeight: "bold",
            fontSize: "46px",
          }}
        >
          Networkchip
        </h1>
        <p
          css={{
            color: "#9ea1b8",
            fontSize: "35px",
            maxWidth: "600px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "40px",
            [media.size("xsmall")]: {
              fontSize: "1.4rem!important",
              lineHeight: "25px!important",
            },
          }}
        >
          A cloud-based job manager that integrates your devices.
        </p>
        <Flex
          className="hero__platform"
          direction="column"
          halign="center"
          css={{
            marginTop: "15px",
          }}
        >
          <Flex direction="column" halign="center">
            <div>
              <img
                css={{
                  margin: "0 5px",
                  [media.greaterThan("large")]: {
                    display: "none!important",
                  },
                }}
                src={AppleLogo}
              />
              <img
                css={{
                  margin: "0 5px",
                  [media.greaterThan("large")]: {
                    display: "none!important",
                  },
                }}
                src={LinuxLogo}
              />
              <img
                css={{
                  margin: "0 5px",
                }}
                src={WindowsLogo}
              />
            </div>
            <button
              css={{
                margin: "25px 0",
                backgroundColor: "#1e2134",
                borderColor: "transparent",
                color: "#fff",
                borderRadius: "290486px",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "0.3em 1em",
                outline: "none",
                cursor: "pointer",
                transition: "200ms all ease",
                ":hover": {
                  backgroundColor: "#afaea4",
                  color: "#404040",
                },
                [media.lessThan("large")]: {
                  display: "none!important",
                },
              }}
            >
              Download for windows
            </button>
          </Flex>
          <a
            href="#"
            css={{
              color: "#9ea1b8",
              borderBottom: "2px solid transparent",
              fontSize: "16px",
              transition: "200ms all ease",
              ":hover": {
                color: "#fff",
                borderColor: "#fff",
              },
              [media.lessThan("large")]: {
                marginTop: "50px!important",
              },
            }}
          >
            Other platforms
          </a>
        </Flex>
      </Flex>

      <Flex
        className="herro__section__screenshot"
        css={{
          maxWidth: "95%",
          padding: "3rem 0",
        }}
      >
        <div
          css={{
            boxShadow: " 0 30px 180px 0 rgba(35,38,60,.9)",
            border: `1px solid ${colors.greyBlue}`,
          }}
        >
          <img
            src={ScreenShot}
            alt="screeenshot"
            css={{
              width: "100%",
            }}
          />
        </div>
      </Flex>
    </Flex>
  )
}

export default HomeHeroSection
