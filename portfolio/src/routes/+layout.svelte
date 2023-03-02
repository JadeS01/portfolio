<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../stores/theme';

</script>

<main>
	<Navbar/>
	<div class="pt-12">
		<slot/>
	</div>
	<div>{$theme}</div>
	<Footer />
</main>
