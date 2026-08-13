// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

function stripTrailingSlash(path) {
    return path === '/' ? path : path.replace(/\/+$/, '');
}

function addRedirect(redirects, from) {
    const normalizedFrom = stripTrailingSlash(from);

    if (normalizedFrom) {
        redirects.push(normalizedFrom);
    }
}

function addPrefixedRedirects(redirects, path, currentPrefix, legacyPrefixes) {
    if (!path.startsWith(currentPrefix)) {
        return;
    }

    const suffix = path.slice(currentPrefix.length);

    legacyPrefixes.forEach((legacyPrefix) => {
        addRedirect(redirects, `${legacyPrefix}${suffix}`);
    });
}

function addVersionedRedirects(redirects, path, currentPrefix, legacyPrefixes) {
    if (!path.startsWith(currentPrefix)) {
        return;
    }

    const suffix = path.slice(currentPrefix.length);

    legacyPrefixes.forEach((legacyPrefix) => {
        addRedirect(redirects, `/docs/1.2.28${legacyPrefix}${suffix}`);
    });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'layline.io Documentation',
    tagline: 'event processing. simplified',
    favicon: 'img/favicons/favicon.ico',
    noIndex: false,

    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'theme-color',
                content: '#1a1a1a',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/img/favicons/apple-icon-180x180.png',
            },
        },
    ],

    // Set the production url of your site here
    url: 'https://doc.layline.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    trailingSlash: true,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    // onBrokenLinks: 'warn',
    onBrokenLinks: 'ignore',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownImages: () => '',
            onBrokenMarkdownLinks: 'throw',
        },
        anchors: {
            maintainCase: false,
        },
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            // 'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    breadcrumbs: true,
                    routeBasePath: '/docs',
                    include: ['**/*.md', '**/*.mdx', '!projects/**', '!src/**'], // Exclude version specific "projects" directory'
                    sidebarPath: require.resolve('./sidebars.js'),
                    lastVersion: 'current',
                    includeCurrentVersion: true,
                    versions: {
                        current: {
                            label: '2.x',
                            // path: '2.x', // Do not add a path for the current version, it is the default. --> Helps with SEO.
                        }
                    },
                    exclude: [
                        // '**/globals.md', // Typedoc removed - no more auto-generated globals.md
                        'snippets/**', // exclude the snippets folder from sidebar generation
                    ],
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ],
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    // Redirects for removed numbered prefixes
                    { from: '/docs/01-quickstart', to: '/docs/quickstart' },
                    { from: '/docs/02-concept', to: '/docs/concept' },
                    { from: '/docs/03-assets', to: '/docs/assets' },
                    { from: '/docs/04-language-reference', to: '/docs/language-reference' },
                    { from: '/docs/07-operations', to: '/docs/operations' },
                    { from: '/docs/08-release-notes', to: '/docs/release-notes' },
                    // Add more specific redirects if needed
                ],
                createRedirects(path) {
                    const redirects = [];

                    if (path === '/docs/') {
                        addRedirect(redirects, '/docs/docs/');
                    }

                    if (path === '/docs/language-reference/quickscript/quickscript/') {
                        addRedirect(redirects, '/docs/docs/language-reference/quickscript/quickscript/');
                    }

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/connections/', [
                        '/docs/assets/connections/',
                        '/docs/assets/workflow-assets/sources/connections/',
                        '/docs/assets/workflow-assets/sinks/connections/',
                        '/docs/assets/workflow-assets/services/connections/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/extensions/', [
                        '/docs/assets/extensions/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/formats/', [
                        '/docs/assets/formats/',
                        '/docs/assets/workflow-assets/processors-flow/formats/',
                        '/docs/assets/workflow-assets/processors-input/formats/',
                        '/docs/assets/workflow-assets/processors-output/formats/',
                        '/docs/assets/workflow-assets/workflows/formats/',
                    ]);
                    addVersionedRedirects(redirects, path, '/docs/assets/workflow-assets/formats/', [
                        '/assets/formats/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/processors-flow/', [
                        '/docs/assets/processors-flow/',
                        '/docs/assets/workflow-assets/formats/processors-flow/',
                        '/docs/assets/workflow-assets/processors-output/processors-flow/',
                        '/docs/assets/workflow-assets/services/processors-flow/',
                        '/docs/assets/workflow-assets/sources/processors-flow/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/processors-input/', [
                        '/docs/assets/processors-input/',
                        '/docs/assets/workflow-assets/formats/processors-input/',
                        '/docs/assets/workflow-assets/sinks/processors-input/',
                        '/docs/assets/workflow-assets/sources/processors-input/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/processors-output/', [
                        '/docs/assets/processors-output/',
                        '/docs/assets/workflow-assets/sources/processors-output/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/resources/', [
                        '/docs/assets/resources/',
                        '/docs/assets/workflow-assets/extensions/resources/',
                        '/docs/assets/workflow-assets/processors-output/resources/',
                        '/docs/assets/workflow-assets/sinks/resources/',
                        '/docs/assets/workflow-assets/sources/resources/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/services/', [
                        '/docs/assets/services/',
                        '/docs/assets/workflow-assets/sources/services/',
                    ]);

                    if (path.startsWith('/docs/assets/workflow-assets/services/asset-service-proxy/')) {
                        addRedirect(redirects, '/docs/assets/workflow-assets/services/asset-service-proxy/asset-service-introduction/');
                    }

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/sinks/', [
                        '/docs/assets/sinks/',
                        '/docs/assets/workflow-assets/processors-output/sinks/',
                        '/docs/assets/workflow-assets/sources/sinks/',
                    ]);
                    addVersionedRedirects(redirects, path, '/docs/assets/workflow-assets/sinks/', [
                        '/assets/sinks/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/sources/', [
                        '/docs/assets/sources/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/workflows/', [
                        '/docs/assets/workflows/',
                    ]);

                    addPrefixedRedirects(redirects, path, '/docs/assets/workflow-assets/deployment-assets/', [
                        '/docs/assets/deployment-assets/',
                    ]);

                    if (path === '/docs/operations/cluster/') {
                        addRedirect(redirects, '/docs/operations/cluster/cluster-overview/');
                        addRedirect(redirects, '/docs/operations/cluster/cluster-tab-overview/');
                    }

                    if (path.startsWith('/docs/operations/cluster/') && path !== '/docs/operations/cluster/') {
                        addRedirect(redirects, `/docs/operations/cluster/cluster/${path.slice('/docs/operations/cluster/'.length)}`);
                    }

                    if (path === '/docs/operations/cluster/security-storage/') {
                        addRedirect(redirects, '/docs/operations/cluster/operations-secret-storage/');
                    }

                    if (path === '/docs/settings/') {
                        addRedirect(redirects, '/docs/concept/settings/introduction/');
                    }

                    if (path === '/docs/settings/application/') {
                        addRedirect(redirects, '/docs/concept/settings/introduction/settings-application/');
                        addRedirect(redirects, '/docs/concept/settings/settings-application/');
                    }

                    if (path === '/docs/settings/cluster-storage/') {
                        addRedirect(redirects, '/docs/concept/settings/introduction/settings-cluster/');
                        addRedirect(redirects, '/docs/concept/settings/settings-cluster/');
                    }

                    if (path === '/docs/settings/secret-storage/') {
                        addRedirect(redirects, '/docs/concept/settings/settings-secret-storage/');
                    }

                    if (path === '/docs/settings/users-and-roles/') {
                        addRedirect(redirects, '/docs/concept/settings/settings-user-storage/');
                        addRedirect(redirects, '/docs/concept/advanced/settings/settings-user-storage/');
                    }

                    if (path === '/docs/concept/projects-workflows/deployment/') {
                        addRedirect(redirects, '/docs/concept/advanced/projects-workflows/deployment/');
                    }

                    if (path === '/docs/assets/') {
                        addRedirect(redirects, '/docs/1.2.28/assets/');
                    }

                    if (path === '/docs/concept/') {
                        addRedirect(redirects, '/docs/1.2.28/concept/');
                    }

                    if (path === '/docs/language-reference/') {
                        addRedirect(redirects, '/docs/1.2.28/language-reference/');
                    }

                    if (path === '/docs/release-notes/') {
                        addRedirect(redirects, '/docs/1.2.28/release/');
                    }

                    return redirects;
                },
            },
        ],
        // Typedoc plugin removed - API docs are now maintained manually
        // ['docusaurus-plugin-typedoc',
        //     {
        //         id: 'v2.x',
        //         out: './docs/language-reference/javascript/API',
        //         entryPoints: ['./docs/projects/layline/src/javascript/index.ts'],
        //         tsconfig: './docs/projects/tsconfig.json',
        //         readme: 'none',
        //         sidebar: {
        //             autoConfiguration: true,
        //         },
        //         watch: process.env.TYPEDOC_WATCH,
        //         disableSources: true,
        //         plugin: [require.resolve('./src/customCode/typedoc-custom-plugin.js')],
        //     }
        // ],
        ['@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                disableInDev: false,
            }
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social/layline-doc-og.jpg',
            navbar: {
                title: '',
                logo: {
                    alt: 'layline.io',
                    src: 'img/logo/logo_name_for_light_background.svg',
                    srcDark: 'img/logo/logo_name_for_dark_background.svg',
                    href: 'https://layline.io',
                },
                items: [
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                        dropdownActiveClassDisabled: true,
                    },
                    {
                        type: 'docsVersion',
                        // sidebarId: 'mainSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                ],
            },
            footer: {
                logo: {
                    src: 'img/logo/logo_name_for_light_background.svg',
                    srcDark: 'img/logo/logo_name_for_dark_background.svg',
                    alt: 'layline.io',
                    href: 'https://layline.io',
                    width: 160,
                    height: 40,
                },
                links: [
                    {
                        title: 'Product',
                        items: [
                            {
                                label: 'Corporate Website',
                                href: 'https://layline.io',
                            },
                            {
                                label: 'Blog',
                                href: 'https://layline.io/blog',
                            },
                            {
                                label: 'Pricing',
                                href: 'https://layline.io/pricing',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Quickstart',
                                to: '/docs/quickstart/quickstart-overview',
                            },
                            {
                                label: 'Core Concepts',
                                to: '/docs/concept',
                            },
                            {
                                label: 'Language Reference',
                                to: '/docs/language-reference',
                            },
                        ],
                    },
                    {
                        title: 'Legal',
                        items: [
                            {
                                label: 'Privacy Policy',
                                href: 'https://layline.io/privacy-policy',
                            },
                            {
                                label: 'Terms of Service',
                                href: 'https://layline.io/terms-of-service',
                            },
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} layline.io GmbH. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },

            metadata: [
                { name: 'keywords', content: 'event processing, data pipeline, ETL, real-time streaming, low-code, workflow automation, data integration, stream processing, layline.io' },
                { name: 'author', content: 'layline.io GmbH' },
            ],
            algolia: {
                // The application ID provided by Algolia
                appId: '6XU9IX6WDZ',

                // Public API key: it is safe to commit it
                // apiKey: 'e386b391287602844466168503c03beb',
                // apiKey: '508db3c82c63490b0b70d9b7031ddca5',
                apiKey: '2836105fd83c5775e75624ca0b740160',

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

    themes: ['@docusaurus/theme-mermaid'],
};

// console.log(require.resolve('./src/customCode/typedoc-custom-plugin.js')); // Typedoc removed

module.exports = config;
