import { posts } from './data';

export const prerender = true;
export const ssr = true;
export const trailingSlash = 'ignore';

export function load() {
    return {
        summaries: posts.map((post: any) => ({
            slug: post.slug,
            title: post.title,
            date: post.date,
            group: post.group,
            description: post.description
        })),
        groups: ["group1", "group2"]
    };
}
