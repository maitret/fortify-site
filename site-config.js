const { meta } = require("./src/theme")

module.exports = {
  path_prefix: "/",
  google_analytics_ID: "",
  app_url: `https://${meta.app.slug}.networkchimp.com`,
  app_logo_link: `https://${meta.app.slug}.networkchimp.com/icons/icon-384x384.png`,
  app_title: meta.app.title,
  app_subtitle_short: meta.app.description,
  app_description: {
    index: meta.app.description,
    fourOhFour: "404 Page Not Found",
  },
  app_keywords: [meta.app.title],
  four_oh_four_keywords: ["page not found"],
  extend_free_trial_title: "Extend your free trial",
  extend_free_trial_keywords: ["extend", "free trial"],
  // Personal Info
  twitter_username: "NetworkChimp",
  docs: {
    pathname: "docs",
    sidebar: {
      forcedNavOrder: [],
      collapsedNav: ["/codeblock"],
      links: [{ text: "Home", link: "/" }],
      frontline: false,
      ignoreIndex: true,
    },
    header: {
      logo: "/icon.png",
      logoLink: "/",
      title: meta.app.title,
      subtitle: "Documentation",
      githubUrl: "",
      helpUrl: "",
      links: [{ text: "", link: "" }],
    },
  },
}
