<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import clsx from 'clsx';
	import Typography from '../../components/Typography/index.svelte';
	import Card from '../../components/Card/index.svelte';
	import Input from '../../components/Input/index.svelte';
	import TextArea from '../../components/TextArea/index.svelte';
	import Icon from '../../components/Icon/index.svelte';
	import Button from '../../components/Button/index.svelte';
	import emailjs from '@emailjs/browser';
	let clazz: string = '';
	export { clazz as class };
	const emptyObj = {
		name: '',
		email: '',
		content: ''
	};
	const message = writable(structuredClone(emptyObj));
	const error = writable(structuredClone(emptyObj));
	const sent: Writable<[boolean, 'unsent' | 'success' | 'fail']> = writable([
		false,
		'unsent'
	]);
	function isValidEmail(email: string) {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailRegex.test(email);
	}
	function isNotValidText(text: string) {
		return text === '' || text === undefined || text === 'null';
	}
	function submitEmail() {
		emailjs.send('service', 'template', $message, 'key').then(
			(res) => {
				// console.log('Email sent', res.text);
				sent.set([true, 'success']);
			},
			(error) => {
				// console.log('Failed to send email', error.text);
				sent.set([false, 'fail']);
			}
		);
	}
	function handleSubmit() {
		sent.set([false, 'unsent']);
		const nameError = isNotValidText($message.name);
		const emailError = !isValidEmail($message.email);
		const contentError = isNotValidText($message.content);
		if (nameError || emailError || contentError) {
			if (nameError) {
				error.update((error) => {
					return {
						...error,
						name: 'Please enter a name.'
					};
				});
			} else {
				error.update((error) => {
					return {
						...error,
						name: ''
					};
				});
			}
			if (emailError) {
				error.update((error) => {
					return {
						...error,
						email: 'Please enter a valid email.'
					};
				});
			} else {
				error.update((error) => {
					return {
						...error,
						email: ''
					};
				});
			}
			if (contentError) {
				error.update((error) => {
					return {
						...error,
						content: 'Please write a message.'
					};
				});
			} else {
				error.update((error) => {
					return {
						...error,
						content: ''
					};
				});
			}
		} else {
			submitEmail();
		}
	}
	sent.subscribe(([bool, _]) => {
		if (bool === true) {
			message.set(structuredClone(emptyObj));
			error.set(structuredClone(emptyObj));
		}
	});
</script>

<Card class={clsx('p-4 flex flex-col gap-y-4', clazz)}>
	<Typography size="2xl" weight="bold">Contact Me</Typography>
	<Typography
		>Any questions or remarks? You can write me a message here.</Typography
	>
	<div class="flex flex-col md:flex-row justify-center gap-4 items-center">
		<form
			class="w-full flex flex-col gap-y-2 max-w-[75%]"
			on:submit|preventDefault={handleSubmit}
		>
			<Input
				label="Name"
				placeholder="Enter your name"
				bind:value={$message.name}
				error={$error.name}
			/>
			<Input
				label="Email"
				placeholder="Enter your email address"
				bind:value={$message.email}
				error={$error.email}
			/>
			<TextArea
				label="Message"
				placeholder="Write your message here..."
				bind:value={$message.content}
				error={$error.content}
			/>
			<Button buttonType="submit">Submit</Button>
			{#if $sent[0] === true}
				<Typography variant="success">Your message has been sent!</Typography>
			{:else if $sent[0] === false && $sent[1] === 'fail'}
				<Typography variant="error">The message failed to send.</Typography>
			{/if}
		</form>
		<div class="max-md:w-full">
			<div class="flex flex-row flex-wrap md:flex-col max-md:justify-center">
				<div class="flex flex-row items-center">
					<Icon>
						<!-- svelte-ignore a11y-missing-content -->
						<a
							href="https://www.linkedin.com/in/jade-simien-b30516207"
							class="fa fa-linkedin"
						/>
					</Icon>
					<Typography class="max-sm:hidden">Jade Simien</Typography>
				</div>
				<div class="flex flex-row items-center">
					<Icon>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="mailto:jadecsimien@gmail.com" class="fa fa-google" />
					</Icon>
					<Typography class="max-sm:hidden">jadecsimien@gmail.com</Typography>
				</div>
				<div class="flex flex-row items-center">
					<Icon>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="https://github.com/JadeS01" class="fa fa-github" />
					</Icon>
					<Typography class="max-sm:hidden">JadeS01</Typography>
				</div>
			</div>
		</div>
	</div>
</Card>
