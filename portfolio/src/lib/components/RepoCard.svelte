<script lang="ts" context="module">
	export type Repo = {
		name: string;
		description: string;
		html_url: string;
		language: string;
		languages_url: string;
	};
</script>

<script lang="ts">
	import Card from '../components/Card/index.svelte';
	import Typography from '../components/Typography/index.svelte';
	import Button from '../components/Button/index.svelte';
	import LanguagesBar from '../components/LanguagesBar/index.svelte';
	import { goto } from '$app/navigation';
	export let repo: Partial<Repo>;
	let language: string;
	$: language = repo.language || 'SQL';
	$: if (language === 'Roff') {
		language = 'Python';
	}
	function gotoRepo() {
		if (repo.html_url) {
			goto(repo.html_url);
		}
	}
</script>

<Card
	class="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg p-4 h-full justify-between"
>
	<div>
		<Typography size="md" weight="semiBold">{repo.name}</Typography>
		<Typography>{repo.description || 'No Description'}</Typography>
	</div>
	{#if repo.languages_url}
		<LanguagesBar languages={repo.languages_url} />
	{/if}
	<Button class="w-full" on:click={() => gotoRepo()}>View Repository</Button>
</Card>
