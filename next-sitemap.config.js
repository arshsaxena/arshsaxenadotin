/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.arshsaxena.in',
	generateRobotsTxt: true,
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 5000,
	exclude: ['/404', '/not-found'],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
};
