<script lang="ts">
	import RepoCard from '../../components/RepoCard.svelte';
	import ProfileCard from '../../components/ProfileCard.svelte';

	const fetchJSON = (url: string): any => 
		new Promise((res, rej) => 
			fetch(url)
			.then((e:Response) => e.json())
			.then(res)
			.catch(rej)
		);

</script>

<div>
	<div class="p-7">PROJECTS</div>
	
	{#await fetchJSON('https://api.github.com/users/JadeS01')}
		<!-- promise is pending -->
		<div>Github Profile</div>
	{:then profile}
		<!-- promise was fulfilled -->
		<ProfileCard {profile} />
	{:catch error}
		<!-- promise was rejected -->
		<p>Error :(</p>
	{/await}
	
	<div class="grid grid-cols-11">
		{#await fetchJSON('https://api.github.com/users/JadeS01/repos')}
			<!-- promise is pending -->
			<div>No repos available</div>
		{:then repos}
			<!-- promise was fulfilled -->
			<ul class="col-span-9 container m-auto grid grid-cols-4 gap-4">
				{#each repos as repo}
					<li>
						<RepoCard {repo} />
					</li>
				{/each}
			</ul>
		{/await}
	</div>
</div>
