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
		domains: ["www.placecage.com", "picsum.photos", "www.w3schools.com"],
	},
	output: "standalone",
};

module.exports = nextConfig;
