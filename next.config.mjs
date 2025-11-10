/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: `https`,
				hostname: `www.anelk.com.br`,
			},
			{
				protocol: `https`,
				hostname: `www.andtextil.com.br`,
				// permite qualquer caminho ou arquivo neste dominio
				pathname: `/**`,
			},
		],
	},
};

export default nextConfig;
