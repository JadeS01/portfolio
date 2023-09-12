<script lang="ts">
	import RepoCard from '../../lib/components/RepoCard.svelte';
	import type { Repo } from '../../lib/components/RepoCard.svelte';
	import ProfileCard from '../../lib/components/ProfileCard.svelte';
	import Typography from '../../lib/components/Typography/index.svelte';
	import Card from '../../lib/components/Card/index.svelte';
	import { useRepos } from '$lib/queries/useRepos';
	import { derived } from 'svelte/store';
	const repos = useRepos(false);
	const derivedRepos = derived(repos, (repos) => {
		if (!repos.data || (repos.data && !repos.data[0])) return [];
		return repos.data as Repo[];
	});
</script>

<Card class="p-4 flex flex-col justify-between gap-y-4">
	<Typography size="2xl" weight="bold">Projects</Typography>
	{#key $derivedRepos}
		{#if !$derivedRepos[0]}
			<Typography>No Repositories Available</Typography>
		{:else}
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{#each $derivedRepos as repo}
					{#if repo.name !== 'JadeS01'}
						<RepoCard {repo} />
					{/if}
				{/each}
			</div>
		{/if}
	{/key}
</Card>
