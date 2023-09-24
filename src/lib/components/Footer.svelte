<script lang="ts">
	import Typography from './Typography/index.svelte';
	const year = new Date().getFullYear();
</script>

<div class="flex items-center justify-center p-4">
	<Typography size="xs">© {year} - Jade Simien</Typography>
</div>
