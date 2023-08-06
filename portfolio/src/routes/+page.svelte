<script lang="ts">
	import Card from '../components/Card/index.svelte';
	import Carousel from '../components/Carousel/index.svelte';
</script>

<div class="root">
	<Card padding={'0 1rem'}>
		<div class="sm:flex flex-row-reverse">
			<div class="centerContent">
				<img
					src="/Screen Shot 2023-02-19 at 9.16.02 PM.png"
					alt="Jade"
					class="rounded-full"
					height="300px"
					width="300px"
				/>
			</div>
			<div class="">
				<div class="text-3xl text-center sm:text-start">Jade Simien</div>
				<div class="text-md text-center sm:text-start">Software Engineer</div>
				<p>
					I am a hard-working '22 CS graduate with experience in full-stack web
					and mobile development. I am currently a Junior Software Engineer at
					AXON Networks.
				</p>
				<div
					class="flex flex-row gap-5 justify-center align-middle sm:justify-start sm:align-top"
				>
					<button class="navigateButton">
						<a href="/about">About Me</a>
					</button>
					<button class="navigateButton">
						<a href="/resume">Resume</a>
					</button>
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
	<div class="skills">Skills</div>
	<Card padding={'1rem'}>
		Featured Projects
		<Carousel />
		<a href="/projects">View More Projects</a>
	</Card>
	<div class="contact">Contact Me</div>
</div>

<style>
	.centerContent {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.navigateButton {
		background-image: radial-gradient(
			circle,
			#e6fffd,
			#b2effe,
			#8bdaff,
			#8ebeff,
			#b799ff
		);
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 100px;
	}
</style>
