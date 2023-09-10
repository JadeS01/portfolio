<script lang="ts">
	import clsx from 'clsx';
	export let open = false;
	export let handleModal: () => void;

	function handleBackdrop(event: Event) {
		if (event.target === event.currentTarget) {
			handleModal();
		}
	}
</script>

{#if open}
	<div
		class={clsx('fixed inset-0 flex items-center justify-center z-50', {
			'backdrop-brightness-50 backdrop-blur-md': open
		})}
		on:click={(e) => handleBackdrop(e)}
		on:keydown={(e) => handleBackdrop(e)}
	>
		<div class="bg-white w-1/2 rounded-lg shadow-lg p-4">
			<slot />
		</div>
	</div>
{/if}
