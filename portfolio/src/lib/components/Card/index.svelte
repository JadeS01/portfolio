<script lang="ts">
	import clsx from 'clsx';
	export { clazz as class };
	let clazz: string = '';
	export let style: string = '';
</script>

<div class={clsx(clazz, style)}>
	<slot />
</div>
