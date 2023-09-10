<script lang="ts">
	import '../app.postcss';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<main>
	<Navbar />
	<div>
		<slot />
	</div>
	<Footer />
</main>

<style>
	main {
		/* #B799FF purple */
		/* #AEE2FF light blue */
		/* #E6FFFD very light teal */
		background-image: linear-gradient(
			to top,
			#b799ff,
			#a3abff,
			#96bbff,
			#93c9ff,
			#9bd4ff,
			#a3dcfe,
			#ace3fe,
			#b8eafd,
			#c2f0fc,
			#cdf5fb,
			#d9fafb,
			#e6fffd
		);
		color: #303655;
		/* color: #DFE9EB  */
	}
</style>
