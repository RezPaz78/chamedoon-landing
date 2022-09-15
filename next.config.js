/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["tsx"],
	output: "standalone",
	eslint: {
		dirs: ["pages", "components"],
	},
	env: {
		BASE_URL: process.env.BASE_URL, //read the value from env id empty use default value.
	},
	images: {
		domains: ["www.placecage.com", "picsum.photos", "www.w3schools.com", "37.32.28.207"],
	},
	output: "standalone",
	// for svg
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
		fileLoaderRule.exclude = /\.svg$/;
		config.module.rules.push({
			test: /\.svg$/,
			loader: require.resolve("@svgr/webpack"),
		});
		return config;
	},
};

module.exports = nextConfig;
