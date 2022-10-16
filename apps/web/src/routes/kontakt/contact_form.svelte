<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from 'components/elements/interactive/buttons/button.svelte';

	import InputField from 'components/elements/interactive/inputs/input_field.svelte';

	import SpamField from 'components/elements/interactive/inputs/spam_field.svelte';
	import { firestore } from 'frontend/firebase';
	import { addDoc, collection } from 'firebase/firestore';
	import { omit } from 'lodash-es';

	let form_values: {
		name: string;
		email: string;
		message: string;
		is_spam: boolean;
		number: string;
	} = {
		name: '',
		email: '',
		message: '',
		number: '',
		is_spam: false
	};

	async function submit_form() {
		const contact_form_collection = collection(firestore, 'contact_forms');
		if (form_values.is_spam) {
			return;
		}
		await addDoc(contact_form_collection, omit(form_values, 'is_spam'));
		await goto('/kontakt/success');
	}
</script>

<form class="contact_form" method="POST" on:submit|preventDefault={submit_form}>
	<SpamField bind:is_spam={form_values.is_spam} />
	<InputField
		text={'Name*'}
		name="name"
		type="text"
		autocomplete="name"
		bind:value={form_values.name}
	/>
	<InputField
		text={'E-Mail Adresse*'}
		name="email"
		autocomplete="email"
		bind:value={form_values.email}
	/>
	<InputField
		text={'Telefonnummer'}
		name="number"
		type="number"
		required={false}
		autocomplete="tel"
		bind:value={form_values.number}
	/>
	<InputField
		text={'Nachricht*'}
		box_height={90}
		name="message"
		multiline={true}
		bind:value={form_values.message}
	/>
	<Button text="Absenden" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		min-width: 50%;
	}
</style>
