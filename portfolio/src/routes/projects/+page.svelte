<script lang="ts">
	import { onMount } from 'svelte';
	import RepoCard from '../../components/RepoCard.svelte';
	import ProfileCard from '../../components/ProfileCard.svelte';
	let repos: any = [];
	let profile: any = {};
	onMount(async () => {
		const res = await fetch('https://api.github.com/users/JadeS01/repos');
		const res2 = await fetch('https://api.github.com/users/JadeS01');
		const data = await res.json();
		const data2 = await res2.json();
		repos = data;
		profile = data2;
	});
</script>

<div>
	<div class="p-7">PROJECTS</div>
	{#if profile}
		<ProfileCard {profile} />
	{:else}
		<div>Github Profile</div>
	{/if}
	<div class="grid grid-cols-11">
		{#if repos.length}
			<ul class="col-span-9 container m-auto grid grid-cols-4 gap-4">
				{#each repos as repo}
					<li>
						<RepoCard {repo} />
					</li>
				{/each}
			</ul>
		{:else}
			<div>No repos available</div>
		{/if}
	</div>
</div>
