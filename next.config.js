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
};
