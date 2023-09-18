<script lang="ts">
	import Typography from '$lib/components/Typography/index.svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	export let value: any = '';
	export let label = '';
	export let fullWidth = false;
	export let error = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let placeholder: string = '';
</script>

<div class="flex flex-col">
	{#if label}
		<label for="input">
			<Typography>{label}</Typography>
		</label>
	{/if}
	{#if type === 'number'}
		<input
			on:keydown
			on:keypress
			on:keyup
			bind:value
			type="number"
			min="1"
			max="10"
			class:fullWidth
			class="rounded-md"
		/>
	{:else}
		<input
			on:keydown
			on:keypress
			on:keyup
			bind:value
			class:fullWidth
			class="rounded-md"
			{placeholder}
		/>
	{/if}
	{#if error}
		<Typography size="sm" weight="semiBold" variant="error">{error}</Typography>
	{/if}
</div>

<style>
	.fullWidth {
		width: 100%;
	}
	input {
		padding: 0.5rem;
		border: none;
	}
</style>
