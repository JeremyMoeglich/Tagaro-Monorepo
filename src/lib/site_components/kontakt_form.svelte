<script>
	import Button from '$lib/layout_components/button.svelte';
	import InputField from '$lib/layout_components/input_field.svelte';
	import * as urls from '$lib/vars/urls';
	import SpamField from '$lib/layout_components/spam_field.svelte';
</script>

<form class="contact_form" method="POST" action={urls.dynamic + '/data/recieve_form'}>
	<SpamField />
	<InputField text={'Name*'} box_height={45} name="name" type="text" autocomplete="name" />
	<InputField text={'E-Mail Adresse*'} box_height={45} name="email" autocomplete="email" />
	<InputField
		text={'Telefonnummer'}
		box_height={45}
		name="number"
		type="number"
		required={false}
		autocomplete="tel"
	/>
	<InputField text={'Nachricht*'} box_height={90} name="message" multiline={true} />
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
