// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.arshsaxena.in',
	generateRobotsTxt: true,
	generateIndexSitemap: true,
	exclude: ['/resume'],
};
