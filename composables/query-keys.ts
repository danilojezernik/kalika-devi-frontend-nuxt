import type {MaybeRef} from "vue";

export const BLOG_KEYS = {
    all: ['blogs'] as const,
    details: (id: MaybeRef<string>) => [...BLOG_KEYS.all, id],
    limited: (limit: MaybeRef<number>) => [...BLOG_KEYS.all, 'limited', limit],
    privateAll: ['privateBlogs'] as const,
    privateDetails: (id: MaybeRef<string>) => [...BLOG_KEYS.privateAll, id]
}