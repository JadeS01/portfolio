import { useQuery } from "@sveltestack/svelte-query";
import axios, { AxiosError} from 'axios'
import type { Repo } from "$lib/components/RepoCard.svelte";

// const TWO_HOURS = 1000 * 60 * 60 * 2

async function getRepos() {
    const { data } = await axios.get(
        'https://api.github.com/users/JadeS01/repos'
    )
    return data
}

export const useRepos = (enabled: boolean) => {
    return useQuery<Partial<Repo[]>, AxiosError>('repos', getRepos, {enabled})
}