import { error } from '@sveltejs/kit';
import { posts } from '../data';

export const prerender = true;
export const ssr = true;
export const trailingSlash = 'ignore';
export function load({ params }: { params: any }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
