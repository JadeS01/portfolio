<script lang="ts">
	import RepoCard from '../../lib/components/RepoCard.svelte';
	import type { Repo } from '../../lib/components/RepoCard.svelte';
	import Typography from '../../lib/components/Typography/index.svelte';
	import Card from '../../lib/components/Card/index.svelte';
	import Button from '../../lib/components/Button/index.svelte';
	import { useRepos } from '$lib/queries/useRepos';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';
	const repos = useRepos(false);
	const derivedRepos = derived(repos, (repos) => {
		if (!repos.data || (repos.data && !repos.data[0])) return [];
		return repos.data as Repo[];
	});
	repos.subscribe((repos) => {
		if (repos.data === undefined) {
			repos.refetch();
		}
	});

	function gotoGithub() {
		goto('https://github.com/JadeS01');
	}
</script>

<Card class="p-4 flex flex-col justify-between gap-y-4">
	<div class="flex flex-row justify-between items-center gap-y-4">
		<Typography size="2xl" weight="bold">Projects</Typography>
		<Button on:click={() => gotoGithub()}>View GitHub Profile</Button>
	</div>
	<Typography
		>There are currently {$derivedRepos.length} public projects.</Typography
	>
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
