<script lang="ts">
	import Typography from '../Typography/index.svelte';
	export let languages: string;

	const fetchJSON = (languages: string): any =>
		new Promise((res, rej) =>
			fetch(languages)
				.then((e: Response) => e.json())
				.then(res)
				.catch(rej)
		);

	type LanguageEntries = { language: string; percentage: number };
	let languageEntries: LanguageEntries[];
	$: languageEntries = [];
	const languageBreakdown = (languages: any): [string, number][] => {
		const entries = Object.entries(languages) as [string, number][];
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
		return entries;
	};
</script>

{#await fetchJSON(languages)}
	<Typography>No Languages</Typography>
{:then languages}
	<div class="flex flex-col gap-y-2">
		<Typography size="sm" weight="light">Languages:</Typography>
		<div class="language-bar">
			{#key languageBreakdown(languages)}
				{#if languageEntries.length > 0}
					{#each languageEntries as entry, idx}
						<div
							class="language"
							style={`width: ${entry.percentage}%`}
							data-idx={`${idx}`}
						>
							{entry.language}
						</div>
					{/each}
				{:else}
					<div class="language w-full" data-idx={`0`}>SQL</div>
				{/if}
			{/key}
		</div>
	</div>
{/await}

<style>
	.language-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
		border-radius: 4px;
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
</style>
