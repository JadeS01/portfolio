<script lang="ts">
	import Button from '../components/Button/index.svelte';
	import Typography from './Typography/index.svelte';
	import { goto } from '$app/navigation';

	function gotoHome() {
		goto('/');
	}
	function gotoProjects() {
		goto('/projects');
	}
	function gotoResume() {
		goto('/resume');
	}
</script>

<div class="background p-4 sticky top-0 z-10 w-full">
	<nav class="flex flex-row justify-between items-center">
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
			<Button noBackground on:click={() => gotoHome()} noPadding>Home</Button>
			<Button noBackground on:click={() => gotoProjects()} noPadding
				>Projects</Button
			>
			<Button noBackground on:click={() => gotoResume()} noPadding
				>Resume</Button
			>
		</div>
	</nav>
</div>

<style>
	.background {
		background-color: #e6fffd;
	}
</style>
