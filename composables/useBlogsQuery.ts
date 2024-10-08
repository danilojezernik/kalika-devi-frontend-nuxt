import {useQuery, useMutation} from '@tanstack/vue-query'
import {computed, unref, type MaybeRef} from 'vue'
import type {Blog} from '@/models/blog.model'
import {axiosClient} from "~/plugins/axisoClient";
import {BLOG_KEYS} from "~/composables/query-keys";

// Get all blogs
export function useGetAllBlogsQuery() {
    return useQuery<Blog[]>({
        queryKey: BLOG_KEYS.all,
        queryFn: async () => (await axiosClient.get<Blog[]>('/blog')).data,
        placeholderData: [] as Blog[],
    })
}

// Get blog by ID
export function useGetBlogByIdQuery(id: MaybeRef<string>) {
    return useQuery<Blog>({
        queryKey: BLOG_KEYS.details(id),
        queryFn: async () => (await axiosClient.get<Blog>(`/blog/${unref(id)}`)).data,
        enabled: computed(() => unref(id) != null),
        placeholderData: {} as Blog,
    })
}

// Get limited blogs
export function useGetLimitedBlogsQuery(limit: MaybeRef<number>) {
    return useQuery<Blog[]>({
        queryKey: BLOG_KEYS.limited(limit),
        queryFn: async () => (await axiosClient.get<Blog[]>(`/blog/limited?limit=${unref(limit)}`)).data,
        placeholderData: [] as Blog[],
        enabled: computed(() => unref(limit) != null),
    })
}

// Get all blogs (private)
export function useGetPrivateAllBlogsQuery() {
    return useQuery<Blog[]>({
        queryKey: BLOG_KEYS.privateAll,
        queryFn: async () => (await axiosClient.get<Blog[]>('/blog/admin')).data,
        placeholderData: [] as Blog[],
    })
}

// Get blog by ID (private)
export function useGetPrivateBlogByIdQuery(id: MaybeRef<string>) {
    return useQuery<Blog>({
        queryKey: BLOG_KEYS.privateDetails(id),
        queryFn: async () => (await axiosClient.get<Blog>(`/blogs/admin/${unref(id)}`)).data,
        enabled: computed(() => unref(id) != null),
        placeholderData: {} as Blog,
    })
}

// Add a new blog (private)
export function useAddNewBlogMutation() {
    return useMutation({
        mutationFn: async (blog: Blog) => {
            return (await axiosClient.post<Blog>('/blog', blog)).data
        },
    })
}

// Edit a blog by ID (private)
export function useEditBlogMutation() {
    return useMutation({
        mutationFn: async ({id, blog}: { id: string; blog: Blog }) => {
            return (await axiosClient.put<Blog>(`/blog/${id}`, blog)).data
        },
    })
}

// Delete a blog by ID (private)
export function useDeleteBlogMutation() {
    return useMutation({
        mutationFn: async (id: string) => {
            return (await axiosClient.delete(`/blog/${id}`)).data
        },
    })
}