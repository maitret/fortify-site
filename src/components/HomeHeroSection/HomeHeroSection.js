import React from "react"
// import { Tooltip } from "antd"
import Flex from "../Flex"
import VideoGallery from "../VideoGallery"
import { CloudflareLogo, BackgroundLines } from "../../svg"
import { media, colors, meta } from "../../theme"

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
            fontFamily: meta.app.fontFamily,
          }}
        >
          {meta.app.title.toUpperCase()}
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
          {meta.app.description}
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
                alt="cloudflare logo"
                css={{
                  margin: "0 5px",
                  width: 120,
                }}
                src={CloudflareLogo}
              />
            </div>
            <a
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
                  backgroundColor: "hsl(28, 90%, 25%)",
                  color: "white",
                },
                [media.lessThan("large")]: {
                  display: "none!important",
                },
              }}
              href={`https://cloudflare.com/apps/${meta.app.slug}`}
            >
              Install on Cloudflare
            </a>
          </Flex>
          {/* <Tooltip
            placement="bottom"
            title={`${meta.app.title} can be installed on any Cloudflare-enabled website in a few clicks.`}
            arrowPointAtCenter
          >
            <a
              href="/"
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
              Install on Cloudflare?
            </a>
          </Tooltip> */}
        </Flex>
      </Flex>

      <Flex
        className="herro__section__screenshot"
        css={{
          padding: "0 0 3rem 0",
        }}
      >
        <div
          css={{
            boxShadow: " 0 30px 180px 0 rgba(35,38,60,.9)",
            border: `1px solid ${colors.greyBlue}`,
          }}
        >
          <VideoGallery
            light={true}
            volume={1}
            muted={true}
            playing={true}
            sourceList={[
              {
                url: "https://vimeo.com/318419016",
                description: "Coding a whole app using only a phone",
              },
              {
                url: "https://www.youtube.com/watch?v=t1QRdhVCzeA",
                description: "Commercial pizza",
              },
            ]}
          />
        </div>
      </Flex>
    </Flex>
  )
}

export default HomeHeroSection
