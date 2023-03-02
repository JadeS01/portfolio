<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let thisTheme: string = 'peach';
	const options = [
		{ label: 'Peach', value: 'peach' },
		{ label: 'Lavender', value: 'lavender' },
		{ label: 'Ocean', value: 'ocean' }
	];
</script>

<main>
	<Navbar {options} bind:thisTheme />
	<div class="pt-12">
		<slot {thisTheme} />
	</div>
	<div>{thisTheme}</div>
	<Footer />
</main>
