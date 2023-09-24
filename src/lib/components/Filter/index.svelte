<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let selectedOption: Writable<string>;
	let isOpen = false;
	let options: string[] = [
		'JavaScript',
		'TypeScript',
		'Swift',
		'Python',
		'Java',
		'C',
		'Vue',
		'All Languages'
	];

	function toggleDropdown() {
		isOpen = !isOpen;
	}
	function selectOption(option: string) {
		selectedOption.set(option);
		isOpen = false;
	}
	function handleBackdrop(event: Event) {
		if (event.target !== event.currentTarget) {
			isOpen = false;
		}
	}
</script>

<div class="dropdown-container relative">
	<button
		class="bg-[#8860d0] text-[#e9e5f1] padding rounded-md focus:outline-none flex flex-row justify-between gap-x-2 items-center w-[175px]"
		on:click={toggleDropdown}
	>
		{$selectedOption || 'Filter Projects'}
		<i class="fa fa-filter p-0" aria-hidden="true" />
	</button>

	{#if isOpen}
		<div
			class="dropdown-options absolute left-0 bg-white border border-gray-300 rounded-md overflow-hidden w-full"
		>
			{#each options as option (option)}
				<div
					class="py-2 px-4 cursor-pointer hover:bg-gray-100 w-full"
					on:click={() => selectOption(option)}
					on:keydown={() => selectOption(option)}
					on:click={(e) => handleBackdrop(e)}
					on:keydown={(e) => handleBackdrop(e)}
				>
					{option}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.padding {
		padding: 0.5rem 1rem 0.5rem 1rem;
	}
</style>
