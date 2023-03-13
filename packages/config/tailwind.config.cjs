const config = {
	content: [
		'../../packages/components/**/*.{html,js,svelte,md,svx,ts}',
		'!../../packages/components/**/node_modules/**/*',
		'../../apps/*/src/**/*.{html,js,svelte,md,svx,ts}'
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#2563eb",
					"secondary": "#fb7185",
					"accent": "#fdba74",
					"neutral": "#191D24",
					"base-100": "#2A303C",
					"info": "#3ABFF8",
					"success": "#36D399",
					"warning": "#FBBD23",
					"error": "#F87272",
				},
			},
		],
	},
	plugins: [
		require('daisyui'),
	],
}; module.exports = config;
