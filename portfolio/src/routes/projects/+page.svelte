<script lang="ts">
	import { onMount } from 'svelte';
	import RepoCard from '../../components/RepoCard.svelte';
	let repos: any = [];
	onMount(async () => {
		const res = await fetch('https://api.github.com/users/JadeS01/repos');
		const data = await res.json();
		repos = data;
	});
</script>

<div>
	<div class="p-7">PROJECTS</div>
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
