<script lang="ts">
	import clsx from 'clsx';
	import Typography, {
		type TypographyVariant
	} from '../Typography/index.svelte';
	let clazz: string = '';
	export let noPadding: boolean = false;
	export let buttonType: 'reset' | 'submit' | 'button' | null | undefined =
		'button';
	export let variant: 'base' | 'close' | 'redirect' | 'noBackground' = 'base';
	export let isActive: boolean = false;
	export let typographyVariant: TypographyVariant = 'button';
	export { clazz as class };
</script>

<button
	type={buttonType}
	class={clsx('navigateButton', clazz, {
		'primary hover': variant === 'base',
		'bg-none': variant === 'noBackground',
		padding: !noPadding,
		'bg-gray-400 hover': variant === 'close',
		nav: typographyVariant === 'nav',
		'redirect hover': variant === 'redirect',
		active: isActive
	})}
	on:click
>
	<Typography variant={typographyVariant}>
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
		background-color: #2f86ae;
	}
	.hover:hover {
		filter: brightness(0.6);
	}
	.redirect {
		background-color: #84ceeb;
		color: rgb(64, 103, 90);
	}
	button.nav {
		border: none;
		cursor: pointer;
		text-decoration: none;
		position: relative;
	}
	button.nav {
		transition: all 0.3s ease;
	}
	button.nav::before,
	button.active::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(
			to right,
			#b799ff,
			#a3abff,
			#96bbff,
			#93c9ff,
			#9bd4ff,
			#a3dcfe,
			#ace3fe,
			#b8eafd,
			#c2f0fc,
			#cdf5fb,
			#d9fafb,
			#e6fffd
		);
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.3s ease;
	}
	button.nav:hover::before,
	button.active::before {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
