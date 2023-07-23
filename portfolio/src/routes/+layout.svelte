<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main>
	<Navbar />
	<div style="padding: 4rem 0;">
		<slot />
	</div>
	<!-- <Footer /> -->
</main>
