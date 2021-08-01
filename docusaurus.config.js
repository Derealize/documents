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
            {
              label: "Next.js",
              to: "/docs/guides/nextjs",
            },
            {
              label: "Create React App",
              to: "/docs/guides/creat-react-app",
            },
            {
              label: "Gatsby",
              to: "/docs/guides/gatsby",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Feedback",
              to: "https://derealize-fider.herokuapp.com",
            },
            {
              label: "Discord",
              href: "https://discord.gg/2sqy5QeZXK",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Derealize3",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contact Us",
              to: "mailto:elliotreborn@gmail.com",
            },
            {
              label: "Alternative download url",
              to: "https://github.com/zicjin/derealize.assets/releases",
            },
            {
              //Renders the html pass-through instead of a simple link
              html: `
                <a href="https://www.producthunt.com/posts/derealize?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-derealize" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=306558&theme=light" alt="Derealize - tailwindcss editor | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
              `,
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
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: "G-PQXFMPV0VZ",
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
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
