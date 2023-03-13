/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import preprocess from 'svelte-preprocess';
import { optimizeImports } from 'carbon-preprocess-svelte';
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';

//@ts-check

const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'node';

const getAdapters = (adapt) => {
    switch (adapt) {
        case 'node':
            return nodeAdapter();
        case 'static':
            return staticAdapter();
        case 'netlify':
            return netlifyAdapter();
        default:
            throw new Error(`Adapter ${adapt} not found`);
    }
};

const adapter = getAdapters(adapt);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        }),
        optimizeImports()
    ],
    kit: {
        adapter: adapter
    }
};


export default config;