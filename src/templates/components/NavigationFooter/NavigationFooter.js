import Container from "../../../components/Container"
import Flex from "../../../components/Flex"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { colors, fonts, media, linkStyle } from "../../../theme"

const NavigationFooter = ({ next, prev, location }) => {
  return (
    <div
      css={{
        color: colors.white,
        paddingBottom: 50,
      }}
    >
      <Container>
        <Flex
          type="ul"
          halign="space-between"
          css={{
            [media.between("small", "medium")]: {
              paddingRight: 240,
            },

            [media.between("large", "largerSidebar")]: {
              paddingRight: 280,
            },

            [media.between("largerSidebar", "sidebarFixed", true)]: {
              paddingRight: 380,
            },
          }}
        >
          <Flex basis="50%" type="li">
            {prev && (
              <div>
                <SecondaryLabel>Previous article</SecondaryLabel>
                <div
                  css={{
                    paddingTop: 10,
                  }}
                >
                  <PrimaryLink location={location} to={`${prev.id}.html`}>
                    {prev.title}
                  </PrimaryLink>
                </div>
              </div>
            )}
          </Flex>
          {next && (
            <Flex
              halign="flex-end"
              basis="50%"
              type="li"
              css={{
                textAlign: "right",
              }}
            >
              <div>
                <SecondaryLabel>Next article</SecondaryLabel>
                <div
                  css={{
                    paddingTop: 10,
                  }}
                >
                  <PrimaryLink location={location} to={`${next.id}.html`}>
                    {next.title}
                  </PrimaryLink>
                </div>
              </div>
            </Flex>
          )}
        </Flex>
      </Container>
    </div>
  )
}

NavigationFooter.propTypes = {
  next: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  prev: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default NavigationFooter

const PrimaryLink = ({ children, to, location }) => {
  const updatedUrl =
    (location && location.pathname.replace(/\/[^/]+\.html/, "/" + to)) || to

  return (
    <Link css={linkStyle} to={updatedUrl}>
      {children}
      <i
        css={{
          paddingLeft: 10,
          top: 1,
          position: "relative",
        }}
        className="fas fa-caret-right"
      ></i>
    </Link>
  )
}

const SecondaryLabel = ({ children }) => (
  <div
    css={{
      color: colors.darker,
      ...fonts.small,
    }}
  >
    {children}
  </div>
)
