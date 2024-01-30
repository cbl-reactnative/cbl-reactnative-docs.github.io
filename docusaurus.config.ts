import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Couchbase Lite React Native Module',
  tagline: 'Couchbase Lite React Native Module',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'http://cbl-reactnative-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cbl-reactnative', // Usually your GitHub org/user name.
  projectName: 'cbl-reactnative-docs.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cbl-reactnative/cbl-reactnative-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cbl-reactnative/cbl-reactnative-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'hourly',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false, 
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Couchbase Lite React Native Module',
        logo: {
          alt: 'Couchbase Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/cbl-reactnative/cbl-reactnative-module',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
        hideOnScroll: true,
      },
      docs: {
          sidebar: {
            autoCollapseCategories: false,
          }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reference Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/tags/couchbase/info/',
              },
              {
                label: 'Discord',
                href: 'https://bit.ly/3NbK5vg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Native Module for Couchbase Lite Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
