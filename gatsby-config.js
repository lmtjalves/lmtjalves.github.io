module.exports = {
  pathPrefix: "/docs",
  siteMetadata: {
    siteUrl: "https://lmtjalves.github.io",
    title: "Luís Alves",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
