<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let options: any = [{}];
	export let thisTheme: string = '';
	const dispatch = createEventDispatcher();
	let isOpen = false;
	function toggleDrop() {
		isOpen = !isOpen;
	}

	function selectValue(value: string) {
		thisTheme = value;
		dispatch('select', thisTheme);
		toggleDrop();
	}
</script>

<div class="dropdown relative">
	<button
		class="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
		on:click={toggleDrop}
	>
		<span class="capitalize">{thisTheme || 'Theme'}</span>
		<svg class="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 14l6-6-1.41-1.41L10 11.17l-4.59-4.58L4 8l6 6z" />
		</svg>
	</button>
	{#if isOpen}
		<div class="dropdown-menu absolute z-50 right-0">
			<ul class="list-reset">
				{#each options as option}
					<li>
						<button class="w-full text-left px-4 py-2" on:click={() => selectValue(option.value)}
							>{option.label}</button
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.dropdown-menu {
		min-width: 10rem;
		padding: 0.5rem 0;
		margin: 0.125rem 0 0;
		font-size: 1rem;
		color: #212529;
		text-align: left;
		list-style: none;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #dee2e6;
		border-radius: 0.25rem;
	}
</style>
