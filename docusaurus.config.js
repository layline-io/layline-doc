// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'layline.io Documentation',
    tagline: 'event processing. simplified',
    favicon: 'img/favicons/favicon.ico',
    noIndex: false,

    // Set the production url of your site here
    url: 'https://doc.layline.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    // onBrokenLinks: 'warn',
    // onBrokenMarkdownLinks: 'warn',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            // 'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    lastVersion: 'current',
                    includeCurrentVersion: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social/6_h630_twitter.png',
            navbar: {
                title: 'layline.io',
                logo: {
                    alt: 'layline.io',
                    src: 'img/logo/layline_logo.svg',
                },
                items: [
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                        dropdownActiveClassDisabled: true,
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'mainSidebar',
                        position: 'left',
                        label: 'Documentation',
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
                                label: 'Documentation',
                                to: '/docs/index',
                            },
                        ],
                    },
                    {
                        title: 'layline.io',
                        items: [
                            {
                                label: 'Corporate Website',
                                href: 'https://layline.io',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://layline.io/blog',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} layline.io GmbH.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 6,
            },

            algolia: {
                // The application ID provided by Algolia
                appId: '6XU9IX6WDZ',

                // Public API key: it is safe to commit it
                apiKey: 'e386b391287602844466168503c03beb',

                indexName: 'layline',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Algolia search parameters
                // searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',

                //... other Algolia params
            },
        }),

    markdown: {
        mermaid: true,
        anchors: {
            maintainCase: false,
        }
        // theme: {light: 'neutral', dark: 'forest'},
    },

    themes: ['@docusaurus/theme-mermaid'],

    plugins: [
        // Plugin / TypeDoc options
        ['docusaurus-plugin-typedoc',
            {
                out: "./04-language-reference/javascript/02-API",
                entryPoints: ["./projects/layline/src/index.ts"],
                tsconfig: './tsconfig.json',
                // plugin: ['typedoc-plugin-frontmatter'],
                readme: "./projects/layline/src/index.mdx",
                sidebar: {
                    autoConfiguration: true
                },
                watch: process.env.TYPEDOC_WATCH, // to instantly recompile changes to typescript files in dev mode
                disableSources: true, // do not create url links to the source code of .ts files on github
            }
        ],
        ['@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            }
        ],
    ],

};

module.exports = config;
