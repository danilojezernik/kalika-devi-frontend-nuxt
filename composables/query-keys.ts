import type { MaybeRef } from "vue"; // Importing MaybeRef type from Vue to handle refs and non-refs

/**
 * BLOG_KEYS object:
 * Defines the query keys for caching and fetching blog data via Vue Query.
 * The keys are used to uniquely identify different blog-related queries.
 */
export const BLOG_KEYS = {
    /**
     * Key for querying all blogs.
     * Usage: BLOG_KEYS.all
     */
    all: ['blogs'] as const,

    /**
     * Key for querying details of a specific blog by ID.
     * @param id - The ID of the blog (can be a ref or a normal string).
     * Usage: BLOG_KEYS.details(id)
     */
    details: (id: MaybeRef<string>) => [...BLOG_KEYS.all, id],

    /**
     * Key for querying a limited number of blogs.
     * @param limit - The limit for the number of blogs to fetch (can be a ref or a normal number).
     * Usage: BLOG_KEYS.limited(limit)
     */
    limited: (limit: MaybeRef<number>) => [...BLOG_KEYS.all, 'limited', limit],

    /**
     * Key for querying all private blogs (requires authentication).
     * Usage: BLOG_KEYS.privateAll
     */
    privateAll: ['privateBlogs'] as const,

    /**
     * Key for querying details of a specific private blog by ID (requires authentication).
     * @param id - The ID of the private blog (can be a ref or a normal string).
     * Usage: BLOG_KEYS.privateDetails(id)
     */
    privateDetails: (id: MaybeRef<string>) => [...BLOG_KEYS.privateAll, id]
}

/**
 * CONTACT_KEYS object:
 * Defines the query keys for caching and fetching contact data via Vue Query.
 * The keys are used to uniquely identify different contact-related queries.
 */
export const CONTACT_KEYS = {
    /**
     * Key for querying all contacts.
     * Usage: CONTACT_KEYS.all
     */
    all: ['contact'] as const,

    /**
     * Key for querying details of a specific contact by ID.
     * @param id - The ID of the contact (can be a ref or a normal string).
     * Usage: CONTACT_KEYS.details(id)
     */
    details: (id: MaybeRef<string>) => [...CONTACT_KEYS.all, id],

    /**
     * Key for querying all private contacts (requires authentication).
     * Usage: CONTACT_KEYS.privateAll
     */
    privateAll: ['privateContact'] as const,

    /**
     * Key for querying details of a specific private contact by ID (requires authentication).
     * @param id - The ID of the private contact (can be a ref or a normal string).
     * Usage: CONTACT_KEYS.privateDetails(id)
     */
    privateDetails: (id: MaybeRef<string>) => [...CONTACT_KEYS.privateAll, id]
}
