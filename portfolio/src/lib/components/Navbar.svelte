<script lang="ts">
	import Typography from './Typography/index.svelte';
</script>

<div class="mx-4 py-4">
	<nav class="flex flex-row justify-between">
		<div
			class="bg-red-500 bg-opacity-50 rounded-full w-[2rem] h-[2rem] flex justify-center text-center align-middle"
		>
			<Typography size="2xl" weight="bold">
				<a href="/">JS</a>
			</Typography>
		</div>
		<div class="flex flex-row justify-between gap-x-8">
			<Typography>
				<a href="/">Home</a>
			</Typography>

			<Typography>
				<a href="/projects">Projects</a>
			</Typography>

			<Typography>
				<a href="/resume">Resume</a>
			</Typography>
		</div>
	</nav>
</div>
