module.exports = {
  siteMetadata: {
    title: `Openess`,
    description: `Openess emojis for everyone!.`,
    author: `Openess Team`,
    image: 'https://emoji.openess.dev/og-image/share.jpeg',
    url: 'https://emoji.openess.dev',
    twitterUsername: `openessdev`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GTAG_VALUE,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `emojiData`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
