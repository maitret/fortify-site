const urljoin = require("url-join")
const plans = require("./src/plans")
const configs = require("./site-config")

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(configs.app_url, configs.path_prefix),
    title: `${configs.app_title} | ${configs.app_subtitle_short}`,
    description: configs.app_description,
    author: configs.twitter_username,
  },
  mapping: {
    "Mdx.frontmatter.author": "AuthorYaml",
    "MarkdownRemark.frontmatter.author": "AuthorYaml",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-emotion",
    "gatsby-transformer-authors-yaml",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#61dafb",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/drift.js?version=1",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156956273-2",
        head: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-responsive-iframe",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 840,
            },
          },
          "gatsby-remark-external-links",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "gatsby-code-",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-antd",
    //   options: {
    //     style: true,
    //   },
    // },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
        extensions: [".mdx", ".md"],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.app_title,
        short_name: configs.app_title,
        start_url: configs.path_prefix,
        theme_color: "#fff",
        background_color: "#fff",
        icon: `static/favicon.png`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-paddle`,
      options: {
        vendorId: plans.paddle.vendorId,
        debug: false,
      },
    },

    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-zeit-now",
      options: {
        globalHeaders: {
          "referrer-policy": "same-origin",
          "expect-ct": "max-age=604800, enforce",
          "strict-transport-security": "max-age=31536000; includeSubDomains",
          "x-frame-options": "DENY",
          "x-xss-protection": "1; mode=block",
          "x-content-type-options": "nosniff",
          "x-download-options": "noopen",
        },
      },
    },
  ],
}
