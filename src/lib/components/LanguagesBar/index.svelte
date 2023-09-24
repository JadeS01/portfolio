<script lang="ts" context="module">
	export type LanguageBreakdown = {
		[key: string]: number;
	};
</script>

<script lang="ts">
	import Typography from '../Typography/index.svelte';
	import Tooltip from '../Tooltip/index.svelte';
	import { useRepoLanguages } from '$lib/queries/useRepoLanguages';
	import { derived, writable } from 'svelte/store';
	export let languages: string;

	let x: number;
	let y: number;
	const showTooltip = writable(false);
	const tooltipLanguage = writable('SQL');

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
	languagesQuery.subscribe((languagesQuery) => {
		if (languagesQuery.data === undefined) {
			languagesQuery.refetch();
		}
	});

	function mouseEnter(e: MouseEvent, language: string) {
		if (!$showTooltip) {
			showTooltip.set(true);
			tooltipLanguage.set(language);
			x = e.clientX + 5;
			y = e.clientY + 5;
		}
	}

	function mouseLeave(e: MouseEvent) {
		showTooltip.set(false);
		tooltipLanguage.set('SQL');
	}

	function mouseMove(e: MouseEvent) {
		if ($showTooltip) {
			x = e.clientX + 5;
			y = e.clientY + 5;
		}
	}
</script>

{#if $languageEntries.length > 0}
	<div class="language-bar rounded-lg">
		{#each $languageEntries as entry, idx}
			<div
				on:mouseenter={(e) => mouseEnter(e, entry.language)}
				on:mousemove={(e) => mouseMove(e)}
				on:mouseleave={(e) => mouseLeave(e)}
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
		<div
			class="language w-full"
			data-idx={`0`}
			on:mouseenter={(e) => mouseEnter(e, 'SQL')}
			on:mousemove={(e) => mouseMove(e)}
			on:mouseleave={(e) => mouseLeave(e)}
		/>
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

<Tooltip showTooltip={$showTooltip} {x} {y} class="bg-[#f1f1f1] rounded-lg p-4">
	{$tooltipLanguage}
</Tooltip>

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
	.language:hover {
		cursor: pointer;
	}
	.language2:hover {
		cursor: pointer;
	}

	.language[data-idx='0'] {
		background-color: #5680e9;
	}
	.language[data-idx='1'] {
		background-color: #84ceeb;
	}
	.language[data-idx='2'] {
		background-color: #5ab9ea;
	}
	.language[data-idx='3'] {
		background-color: #92a4ec;
	}
	.language[data-idx='4'] {
		background-color: #8860d0;
	}

	.language2[data-idx='0'] {
		background-color: #5680e9;
	}
	.language2[data-idx='1'] {
		background-color: #84ceeb;
	}
	.language2[data-idx='2'] {
		background-color: #5ab9ea;
	}
	.language2[data-idx='3'] {
		background-color: #92a4ec;
	}
	.language2[data-idx='4'] {
		background-color: #8860d0;
	}
</style>
