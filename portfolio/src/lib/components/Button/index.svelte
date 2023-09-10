<script lang="ts">
	import clsx from 'clsx';
	import Typography from '../Typography/index.svelte';
	let clazz: string = '';
	export { clazz as class };
</script>

<button class={clsx('navigateButton hover', clazz)} on:click>
	<Typography>
		<slot />
	</Typography>
</button>

<style>
	.navigateButton {
		background-image: radial-gradient(
			circle,
			#e6fffd,
			#b2effe,
			#8bdaff,
			#8ebeff,
			#b799ff
		);
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 5px;
	}
	.hover:hover {
		filter: brightness(0.6);
	}
</style>
