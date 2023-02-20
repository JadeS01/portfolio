<script lang="ts">
	import { onMount } from 'svelte';
	let isMenuOpen = false;
	function toggleMenu(e: MouseEvent) {
		const element = e.target as HTMLElement;
		console.log(element.className);
		isMenuOpen = !isMenuOpen;
		let list = document.querySelector('ul');
		// element?.name === 'menu-outline'
		// 	? ((e.name = 'close-outline'),
		// 	  list?.classList.add('top-[80px]'),
		// 	  list?.classList.add('opacity-100'))
		// 	: ((e.name = 'menu-outline'),
		// 	  list?.classList.remove('top-[80px]'),
		// 	  list?.classList.remove('opacity-100'));
	}
</script>

<div>
	<nav class="peach-navbar">
		<div class="flex justify-between items-center">
			<span>
				<h1>Jade Simien</h1>
			</span>
			<span class="text-3xl cursor-pointer md:hidden block">
				{#if !isMenuOpen}
					<ion-icon name="menu-outline" on:click={toggleMenu} />
				{/if}
				{#if isMenuOpen}
					<ion-icon name="close-outline" on:click={toggleMenu} />
				{/if}
			</span>
		</div>

		<ul class="navbar-links">
			<li class="link-wrapper"><a href="/" class="peach-link">About</a></li>
			<li class="link-wrapper"><a href="/" class="peach-link">Projects</a></li>
			<li class="link-wrapper"><a href="/" class="peach-link">Resume</a></li>
			<li class="link-wrapper"><a href="/" class="peach-link">Contact</a></li>
			<button class="peach-accent-button">Theme</button>
			<h2 class="" />
		</ul>
	</nav>
</div>
