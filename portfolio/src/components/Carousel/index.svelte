<script lang="ts">
	let currentIndex = 0;
	const items = [1, 2, 3, 4, 5]; // Replace with your actual items

	function nextItem() {
		currentIndex = (currentIndex + 1) % items.length;
	}

	function prevItem() {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	}
</script>

<div class="carousel">
	{#each items as item, i}
		<div
			class="item"
			style="transform: translateX(calc(-100% * {currentIndex + i} % {items.length}));"
		>
			{item}
		</div>
	{/each}
</div>

<button on:click={prevItem}>Previous</button>
<button on:click={nextItem}>Next</button>

<style>
	.carousel {
		display: flex;
		overflow: hidden;
		width: 300px; /* Adjust the width to fit your carousel container */
	}

	.item {
		flex: 0 0 100%;
		transition: transform 0.3s;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		background-color: #f0f0f0;
	}
</style>
