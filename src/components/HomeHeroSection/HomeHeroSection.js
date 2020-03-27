import React from "react"
import Flex from "../Flex"
import WindowsLogo from "../../svg/windows-logo.svg"
import ScreenShot from "../../images/screenshot-background.png"
import BackgroundLines from "../../svg/background-lines.svg"

const HomeHeroSection = () => {
  return (
    <Flex
      id="hero__section"
      className="hero__section"
      halign="center"
      direction="column"
      css={{
        backgroundImage: "url(" + BackgroundLines + ")",
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
          Runlet
        </h1>
        <p
          css={{
            color: "#9ea1b8",
            fontSize: "35px",
            maxWidth: "600px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "40px",
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
          <img src={WindowsLogo} />
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
            }}
          >
            Download for windows
          </button>
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
            border: "1px solid #23263c",
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
