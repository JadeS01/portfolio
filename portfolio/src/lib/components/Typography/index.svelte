<script lang="ts" context="module">
	export type TypographySize =
		| 'xs'
		| 'sm'
		| 'base'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl';
	export type TypographyWeight = 'light' | 'base' | 'semiBold' | 'bold';
	export type TypographyVariant =
		| 'error'
		| 'base'
		| 'success'
		| 'button'
		| 'nav'
		| 'inherit';
</script>

<script lang="ts">
	import clsx from 'clsx';
	let clazz: string = '';
	export { clazz as class };
	export let size: TypographySize = 'base';
	export let weight: TypographyWeight = 'base';
	export let variant: TypographyVariant = 'base';
</script>

<div
	on:click
	on:keydown
	class={clsx('font-plus-jakarta-sans', 'text-primary', clazz, {
		'text-xs': size === 'xs',
		'text-sm': size === 'sm',
		'text-base': size === 'base',
		'text-md': size === 'md',
		'text-lg': size === 'lg',
		'text-xl': size === 'xl',
		'text-2xl': size === '2xl',
		'text-3xl': size === '3xl',
		'font-light': weight === 'light',
		'font-normal': weight === 'base',
		'font-semibold': weight === 'semiBold',
		'font-bold': weight === 'bold',
		'text-red-600': variant === 'error',
		'text-green-500': variant === 'success',
		'text-white': variant === 'button',
		'text-primary': variant === 'nav',
		'text-inherit': variant === 'inherit'
	})}
>
	<slot />
</div>
