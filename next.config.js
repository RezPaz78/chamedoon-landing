/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["tsx"],
	output: "standalone",
	eslint: {
		dirs: ["pages", "components"],
	},
};

module.exports = nextConfig;
