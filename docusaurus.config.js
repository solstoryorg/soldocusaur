// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solstory',
  tagline: 'Scalable data layer for Solana NFTs',
  url: 'https://docs.solstory.is',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'solstory', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/solstoryorg/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/solstoryorg/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Solstory Documentation',
        logo: {
          alt: 'Solstory',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://twitter.com/solstory_is',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Main Documentation',
                to: '/',
              },
              {
                label: 'Typedoc',
                to: 'https://solstoryorg.github.io/solstory/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/solstory_is',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/p9Vb4VW7yh',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/solstoryorg/solstoryorg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Viewer',
                href: 'https://solstory.is',
              },
              {
                label: 'Verified Programs',
                href: '/verified',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solstory. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
