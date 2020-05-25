import React from "react"
import Flex from "../Flex"
import VideoGallery from "../VideoGallery"
import LargeText from "../HomeSectionHeader/LargeText"
import { CloudflareLogo, BackgroundLines } from "../../svg"
import { media, colors, meta } from "../../theme"

const HomeHeroSection = () => (
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
      css={{ paddingTop: "2rem", width: "100%" }}
    >
      <LargeText
        elementName="h1"
        customStyles={{ maxWidth: 720, textAlign: "center", padding: "0 1rem" }}
        text={`Offload your Maintenance Mode infrastucture and focus on more important things.`}
      />
      <div
        css={{
          marginTop: "1rem",
          fontSize: "1.5rem",
          width: "100%",
          padding: "0 1rem",
          [media.size("xsmall")]: {
            fontSize: "1rem!important",
            lineHeight: "25px!important",
          },
        }}
      >
        <pre
          css={{
            padding: 0,
            whiteSpace: "normal",
            wordWrap: "break-word",
            letterSpacing: "0.01rem",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
          <div>
            <span css={{ color: colors.cloudflare }}>torrent.</span>
            <span css={{ color: colors.codeVariable }}>yoursite.com</span> ⟶
            172.132.921
            <span css={{ color: colors.brand }}>:8787</span>
          </div>
          <div>
            <span css={{ color: colors.codeVariable }}>yoursite.com</span>
            <span css={{ color: colors.cloudflare }}>/api</span> ⟶
            ec2-24.amazonaws.com
            <span css={{ color: colors.brand }}>:4080</span>
          </div>
        </pre>
      </div>

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
          <a
            css={{ marginTop: "2rem" }}
            data-tooltip={`${meta.app.title} can be installed on any Cloudflare-enabled website in a few minutes`}
            href={`https://cloudflare.com/apps/${meta.app.slug}`}
            target="_blank"
            rel="noopener"
          >
            <img alt="cloudflare logo" src={CloudflareLogo} />
          </a>
          <a
            css={{
              color: colors.cloudflare,
              marginTop: "1rem",
              marginBottom: "2rem",
              backgroundColor: "#1e2134",
              borderColor: "transparent",
              borderRadius: "290486px",
              fontWeight: "bold",
              padding: "0.3em 1em",
              outline: "none",
              cursor: "pointer",
              transition: "200ms all ease",
              ":hover": {
                color: "white",
                backgroundColor: "hsl(28, 90%, 25%)",
              },
              [media.size("xsmall")]: {
                fontSize: "1rem!important",
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

export default HomeHeroSection
