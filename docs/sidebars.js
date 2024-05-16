/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

import sidebar from "./docs/api/sidebar";

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // But you can create a sidebar manually
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'getting-started/introduction',
                'getting-started/installation',
            ],
        },
        {
            type: 'category',
            label: 'CLI Commands',
            items: [
                'commands/sync',
            ],
        },
        {
            type: 'category',
            label: 'Integrations',
            items: [
                'integrations/spotify',
            ],
        },
        'localization',
        {
            type: 'category',
            label: 'Api',
            items: sidebar
        },
        'changelog'
    ],
};

export default sidebars;
