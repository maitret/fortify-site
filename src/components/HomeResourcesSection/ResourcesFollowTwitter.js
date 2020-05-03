import React from "react"
import HomeSquareItem from "../HomeSquareItem"
import { colors } from "../../theme"
import "./ResourcesSection.scss"

const ResourcesFollowTwitter = () => (
  <HomeSquareItem
    icon={<i className="fab fa-3x fa-twitter"></i>}
    backgroundColor={colors.greyBlue}
    link="https://www.twitter.com/networkchimp"
    header="Follow us on Twitter"
    text="Get the latest product updates by joining our mailing list"
  />
)

export default ResourcesFollowTwitter
