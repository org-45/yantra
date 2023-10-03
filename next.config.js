/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators:{
		buildActivity: false
	},
	distDir:'build',
	generateEtags:false,
}

module.exports = nextConfig
