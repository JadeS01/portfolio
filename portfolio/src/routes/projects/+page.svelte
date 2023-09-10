<script lang="ts">
	import RepoCard from '../../lib/components/RepoCard.svelte';
	import ProfileCard from '../../lib/components/ProfileCard.svelte';
	import Typography from '../../lib/components/Typography/index.svelte';
	import Card from '../../lib/components/Card/index.svelte';

	const fetchJSON = (url: string): any =>
		new Promise((res, rej) =>
			fetch(url)
				.then((e: Response) => e.json())
				.then(res)
				.catch(rej)
		);
</script>

<Card class="p-4 flex flex-col justify-between gap-y-4">
	<Typography size="2xl" weight="bold">Projects</Typography>
	<!-- 
	{#await fetchJSON('https://api.github.com/users/JadeS01')}
		promise is pending
		<div>Github Profile</div>
	{:then profile}
		promise was fulfilled
		<ProfileCard {profile} />
	{:catch error}
		promise was rejected
		<p>Error : {error}</p>
	{/await} -->
	{#await fetchJSON('https://api.github.com/users/JadeS01/repos')}
		<Typography>No Repositories Available</Typography>
	{:then repos}
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			{#each repos as repo}
				{#if repo.name !== 'JadeS01'}
					<RepoCard {repo} />
				{/if}
			{/each}
		</div>
	{/await}
</Card>
