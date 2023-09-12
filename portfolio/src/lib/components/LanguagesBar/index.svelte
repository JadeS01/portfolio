<script lang="ts" context="module">
	export type LanguageBreakdown = {
		[key: string]: number;
	};
</script>

<script lang="ts">
	import Typography from '../Typography/index.svelte';
	import { useRepoLanguages } from '$lib/queries/useRepoLanguages';
	import { derived } from 'svelte/store';
	export let languages: string;

	const languagesQuery = useRepoLanguages(languages, false);
	type LanguageEntries = { language: string; percentage: number };
	const languageEntries = derived(languagesQuery, (languagesQuery) => {
		if (!languagesQuery.data) return [];
		const languages = languagesQuery.data;
		const entries = Object.entries(languages) as [string, number][];
		const languageEntries: LanguageEntries[] = [];
		let total = (Object.values(languages) as number[]).reduce(
			(a: number, b: number) => {
				return a + b;
			},
			1
		);
		entries.forEach(([lang, num]) => {
			const percentage = (num / total) * 100;
			languageEntries.push({ language: lang, percentage } as LanguageEntries);
		});
		return languageEntries;
	});
</script>

{#if $languageEntries.length > 0}
	<div class="language-bar rounded-lg">
		{#each $languageEntries as entry, idx}
			<div
				class="language"
				style={`width: ${entry.percentage}%`}
				data-idx={`${idx}`}
			/>
		{/each}
	</div>
	<div class="grid grid-cols-2">
		{#each $languageEntries as entry, idx}
			<div class="flex flex-row gap-x-1">
				<div
					class="language2 w-2 h-2 rounded-full flex justify-center self-center"
					data-idx={`${idx}`}
				/>
				<div class="flex flex-row gap-x-2 justify-center items-center">
					<Typography>{entry.language}</Typography>
					<Typography size="sm" class="text-opacity-60"
						>{entry.percentage.toFixed(0)}%</Typography
					>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="language-bar rounded-lg">
		<div class="language w-full" data-idx={`0`} />
	</div>
	<div class="flex flex-row gap-x-2">
		<div
			class="language2 w-2 h-2 rounded-full flex justify-center self-center"
			data-idx={`0`}
		/>
		<div class="flex flex-row gap-x-2 justify-center items-center">
			<Typography>SQL</Typography>
			<Typography size="sm" class="text-opacity-60">100%</Typography>
		</div>
	</div>
{/if}

<style>
	.language-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		width: 100%;
	}

	.language {
		flex-grow: 1;
		text-align: center;
		padding: 8px;
		font-size: 14px;
		background-color: #f1f1f1;
	}

	.language[data-idx='0'] {
		background-color: #5680e9; /* Set your language color here */
	}
	.language[data-idx='1'] {
		background-color: #84ceeb; /* Set your language color here */
	}
	.language[data-idx='2'] {
		background-color: #5ab9ea; /* Set your language color here */
	}
	.language[data-idx='3'] {
		background-color: #92a4ec; /* Set your language color here */
	}
	.language[data-idx='4'] {
		background-color: #8860d0; /* Set your language color here */
	}

	.language2[data-idx='0'] {
		background-color: #5680e9; /* Set your language color here */
	}
	.language2[data-idx='1'] {
		background-color: #84ceeb; /* Set your language color here */
	}
	.language2[data-idx='2'] {
		background-color: #5ab9ea; /* Set your language color here */
	}
	.language2[data-idx='3'] {
		background-color: #92a4ec; /* Set your language color here */
	}
	.language2[data-idx='4'] {
		background-color: #8860d0; /* Set your language color here */
	}
</style>
