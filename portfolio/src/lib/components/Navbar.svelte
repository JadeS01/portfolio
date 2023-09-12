<script lang="ts">
	import Typography from './Typography/index.svelte';
	import { goto } from '$app/navigation';

	function gotoHome() {
		goto('/');
	}
</script>

<div class="background p-4 sticky top-0 z-10 w-full">
	<nav class="flex flex-row justify-between">
		<img
			class="hover:cursor-pointer"
			src="Logo2.svg"
			alt="icon"
			width="50px"
			height="50px"
			on:click={() => gotoHome()}
			on:keydown={() => gotoHome()}
		/>
		<div
			class="flex flex-row justify-between sm:gap-x-8 gap-x-4 transition-transform ease-in transform"
		>
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

<style>
	.background {
		background-color: #e6fffd;
	}
</style>
