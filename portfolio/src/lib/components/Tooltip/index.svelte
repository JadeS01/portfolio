<script lang="ts">
	import Card from '../Card/index.svelte';
	export let showTooltip: boolean = false;
	export let x: number;
	export let y: number;
	let clazz: string;
	export { clazz as class };
</script>

{#if showTooltip}
	<div style="position: fixed; left: {x}px; top: {y}px">
		<Card class={clazz}>
			<slot />
		</Card>
	</div>
{/if}
