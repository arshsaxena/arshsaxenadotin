// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
};

module.exports = {
	images: {
		unoptimized: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/arshsaxena',
				permanent: true,
			},
			{
				source: '/github',
				destination: 'https://github.com/arshsaxena',
				permanent: true,
			},
			{
				source: '/gh',
				destination: 'https://github.com/arshsaxena',
				permanent: true,
			},
			{
				source: '/instagram',
				destination: 'https://instagram.com/arsh.saxena02',
				permanent: true,
			},
			{
				source: '/insta',
				destination: 'https://instagram.com/arsh.saxena02',
				permanent: true,
			},
			{
				source: '/ig',
				destination: 'https://instagram.com/arsh.saxena02',
				permanent: true,
			},
			{
				source: '/x',
				destination: 'https://x.com/arshsaxena02',
				permanent: true,
			},
			{
				source: '/twitter',
				destination: 'https://x.com/arshsaxena02',
				permanent: true,
			},
			{
				source: '/music',
				destination:
					'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
				permanent: true,
			},
			{
				source: '/applemusic',
				destination:
					'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
				permanent: true,
			},
			{
				source: '/apple-music',
				destination:
					'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
				permanent: true,
			},
			{
				source: '/nptelcompanion',
				destination: 'https://nptelcompanion.arshsaxena.in',
				permanent: true,
			},
			{
				source: '/nptel',
				destination: 'https://nptelcompanion.arshsaxena.in',
				permanent: true,
			},
			{
				source: '/vitc',
				destination: 'https://vitcfacultyinfo.arshsaxena.in/',
				permanent: true,
			},
			{
				source: '/vitcfacultyinfo',
				destination: 'https://vitcfacultyinfo.arshsaxena.in/',
				permanent: true,
			},
			{
				source: '/leetcode',
				destination: 'https://leetcode.com/u/arshsaxena/',
				permanent: true,
			},
		];
	},
};
