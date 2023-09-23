<script lang="ts">
	import RepoCard from '../../lib/components/RepoCard.svelte';
	import type { Repo } from '../../lib/components/RepoCard.svelte';
	import Typography from '../../lib/components/Typography/index.svelte';
	import Card from '../../lib/components/Card/index.svelte';
	import Button from '../../lib/components/Button/index.svelte';
	import Filter from '../../lib/components/Filter/index.svelte';
	import { useRepos } from '$lib/queries/useRepos';
	import { derived, writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { useRepoLanguages } from '$lib/queries/useRepoLanguages';
	const repos = useRepos(false);
	const selectedOption = writable('All Languages');
	const map: { [key: string]: string } = {
		JavaScript: 'JavaScript',
		TypeScript: 'TypeScript',
		Swift: 'Swift',
		Python: 'Roff',
		Java: 'Java',
		C: 'C',
		Vue: 'Vue',
		'All Languages': ''
	};
	const derivedOption = derived(selectedOption, (option) => {
		return map[option];
	});
	const derivedRepos = derived([derivedOption, repos], ([selected, repos]) => {
		if (!repos.data || (repos.data && !repos.data[0])) return [];
		if (selected !== '') {
			return repos.data.filter((repo) => repo?.language === selected) as Repo[];
		}
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
		<Button
			on:click={() => gotoGithub()}
			variant="redirect"
			typographyVariant="inherit">View GitHub Profile</Button
		>
	</div>
	<div class="flex flex-row justify-between items-center gap-y-4">
		<Typography>
			{#if $derivedOption !== ''}
				There {$derivedRepos.length === 1 ? 'is' : 'are'} currently {$derivedRepos.length}
				project{$derivedRepos.length === 1 ? '' : 's'} that use{$derivedRepos.length ===
				1
					? 's'
					: ''} this language.
			{:else}
				There are currently {$derivedRepos.length} public project{$derivedRepos.length ===
				1
					? ''
					: 's'}.
			{/if}
		</Typography>
		<Filter {selectedOption} />
	</div>
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
