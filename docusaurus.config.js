/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Derealize",
  tagline: "Tailwindcss Editor",
  url: "https://derealize.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "derealize", // Usually your GitHub org/user name.
  projectName: "derealize", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Derealize",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documents",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/Derealize3",
            },
            {
              label: "Discord",
              href: "https://discord.gg/2sqy5QeZXK",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/tailwind-css",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Collect feedback",
              to: "https://derealize-fider.herokuapp.com/",
            },
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Derealize, Inc.`,
    },
    // https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting
    // prism: {
    //   additionalLanguages: ["php", "ruby"],
    // },
  },
  plugins: ["docusaurus-plugin-sass", "tailwindcss-loader"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/plyr.css"),
          ],
        },
      },
    ],
  ],
};
