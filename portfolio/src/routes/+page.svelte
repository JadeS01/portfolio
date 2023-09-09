<script lang="ts">
	import Card from '../lib/components/Card/index.svelte';
	import ArrowUpRight from '../lib/components/Svgs/ArrowUpRight.svelte';
	import Typography from '../lib/components/Typography/index.svelte';
	type Project = {
		title: string;
		picture?: string;
		skills: string[];
		description: string;
		url: string;
	};
	let projects: Project[] = [
		{
			title: 'Cal-Pal',
			skills: ['SwiftUI'],
			picture: 'CalPal/Screen Shot 2023-08-12 at 9.47.09 AM.png',
			description: `Cal-Pal is a calorie tracking iOS app that utilizies SwiftUI, Core Data, and the Calorie Ninjas API. 
				Users are able to log what they've consumed in English and the API will fetch caloric information through 
				natural language processing. The app enables users to set a daily calorie goal and dynamically calculates whether 
				they have met, exceeded, or fallen short of these goals. To further enhance the user experience, the app uses SwiftUICharts 
				to visualize calorie statistics, making it easier for users to track their eating habits. To ensure user privacy, 
				all data is securely stored locally through Core Data.`,
			url: ''
		},
		{
			title: 'Photo Sharing App',
			skills: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
			picture: 'PhotoSharingApp/Screen Shot 2023-08-12 at 10.11.33 AM.png',
			description: `This is a web development project that involved the application of HTML5, CSS3, 
				JavaScript, and MySQL to create a comprehensive full-stack website based off of image sharing platforms. The project incorporated a range of functionalities such as
				search features, user sessions, and Create, Read, Update, Delete (CRUD) operations. The development process included 
				the establishment of a server for a RESTful API using Node.js and Express, ensuring the handling and validation of data and requests. MySQL was used to store user account details, including hashed passwords.
				The result of this development is a platform that allows users to create and log into accounts, create and search for posts, and comment on existing posts if they're logged in.`,
			url: ''
		},
		{
			title: 'Offset',
			skills: ['Figma'],
			picture: 'Offset/Screen Shot 2023-08-12 at 9.52.24 AM.png',
			description: `Offset is a UI/UX project aimed to create an environmentally-friendly social media community. Stages of the project included wireframing, 
				prototyping, heuristic evaluations, and usability testing. Inclusive user experience research strategies were employed, which utilized
				online questionnaires and data analysis. The comprehensive design process, along with its key findings and insights, were documented 
				and shared on a dedicated GitHub Page.`,
			url: 'https://jades01.github.io/offset.github.io/#showcase'
		},
		{
			title: 'Instrument Website',
			skills: ['React TypeScript', 'SQL'],
			picture: '/InstrumentWebsite/Screen Shot 2023-09-08 at 11.23.44 PM.png',
			description: `The web development project combines React TypeScript, Tone.js, p5.js, and SQLite to create an interactive musical website. This
				platform has numerous custom instruments, synthesizers, and music visualizers. With SQLite, the website stores 
				preprogrammed songs as note-based data, enabling playback within the chosen instrument. The sounds are then produced through 
				the utilization of Tone.js, providing a dynamic and engaging musical experience.`,
			url: ''
		}
	];
</script>

<Card
	class="flex justify-center items-center p-4 bg-white bg-opacity-50 gap-y-8"
>
	<div class="sm:flex flex-row-reverse">
		<div class="centerContent">
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
			<Typography size="3xl" class="text-center sm:text-start">
				Jade Simien
			</Typography>
			<Typography size="md" class="text-center sm:text-start"
				>Software Engineer</Typography
			>
			<Typography weight="light">
				I am a hard-working '22 CS graduate with experience in full-stack web
				and mobile development. I am currently a Junior Software Engineer at
				AXON Networks.
			</Typography>
			<div
				class="flex flex-row gap-5 justify-center align-middle sm:justify-start sm:align-top"
			>
				<button class="navigateButton hover">
					<a href="/about">About Me</a>
				</button>
				<button class="navigateButton hover flex flex-row items-center">
					<a href="/resume">Resume</a>
					<ArrowUpRight />
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
<Card class="flex flex-col p-4 gap-y-4">
	<div>
		<Typography size="2xl">About Me</Typography>
		<Typography>
			I’m Jade, a software engineer based in California’s Central Valley. I
			graduated in 2022 from San Francisco State University with a B.S. in
			Computer Science where I studied full-stack web and mobile development as
			well as human-computer interaction. I enjoy experimenting with new
			technologies to find the best solution for projects and I am determined to
			continue learning and growing as an engineer. I am always open to new
			opportunities and connections.
		</Typography>
	</div>
	<div class="flex flex-col gap-y-4">
		<Typography size="lg" weight="light">My Expertise</Typography>
		<div class="grid grid-cols-3 gap-x-4">
			<div class="bg-white bg-opacity-50">
				<Typography size="lg" weight="semiBold">Frontend Development</Typography
				>
				<Typography
					>Transforming designs into dynamic and responsive applications with
					reusable UI components in React, Vue, and Svelte.</Typography
				>
			</div>
			<div class="bg-white bg-opacity-50">
				<Typography size="lg" weight="semiBold">Mobile Development</Typography>
				<Typography
					>Developing user-friendly mobile applications, with expertise in Swift
					for the iOS platform.</Typography
				>
			</div>
			<div class="bg-white bg-opacity-50">
				<Typography size="lg" weight="semiBold">Database Management</Typography>
				<Typography
					>Familiar with both relational and NoSQL databases in design and
					querying.</Typography
				>
			</div>
		</div>
	</div>
</Card>
<Card class="p-4 bg-white bg-opacity-50 ">
	<div>
		<Typography size="2xl">Featured Projects</Typography>
	</div>
	<div class="grid grid-cols-2">
		{#each projects as project}
			<div>
				{#if project.picture}
					<img
						src={project.picture}
						alt="img"
						class="max-h-[400px] max-w-[500px]"
					/>
				{/if}
				<Typography size="lg" weight="semiBold">{project.title}</Typography>
				<!-- <Typography>{project.description}</Typography> -->
			</div>
		{/each}
	</div>
</Card>

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
		border-radius: 5px;
	}
	.hover:hover {
		filter: brightness(0.6);
	}
</style>
