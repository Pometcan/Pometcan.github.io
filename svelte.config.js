import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: false
		}),
		paths: {
			base: '/Pometcan.github.io', // Projeye özgü olarak düzenleyin
		},
		files: {
			assets: 'static'
		},
		prerender: {
      	entries: ['/', '/blog', '/blog/hello-world', '/blog/another-post', '/blog/yet-another-post', '/blog/one-more-post'],
			handleHttpError({ error, request }) {
			  if (error && error.message) {
				console.error(`HTTP Error: ${error.message}`);
			  } else {
				console.error(`An unexpected HTTP error occurred.`);
			  }
			  if (request && request.url) {
				console.error(`Request URL: ${request.url}`);
			  } else {
				console.error(`Request object is undefined or null.`);
			  }
			  // Gerekli işlemi yapın veya hata yönetimini sağlayın
			}
		  }
	}
};

export default config;
