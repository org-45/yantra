/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators:{
		buildActivity: false
	},
	distDir:'build',
	ignoreDuringBuilds : false,
	generateEtags:false,
}

module.exports = nextConfig
