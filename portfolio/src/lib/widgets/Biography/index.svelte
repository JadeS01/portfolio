<script lang="ts">
	import Typography from '../../components/Typography/index.svelte';
	import Card from '../../components/Card/index.svelte';
</script>

<Card class="bio flex flex-col p-4 gap-y-4 bg-white bg-opacity-50">
	<div>
		<Typography size="2xl" weight="bold">About Me</Typography>
		<Typography>
			I’m Jade, a software engineer based in California’s Central Valley, and
			currently working for AXON Networks with a focus on frontend development.
			I graduated in 2022 from San Francisco State University with a B.S. in
			Computer Science where I studied full-stack web and mobile development as
			well as human-computer interaction. I enjoy experimenting with new
			technologies to find the best solution for projects and I am determined to
			continue learning and growing as an engineer. I am always open to new
			opportunities and connections.
		</Typography>
	</div>
	<div class="flex flex-col gap-y-4">
		<Typography size="lg" weight="light">My Expertise</Typography>
		<div
			class="sm:grid sm:grid-cols-3 sm:gap-x-4 max-sm:grid max-sm:grid-rows-3 max-sm:gap-y-4"
		>
			<div class="bg-white bg-opacity-50 rounded-lg p-4 shadow-lg">
				<Typography size="lg" weight="semiBold">Frontend Development</Typography
				>
				<Typography
					>Transforming designs into dynamic and responsive applications with
					reusable UI components in React, Vue, and Svelte.</Typography
				>
			</div>
			<div class="bg-white bg-opacity-50 rounded-lg p-4 shadow-lg">
				<Typography size="lg" weight="semiBold">Mobile Development</Typography>
				<Typography
					>Developing user-friendly mobile applications, with expertise in Swift
					for the iOS platform.</Typography
				>
			</div>
			<div class="bg-white bg-opacity-50 rounded-lg p-4 shadow-lg">
				<Typography size="lg" weight="semiBold">Database Management</Typography>
				<Typography
					>Familiar with both relational and NoSQL databases in design and
					querying.</Typography
				>
			</div>
		</div>
	</div>
</Card>
