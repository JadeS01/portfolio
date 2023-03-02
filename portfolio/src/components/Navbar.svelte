<script lang="ts">
	import Dropdown from './Dropdown.svelte';

	function toggleMenu() {
		if (typeof document !== 'undefined') {
			const icon = document.querySelector('#icon');
			const links = document.querySelector('#links');
			const navLinks = document.querySelector('#nav-links');
			// navLinks?.classList.toggle('hidden');
			icon?.classList.toggle('bg-current-darken');
			links?.classList.toggle('hidden');
		} else {
			console.warn('could not access document');
		}
	}
</script>

<div>
	<nav class="peach-navbar">
		<div class="flex justify-between items-center">
			<span>
				<h1><a href="/">Jade Simien</a></h1>
			</span>
			<div id="icon" class="space-y-1 md:hidden cursor-pointer z-20 p-2" on:click={toggleMenu}>
				<div class="w-6 h-0.5 bg-peach-lines" />
				<div class="w-6 h-0.5 bg-peach-lines" />
				<div class="w-6 h-0.5 bg-peach-lines" />
			</div>
		</div>

		<ul id="nav-links" class="navbar-links">
			<li class="link-wrapper"><a href="/about" class="peach-link">About</a></li>
			<li class="link-wrapper"><a href="/projects" class="peach-link">Projects</a></li>
			<li class="link-wrapper"><a href="/resume" class="peach-link">Resume</a></li>
			<!-- <button class="peach-accent-button">Theme</button> -->
			<Dropdown />
		</ul>

		<ul id="links" class="hidden navbar-mobile">
			<li><a href="/about" class="peach-link">About</a></li>
			<li><a href="/projects" class="peach-link">Projects</a></li>
			<li><a href="/resume" class="peach-link">Resume</a></li>
			<!-- <button id="theme-button" class="peach-accent-button">Theme</button> -->
			<Dropdown />
		</ul>
	</nav>
</div>
