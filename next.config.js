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
		BASE_URL: process.env.BASE_URL || "http://localhost:8000/api/web/", //read the value from env id empty use default value.
	},
	images: {
		domains: ["www.placecage.com", "picsum.photos", "www.w3schools.com"],
	},
};

module.exports = nextConfig;
