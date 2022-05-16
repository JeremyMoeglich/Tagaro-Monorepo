<script lang="ts">
	import Button from '$lib/components/elements/interactive/buttons/button.svelte';

	import InputField from '$lib/components/elements/interactive/inputs/input_field.svelte';

	import SpamField from '$lib/components/elements/interactive/inputs/spam_field.svelte';

	import { get_dynamic_host } from '$lib/scripts/frontend/get_dynamic_host';

	export let url: URL;
</script>

<form class="contact_form" method="POST" action={get_dynamic_host(url) + '/data/recieve_form'}>
	<SpamField />
	<InputField text={'Name*'} name="name" type="text" autocomplete="name" />
	<InputField text={'E-Mail Adresse*'} name="email" autocomplete="email" />
	<InputField
		text={'Telefonnummer'}
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
