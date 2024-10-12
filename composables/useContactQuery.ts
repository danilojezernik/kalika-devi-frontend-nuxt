import {useMutation, useQuery} from "@tanstack/vue-query";
import type {Contact} from "~/models/contact.model";
import {CONTACT_KEYS} from "~/composables/query-keys";
import {axiosClient} from "~/plugins/axisoClient";


// Get contacts
export function useContactQuery() {
    return useQuery<Contact[]>({
        queryKey: CONTACT_KEYS.privateAll,
        queryFn: async () => (await axiosClient.get<Contact[]>('/contact')).data,
        placeholderData: [] as Contact[]
    })
}

export function useSendContactQuery() {
    return useMutation({
        mutationFn: async (contact: Contact) => {
            return (await axiosClient.post<Contact>('/contact', contact)).data
        }
    })
}