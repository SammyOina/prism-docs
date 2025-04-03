import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // But you can create a sidebar manually

    /*tutorialSidebar: [
        'intro',
        'architecture',
        'getting-started',
        'access-control',
        'dashboard',
        'workspaces',
        'users',
        'cvms',
        'computations',
        'roles',
        'assets',
        'algorithms',
        'certs',
        'computation-logs',
    ],*/

    tutorialSidebar: [
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'intro',
                'architecture',
                'getting-started',
            ],
        },
        {
            type: 'category',
            label: 'Computations',
            items: [
                'computations',
                'computation-logs',
                'roles',
                'assets',
                'algorithms',
            ],
        },
        {
            type: 'category',
            label: 'Cvms',
            items: [
                'cvms',
                'certs',
            ],
        },
        {
            type: 'category',
            label: 'User Management',
            items: [
                'access-control',
                'dashboard',
                'workspaces',
                'users',
            ],
        },
    ],
};

export default sidebars;