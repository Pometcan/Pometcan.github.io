import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	base: "/Pometcan.github.io/",
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
