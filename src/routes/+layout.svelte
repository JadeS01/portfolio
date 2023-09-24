<script lang="ts">
	import '../app.postcss';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<div>
			<Navbar />
			<slot />
			<Footer />
		</div>
	</main>
</QueryClientProvider>

<style>
	main {
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
	}
</style>
