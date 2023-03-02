<script lang="ts">
	// default props can be: export let theme = "peach"
	export let theme = 'peach';
	// export let theme: string;
</script>

<div class="flex items-center justify-center">
	<div class="text-xs text-{theme}-primary">
		<p class="text-xs">This portfolio is made with ❤︎ (Svelte + TailwindCSS)</p>
		<p>Copyright © 2023 Jade Simien {theme}</p>
	</div>
</div>
