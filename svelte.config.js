import preprocess from 'svelte-preprocess';
//import importAssets from 'svelte-preprocess-import-assets'
//import seqPreprocessor from 'svelte-sequential-preprocessor'
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
//import image from "svelte-image";

//@ts-check

const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'netlify';

const getAdapters = (adapt) => {
	switch (adapt) {
		case 'node':
			return nodeAdapter;
		case 'static':
			return staticAdapter;
		case 'netlify':
			return netlifyAdapter;
		default:
			console.log('unknown adapter, using node');
			return nodeAdapter;
	}
};

const adapter = getAdapters(adapt);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: { includePaths: ['src'] }
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			entries: ['*']
		},

		//adapter: nodeAdapter({ out: 'build',precompress: true,target: 'node16' }),
		//adapter: staticAdapter({ pages: 'build',prerender: true }),
		adapter: adapter()
	}
};

export default config;
