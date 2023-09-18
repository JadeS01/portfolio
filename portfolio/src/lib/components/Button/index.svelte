<script lang="ts">
	import clsx from 'clsx';
	import Typography from '../Typography/index.svelte';
	let clazz: string = '';
	export let noBackground: boolean = false;
	export let noPadding: boolean = false;
	export let buttonType: 'reset' | 'submit' | 'button' | null | undefined =
		'button';
	export let variant: 'base' | 'close' = 'base';
	export { clazz as class };
</script>

<button
	type={buttonType}
	class={clsx('navigateButton hover', clazz, {
		primary: variant === 'base' && !noBackground,
		padding: !noPadding,
		'bg-gray-400': variant === 'close'
	})}
	on:click
>
	<Typography>
		<slot />
	</Typography>
</button>

<style>
	.navigateButton {
		border-radius: 5px;
	}
	.padding {
		padding: 0.5rem 1rem 0.5rem 1rem;
	}
	.primary {
		background-image: radial-gradient(
			circle,
			#e6fffd,
			#b2effe,
			#8bdaff,
			#8ebeff,
			#b799ff
		);
	}
	.hover:hover {
		filter: brightness(0.6);
	}
</style>
