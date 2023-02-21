<script lang="ts">
	let name = 'Jade';
	let theme = 'lavender';
	import Footer from '../components/Footer.svelte';
</script>

<h1 class="bg-peach-primary">Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<footer class="lavender-card">
	<!-- can pass props like {...props}-->
	<Footer {theme} />
	<Footer />
</footer>

<!-- conditions in svelte:
{#if x > 10}
{:else if 5 > x}
{:else}
{/if} -->
