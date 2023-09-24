<script lang="ts">
	import Typography from '../../components/Typography/index.svelte';
	import Card from '../../components/Card/index.svelte';
	import Button from '../../components/Button/index.svelte';
	import { goto } from '$app/navigation';

	function gotoResume() {
		goto('/resume');
	}
</script>

<Card class="flex items-center p-4  gap-y-8">
	<div class="sm:flex w-full flex-row-reverse justify-between">
		<div class="flex justify-center items-center">
			<!-- instead of pfp, try the typing animation: #15 https://alvarotrigo.com/blog/css-text-animations/-->
			<img
				src="/Screen Shot 2023-02-19 at 9.16.02 PM.png"
				alt="Jade"
				class="rounded-full"
				height="300px"
				width="300px"
			/>
		</div>
		<div class="max-w-xl flex flex-col min-w-min justify-evenly">
			<Typography size="3xl" weight="bold" class="text-center sm:text-start">
				Jade Simien
			</Typography>
			<Typography size="md" class="text-center sm:text-start"
				>Software Engineer</Typography
			>
			<Typography weight="light" class="max-sm:text-center my-4">
				I am a hard-working software engineer with experience in full-stack web
				and mobile development.
			</Typography>
			<div
				class="flex flex-row gap-5 justify-center align-middle sm:justify-start sm:align-top"
			>
				<Button
					class="max-sm:w-[50%] mb-4"
					on:click={() => gotoResume()}
					variant="redirect"
					typographyVariant="inherit"
				>
					Resume
				</Button>
			</div>
			<div
				class="flex flex-row justify-center align-middle sm:justify-start sm:align-top"
			>
				<div class="icon-border border-ocean-primary shadow-md">
					<!-- svelte-ignore a11y-missing-content -->
					<a
						href="https://www.linkedin.com/in/jade-simien-b30516207"
						class="fa fa-linkedin"
					/>
				</div>
				<div class="icon-border border-ocean-primary shadow-md">
					<!-- svelte-ignore a11y-missing-content -->
					<a href="mailto:jadecsimien@gmail.com" class="fa fa-google" />
				</div>

				<div class="icon-border border-ocean-primary shadow-md">
					<!-- svelte-ignore a11y-missing-content -->
					<a href="https://github.com/JadeS01" class="fa fa-github" />
				</div>
			</div>
		</div>
	</div>
</Card>
