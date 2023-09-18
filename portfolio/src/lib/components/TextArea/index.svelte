<script lang="ts">
	import Typography from '$lib/components/Typography/index.svelte';
	export let value: any = '';
	export let label = '';
	export let fullWidth = false;
	export let placeholder = '';
	export let error = '';
</script>

<div class="flex flex-col">
	{#if label}
		<label for="input">
			<Typography>{label}</Typography>
		</label>
	{/if}
	<textarea
		class="rounded-md"
		class:fullWidth
		{placeholder}
		on:keydown
		on:keypress
		on:keyup
		bind:value
	/>
	{#if error}
		<Typography size="sm" weight="semiBold" variant="error">{error}</Typography>
	{/if}
</div>

<style>
	.fullWidth {
		width: 100%;
	}
	textarea {
		padding: 0.5rem;
		border: none;
	}
</style>
