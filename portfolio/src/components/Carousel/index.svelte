<script lang="ts">
	// show Cal-Pal, Instrument-Website, Photo-Sharing-App, Offset, CSC648
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
			description: `Offset is a UI/UX project aimed to create an environmentally-friendly social media community. Stages of the project included wireframing, 
				prototyping, heuristic evaluations, and usability testing. Inclusive user experience research strategies were employed, which utilized
				online questionnaires and data analysis. The comprehensive design process, along with its key findings and insights, were documented 
				and shared on a dedicated GitHub Page.`,
			url: 'https://jades01.github.io/offset.github.io/#showcase'
		},
		{
			title: 'Instrument Website',
			skills: ['React TypeScript', 'SQL'],
			description: `The web development project combines React TypeScript, Tone.js, p5.js, and SQLite to create an interactive musical website. This
				platform has numerous custom instruments, synthesizers, and music visualizers. With SQLite, the website stores 
				preprogrammed songs as note-based data, enabling playback within the chosen instrument. The sounds are then produced through 
				the utilization of Tone.js, providing a dynamic and engaging musical experience.`,
			url: ''
		}
	];
</script>

<div class="grid grid-cols-10">
	<button> Previous </button>
	<div class="col-span-8">
		{#each projects as project}
			<div class="card">
				<div class="text-center font-bold">{project.title}</div>
				{#if project.url}
					<div>{project.url}</div>
				{/if}
				<div class="flex flex-row gap-1">
					{#each project.skills as skill}
						<div class="bg-cyan-400 rounded-[15px] font-light">{skill}</div>
					{/each}
				</div>
				<div>{project.description}</div>
			</div>
		{/each}
	</div>
	<button> Next </button>
</div>

<style>
	.card {
		background-color: azure;
		width: 100%;
		padding: 1rem;
		border-radius: 15px 15px 15px 15px;
	}
</style>
