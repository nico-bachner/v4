import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		adapter: vercel(),
	},
};

export default config;
