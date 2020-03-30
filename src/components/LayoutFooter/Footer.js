import Container from "../Container"
import FooterLink from "./FooterLink"
import FooterNav from "./FooterNav"
import MetaTitle from "../../templates/components/MetaTitle"
import SectionLinks from "./SectionLinks"
import React from "react"
import { colors, media } from "../../theme"
import { sectionListDocs } from "../../utils/sectionList"
import navFooter from "../../../content/footerNav.yml"

const Footer = ({ layoutHasSidebar = false }) => (
  <footer
    css={{
      backgroundColor: "transparent",
      borderTop: `1px solid ${colors.greyBlue}`,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 20,

      [media.size("sidebarFixed")]: {
        paddingTop: 40,
      },
      "@media print": {
        display: "none",
      },
    }}
  >
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",

          [media.between("small", "medium")]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between("large", "largerSidebar")]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between("largerSidebar", "sidebarFixed", true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            css={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "space-around",
              [media.lessThan("large")]: {
                width: "100%",
              },
              [media.greaterThan("xlarge")]: {
                paddingLeft: 40,
              },
              [media.size("xsmall")]: {
                flexDirection: "column!important",
              },
            }}
          >
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>{navFooter.docs.title}</MetaTitle>
              {sectionListDocs.map(section => {
                const defaultItem = section.items[0]
                return (
                  <FooterLink
                    to={`/docs/${defaultItem.id}.html`}
                    key={section.title}
                  >
                    {section.title}
                  </FooterLink>
                )
              })}
            </FooterNav>

            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>{navFooter.more.title}</MetaTitle>
              <SectionLinks links={navFooter.more.items} />
            </FooterNav>
            <FooterNav layoutHasSidebar={layoutHasSidebar}>
              <MetaTitle onDark={true}>{navFooter.legal.title}</MetaTitle>
              <SectionLinks links={navFooter.legal.items} />
            </FooterNav>
          </div>
          <div
            css={{
              paddingTop: "2rem",
              color: colors.subtleOnDark,
              fontSize: 10,
              textAlign: "center",
            }}
          >
            Nothing on this site should be considered legal advice and no
            attorney-client relationship is established. Please note that in
            some cases, depending on your legislation, further actions may be
            required to make your activity compliant with the law.
            <p
              css={{
                color: colors.subtleOnDark,
                paddingTop: 15,
              }}
            >
              {`© ${new Date().getFullYear()} Network Chimp`}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
