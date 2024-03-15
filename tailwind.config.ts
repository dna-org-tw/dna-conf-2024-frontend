import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			backgroundSize: {
				'w-100%': '100% auto',
			},
			letterSpacing: {
				widest: '0.2em',
			},
			colors: {
				brand: {
					gray: '#1E1F1C',
				},
				cta: '#E74310',
			},
		},
	},
	plugins: [],
};
export default config;
