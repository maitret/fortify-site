import React from "react"
// import { Tooltip } from "antd"
import Flex from "../Flex"
import VideoGallery from "../VideoGallery"
import LargeText from "../HomeSectionHeader/LargeText"
import { CloudflareLogo, BackgroundLines } from "../../svg"
import { media, colors, meta } from "../../theme"

const featuresText = (
  <>
    <div>
      {meta.app.title} is a network-level reverse proxy for sending incoming
      traffic to other services on your domain
    </div>
    <div css={{ marginTop: "1rem" }}>
      <pre css={{ backgroundColor: "transparent", letterSpacing: "0.01rem" }}>
        torrent.nwc.com ⟶ 172.132.921:8787
      </pre>
    </div>
  </>
)

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
          paddingTop: "50px",
        }}
      >
        <LargeText elementName="h1" text={featuresText} />

        <h1
          css={{
            display: "none",
            color: colors.brand,
            fontWeight: "bold",
            fontSize: "46px",
            fontFamily: meta.app.fontFamily,
          }}
        >
          {meta.app.title.toUpperCase()}
        </h1>
        <h2
          css={{
            display: "none",
            color: "#f2f4f8",
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
        </h2>

        <Flex
          className="hero__platform"
          direction="column"
          halign="center"
          css={{ marginTop: "15px" }}
        >
          <Flex direction="column" halign="center">
            <div
              css={{ marginTop: "2rem" }}
              data-tooltip={`${meta.app.title} can be installed on any Cloudflare-enabled website in a few minutes`}
            >
              <img
                alt="cloudflare logo"
                css={{ width: 200 }}
                src={CloudflareLogo}
              />
            </div>
            <a
              css={{
                color: colors.cloudflare,
                marginTop: "1rem",
                marginBottom: "2rem",
                backgroundColor: "#1e2134",
                borderColor: "transparent",
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
              target="_blank"
              rel="noopener"
            >
              Start your 14 day free trial today
            </a>
          </Flex>
          <VideoGallery
            light={true}
            volume={1}
            muted={false}
            playing={true}
            sourceList={[
              {
                url: "https://www.youtube.com/watch?v=MEQ9WcB9-kk",
                description: "Crash course with Create React App",
              },
            ]}
          />
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
        ></div>
      </Flex>
    </Flex>
  )
}

export default HomeHeroSection
