<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	let name = 'Jade';
	// let theme = 'lavender';
	// export let thisTheme: string = 'peach';
</script>

<!-- <h1 class="bg-peach-primary">Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<footer class="lavender-card">
	can pass props like {...props}
	<Footer {theme} />
	<Footer />
</footer> -->

<div class="peach-card">
	<div>
		<div class="grid grid-cols-2">
			<div class="light-card">
				<div>Hello, I'm Jade</div>
				<div>A Software Engineer</div>
				<p>
					I'm a hard-working '22 CS graduate with experience in full-stack web and mobile
					development.
				</p>
				<div class="flex justify-evenly justify-items-start">
					<a href="/about">About Me</a>
					<a href="/projects">View Projects</a>
				</div>
			</div>
			<div class="light-card flex items-center justify-center">
				<div class="flex items-center justify-center">
					<img
						src="/Screen Shot 2023-02-19 at 9.16.02 PM.png"
						alt="Jade"
						class="rounded-full max-w-screen-sm min-w-screen-sm"
						width="30%"
					/>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center light-card">
			<div class="icon-border border-peach-primary">
				<a href="https://www.linkedin.com/in/jade-simien-b30516207" class="fa fa-linkedin" />
			</div>
			<div class="icon-border border-peach-primary">
				<a href="mailto:jadecsimien@gmail.com" class="fa fa-google" />
			</div>
			<div class="icon-border border-peach-primary">
				<a href="https://github.com/JadeS01" class="fa fa-github" />
			</div>
		</div>
	</div>
	<div class="grid grid-cols-3">
		<div>
			<div>Top Languages</div>
			<img
				src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
				alt="Java Badge"
			/>
			<img
				src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
				alt="JavaScript Badge"
			/>
			<img
				src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
				alt="Python Badge"
			/>
			<img
				src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white"
				alt="Swift Badge"
			/>
			<img
				src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
				alt="TypeScript Badge"
			/>
		</div>
		<div>
			<div>Top Frameworks and Technologies</div>
			<img
				src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
				alt="Tailwind Badge"
			/>
			<img
				src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
				alt="React Badge"
			/>
			<img
				src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
				alt="Node Badge"
			/>
		</div>
		<div>
			<div>Top Databases</div>
			<img
				src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
				alt="MongoDB Badge"
			/>
			<img
				src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
				alt="MySQL Badge"
			/>
			<img
				src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
				alt="PostgreSQL Badge"
			/>
		</div>
	</div>
</div>

<!-- conditions in svelte:
{#if x > 10}
{:else if 5 > x}
{:else}
{/if} -->
