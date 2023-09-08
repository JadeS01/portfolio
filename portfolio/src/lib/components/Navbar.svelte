<script lang="ts">
	import Typography from './Typography/index.svelte';
</script>

<div class="mx-4 py-4">
	<nav class="flex flex-row justify-between">
		<span>
			<h1><a href="/">Jade Simien</a></h1>
		</span>
		<div class="flex flex-row justify-between gap-x-8">
			<Typography>
				<a href="/about">About</a>
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
