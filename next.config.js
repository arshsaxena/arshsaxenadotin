// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
};

const urls = {
	social: {
		linkedin: 'https://www.linkedin.com/in/arshsaxena',
		github: 'https://github.com/arshsaxena',
		instagram: 'https://instagram.com/arsh.saxena02',
		x: 'https://x.com/arshsaxena02',
	},
	music: {
		applemusic:
			'https://music.apple.com/in/playlist/arshs-favourites/pl.u-yZyVWPrCd3zXWGe',
	},
	projects: {
		nptelcompanion: 'https://nptelcompanion.arshsaxena.in',
		vitcfacultyinfo: 'https://vitcfacultyinfo.arshsaxena.in/',
		leetcode: 'https://leetcode.com/u/arshsaxena/',
	},
	docs: {
		resume: 'https://drive.google.com/file/d/1POQGO0s2za5EcAAWtuxmIlSjGM54dnuH/view',
	},
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
				source: '/leetcode',
				destination: urls.projects.leetcode,
				permanent: true,
			},
			{
				source: '/resume/download',
				destination: urls.docs.resume,
				permanent: true,
			},
			{
				source: '/resume/download/pdf',
				destination: urls.docs.resume,
				permanent: true,
			},
			{
				source: '/resume/pdf',
				destination: urls.docs.resume,
				permanent: true,
			},
			{
				source: '/resume-pdf',
				destination: urls.docs.resume,
				permanent: true,
			},
			{
				source: '/cv',
				destination: urls.docs.resume,
				permanent: true,
			},
			{
				source: '/projects',
				destination: '/made-by-arsh',
				permanent: false,
			},
			{
				source: '/work',
				destination: '/made-by-arsh',
				permanent: false,
			},
			{
				source: '/contact',
				destination: '/connect',
				permanent: false,
			},
			{
				source: '/linkedin',
				destination: urls.social.linkedin,
				permanent: true,
			},
			{
				source: '/github',
				destination: urls.social.github,
				permanent: true,
			},
			{
				source: '/gh',
				destination: urls.social.github,
				permanent: true,
			},
			{
				source: '/instagram',
				destination: urls.social.instagram,
				permanent: true,
			},
			{
				source: '/insta',
				destination: urls.social.instagram,
				permanent: true,
			},
			{
				source: '/ig',
				destination: urls.social.instagram,
				permanent: true,
			},
			{
				source: '/x',
				destination: urls.social.x,
				permanent: true,
			},
			{
				source: '/twitter',
				destination: urls.social.x,
				permanent: true,
			},
			{
				source: '/music',
				destination: urls.music.applemusic,
				permanent: true,
			},
			{
				source: '/applemusic',
				destination: urls.music.applemusic,
				permanent: true,
			},
			{
				source: '/apple-music',
				destination: urls.music.applemusic,
				permanent: true,
			},
			{
				source: '/nptelcompanion',
				destination: urls.projects.nptelcompanion,
				permanent: true,
			},
			{
				source: '/nptel',
				destination: urls.projects.nptelcompanion,
				permanent: true,
			},
			{
				source: '/vitc',
				destination: urls.projects.vitcfacultyinfo,
				permanent: true,
			},
			{
				source: '/vitcfacultyinfo',
				destination: urls.projects.vitcfacultyinfo,
				permanent: true,
			},
		];
	},
};
