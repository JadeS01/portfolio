<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main>
	<Navbar />
	<div class="pt-12">
		<slot />
	</div>
	<Footer />
</main>
