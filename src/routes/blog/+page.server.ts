import { posts } from './data';

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
