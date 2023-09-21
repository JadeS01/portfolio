<script lang="ts" context="module">
	export type Project = {
		title: string;
		picture?: string;
		skills: string[];
		description: string;
		url: string;
	};
</script>

<script lang="ts">
	import Card from '../lib/components/Card/index.svelte';
	import Typography from '../lib/components/Typography/index.svelte';
	import Modal from '../lib/components/Modal/index.svelte';
	import Button from '../lib/components/Button/index.svelte';
	import Biography from '../lib/widgets/Biography/index.svelte';
	import Intro from '../lib/widgets/Intro/index.svelte';
	import ContactForm from '../lib/widgets/ContactForm/index.svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
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
			url: 'https://github.com/JadeS01/CalPal'
		},
		{
			title: 'Photo Sharing App',
			skills: ['Node.js', 'MySQL'],
			picture: 'PhotoSharingApp/Screen Shot 2023-08-12 at 10.11.33 AM.png',
			description: `This is a web development project that involved the application of HTML5, CSS3, 
				JavaScript, and MySQL to create a comprehensive full-stack website based off of image sharing platforms. The project incorporated a range of functionalities such as
				search features, user sessions, and Create, Read, Update, Delete (CRUD) operations. The development process included 
				the establishment of a server for a RESTful API using Node.js and Express, ensuring the handling and validation of data and requests. MySQL was used to store user account details, including hashed passwords.
				The result of this development is a platform that allows users to create and log into accounts, create and search for posts, and comment on existing posts if they're logged in.`,
			url: 'https://github.com/JadeS01/Photo-Sharing-App'
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
			url: 'https://github.com/JadeS01/Instrument-Website'
		}
	];

	const open = writable(false);
	const selectedProject = writable(projects[0]);
	function handleSelect(project: Project) {
		selectedProject.set(project);
		handleModal();
	}
	function handleModal() {
		open.set(!$open);
	}
	function gotoProjects() {
		goto('/projects');
	}
</script>

<Intro />
<Biography />
<Card class="p-4">
	<div class="flex flex-row justify-between items-center pb-4">
		<Typography size="2xl" weight="bold">Featured Projects</Typography>
		<Button
			on:click={() => gotoProjects()}
			variant="redirect"
			typographyVariant="inherit">View All</Button
		>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each projects as project}
			<div
				class="bg-white shadow-lg rounded-lg flex flex-col h-full justify-between"
			>
				<div class="max-h-48 bg-gray-200 rounded-t-lg">
					<img
						src={project.picture}
						alt={project.title}
						class="w-full h-auto max-h-[100%] object-contain rounded-lg"
					/>
				</div>
				<div class="p-4 flex flex-row justify-between items-center">
					<Typography size="lg" weight="semiBold">{project.title}</Typography>
					<Button on:click={() => handleSelect(project)}>Details</Button>
				</div>
			</div>
		{/each}
	</div>
</Card>
<ContactForm class="bg-white bg-opacity-50" />

<Modal open={$open} {handleModal}>
	<div class="h-full flex flex-col justify-between">
		<div>
			<div class="max-h-[170px] overflow-auto">
				<img
					src={$selectedProject.picture}
					alt={$selectedProject.title}
					class="w-full h-auto max-h-[100%] object-contain"
				/>
			</div>
			<div class="mb-4 flex flex-row">
				<Typography size="lg" weight="semiBold"
					>{$selectedProject.title}</Typography
				>
			</div>
			<Typography class="max-h-[210px] overflow-y-scroll">
				{$selectedProject.description}
			</Typography>
			<div
				class="py-4 flex flex-row flex-wrap sm:items-center sm:gap-x-4 gap-x-2"
			>
				<Typography>Skills Used:</Typography>
				<div class="flex flex-row flex-wrap gap-x-2">
					{#each $selectedProject.skills as skill, idx}
						<div
							class="language rounded-full p-1 sm:m-0 m-1"
							data-idx={`${idx}`}
						>
							{skill}
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-x-4">
			<Button on:click={handleModal} variant="close" class="w-full"
				>Close</Button
			>
			<Button on:click={() => goto($selectedProject.url)} class="w-full"
				>View Project</Button
			>
		</div>
	</div>
</Modal>

<style>
	.language[data-idx='0'] {
		background-color: #5680e9;
	}
	.language[data-idx='1'] {
		background-color: #84ceeb;
	}
	.language[data-idx='2'] {
		background-color: #5ab9ea;
	}
	.language[data-idx='3'] {
		background-color: #92a4ec;
	}
	.language[data-idx='4'] {
		background-color: #8860d0;
	}
</style>
