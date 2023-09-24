<script lang="ts">
	import { onMount } from 'svelte';
	import Typography from '../Typography/index.svelte';
	export let text: string[] = ['Software Engineer'];
	let part: any;
	let i = 0;
	let offset = 0;
	let forwards = true;
	let skip_count = 0;
	const skip_delay = 50;
	const speed = 60;
	$: curr = '';
	const flick = () => {
		setInterval(function () {
			if (forwards) {
				if (offset >= text[i].length) {
					++skip_count;
					if (skip_count === skip_delay) {
						forwards = false;
						skip_count = 0;
					}
				}
			} else {
				if (offset === 0) {
					forwards = true;
					i++;
					offset = 0;
					if (i >= text.length) {
						i = 0;
					}
				}
			}
			part = text[i].substring(0, offset);
			if (skip_count === 0) {
				if (forwards) {
					offset++;
				} else {
					offset--;
				}
			}
			curr = part;
		}, speed);
	};
	onMount(() => {
		flick();
	});
</script>

<div class="flex items-center justify-center sm:justify-normal">
	{#if curr === ''}
		<Typography variant="inherit" class="text-opacity-0">|</Typography>
	{:else if curr.length === text[i].length}
		<Typography>{curr}</Typography>
		<div class="blinking">|</div>
	{:else}
		<Typography>{curr}|</Typography>
	{/if}
</div>

<style>
	.blinking {
		animation: blink 0.5s infinite alternate;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
