import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Mops',
	tagline: 'Pugs are cool',
	favicon: 'img/favicon.ico',
	trailingSlash: false,

	// Set the production url of your site here
	url: 'https://mopsgamer.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Mopsgamer', // Usually your GitHub org/user name.
	projectName: 'mopsgamer.github.io', // Usually your repo name.
	deploymentBranch: "gh-pages",

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	// plugins: [
	// 	[
	// 		"@docusaurus/plugin-content-docs",
	// 		{

	// 		} satisfies PluginContentDocs.Options
	// 	]
	// ],

	presets: [
		[
			'classic',
			{
				docs: false,
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/mops-avatar.jpg',
		navbar: {
			title: 'Mops',
			logo: {
				alt: 'mops-avatar',
				src: 'img/mops-avatar.jpg',
			},
			items: [
				{
					label: "My socials",
					items: [
						{ label: "GitHub", to: "https://github.com/Mopsgamer" },
						{ label: "NPM Registry", to: "https://www.npmjs.com/~mopsgamer" }
					]
				},
				{
					href: 'https://github.com/Mopsgamer/mopsgamer.github.io',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'My socials',
					items: [
						{ label: 'GitHub', href: 'https://github.com/Mopsgamer' },
						{ label: "NPM Registry", href: "https://www.npmjs.com/~mopsgamer" }
					]
				}
			]
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
