import { useQuery } from "@sveltestack/svelte-query";
import axios, { AxiosError } from 'axios'
import type { LanguageBreakdown } from "$lib/components/LanguagesBar/index.svelte";



const getLanguagesByUrl = async (url: string) => {
    const { data } = await axios.get(url)
    return data
}

export const useRepoLanguages = (url: string, enabled: boolean) => {
    return useQuery<Partial<LanguageBreakdown>, AxiosError>(['languages', url], () => getLanguagesByUrl(url), {enabled})
}