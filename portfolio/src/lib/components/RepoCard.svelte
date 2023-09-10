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
	export let repo: Partial<Repo>;
	let language: string;
	$: language = repo.language || 'SQL';
	$: if (language === 'Roff') {
		language = 'Python';
	}
	$: logo = `https://img.shields.io/badge/${language}-ffff?style=for-the-badge&logo=${language.toLowerCase()}&logoColor=white`;
</script>

<!-- <Card class="flex flex-row gap-x-4 bg-white shadow-lg rounded-lg p-4 h-full">
	<div>{repo.language}</div>
	<div>
		<img src={logo} alt="img" />
	</div>
	<div class="flex flex-col w-full h-full">
		<Typography size="md" weight="semiBold">{repo.name}</Typography>
		<Typography>{repo.description || 'No Description'}</Typography>
		Show Languages bar
		<Button class="flex self-end items-end">
			<a href={repo.html_url}>View Repo</a>
		</Button>
	</div>
</Card> -->

<Card
	class="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg p-4 h-full justify-between"
>
	<div>
		<Typography size="md" weight="semiBold">{repo.name}</Typography>
		<Typography>{repo.description || 'No Description'}</Typography>
	</div>
	<!-- Language Bar -->
	{#if repo.languages_url}
		<LanguagesBar languages={repo.languages_url} />
	{/if}
	<Button class="w-full"><a href={repo.html_url}>View Repository</a></Button>
</Card>
