import preprocess from 'svelte-preprocess';

import multiAdapter from '@macfja/svelte-multi-adapter'
import staticAdapter from '@sveltejs/adapter-static'
import nodeAdapter from '@sveltejs/adapter-node'

import { imagetools } from 'vite-imagetools';

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

		adapter: nodeAdapter({ out: 'build',precompress: true,target: 'node16' }),
		//adapter: staticAdapter({ pages: 'build',prerender: true }),

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [imagetools({ force: true })]
		}
	}
};


export default config;
