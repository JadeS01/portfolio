<script lang="ts">
	export { clazz as class };
	let clazz: string = '';
</script>

<div class={clazz}>
	<slot />
</div>
