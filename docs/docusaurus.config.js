// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Micanto Documentation',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://micanto.js.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'micanto-music', // Usually your GitHub org/user name.
    projectName: 'micanto', // Usually your repo name.

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
                    sidebarPath: require.resolve('./sidebars.js'),
                    docRootComponent: "@theme/DocRoot",
                    docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "api", // plugin id
                docsPluginId: "api", // id of plugin-content-docs or preset for rendering docs
                config: {
                    micanto: { // the <id> referenced when running CLI commands
                        specPath: "src/api.yaml", // path to OpenAPI spec, URLs supported
                        outputDir: "docs/api", // output directory for generated files
                        sidebarOptions: { // optional, instructs plugin to generate sidebar.js
                            groupPathsBy: "tag", // group sidebar items by operation "tag"
                        },
                    }
                }
            },
        ]
    ],
    themes: ["docusaurus-theme-openapi-docs"],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Micanto',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        position: 'left',
                        label: 'Smartphone App',
                        href: 'https://github.com/micanto-music/app',
                    },
                    {
                        position: 'left',
                        label: 'Docker',
                        href: 'https://github.com/micanto-music/docker',
                    },
                    {
                        href: 'https://github.com/micanto-music/micanto',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    // {
                    //   title: 'More',
                    //   items: [
                    //     {
                    //       label: 'Author Website',
                    //       to: 'https://www.andrerinas.de/',
                    //     },
                    //     {
                    //       label: 'GitHub',
                    //       href: 'https://github.com/micanto-music/micanto',
                    //     },
                    //   ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Micanto. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
