<script>
	import InputField from '$lib/layout_components/input_field.svelte';
</script>

<form class="contact_form" method="POST" action="/data/recieve_form">
	<InputField text={'Name*'} box_height={45} name="name" type="text" autocomplete="name"/>
	<InputField text={'Email address*'} box_height={45} name="email" autocomplete="email"/>
	<InputField text={'Telefonnummer'} box_height={45} name="number" type="number" required={false} autocomplete="tel"/>
	<InputField text={'Message*'} box_height={90} name="message" multiline={true} />
	<button type="submit">Send</button>
</form>

<style>
	button {
		border: 0px transparent;
		background-color: #027fc7;
		outline: none;
		color: white;
		padding: 20px 40px;
	}
	button:hover {
		background-color: rgb(15, 54, 136);
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		min-width: 50%;
	}
</style>
