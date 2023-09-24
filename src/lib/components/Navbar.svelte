<script lang="ts">
	import Button from '../components/Button/index.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived, type Readable } from 'svelte/store';

	function gotoHome() {
		goto('/');
	}
	function gotoProjects() {
		goto('/projects');
	}
	function gotoResume() {
		goto('/resume');
	}

	const activePage: Readable<'/' | '/projects' | '/resume'> = derived(
		page,
		(page) => {
			return page.route.id as '/' | '/projects' | '/resume';
		}
	);
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
			<Button
				on:click={() => gotoHome()}
				noPadding
				variant="noBackground"
				isActive={$activePage === '/'}
				typographyVariant="nav">Home</Button
			>
			<Button
				on:click={() => gotoProjects()}
				noPadding
				variant="noBackground"
				isActive={$activePage === '/projects'}
				typographyVariant="nav">Projects</Button
			>
			<Button
				on:click={() => gotoResume()}
				noPadding
				variant="noBackground"
				isActive={$activePage === '/resume'}
				typographyVariant="nav">Resume</Button
			>
		</div>
	</nav>
</div>

<style>
	.background {
		background-color: #e6fffd;
	}
</style>
