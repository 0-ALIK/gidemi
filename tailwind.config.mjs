/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				titulos: ['Staatliches', 'serif'],
				parrafos: ['Roboto Condensed', 'sans-serif'],
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#b2c11e",
					"secondary": "#18557d",
					"accent": "#BE3DF9",
					"neutral": "#001b23",
					"base-100": "#f3f4f6",
					"info": "#4b5563",
					"success": "#4ade80",
					"warning": "#fef08a",			  
					"error": "#f87171",
				},
			}
		],
	},
}
