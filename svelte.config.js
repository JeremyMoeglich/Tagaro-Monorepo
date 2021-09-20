import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

import path from 'path';

import pack from 'vite-imagetools';
const { imagetools } = pack;

import pkg from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({

	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			resolve: {
				alias: {
					$static: path.resolve('static')
				}
			},
			plugins: [imagetools()]
		}
	}
};


export default config;
