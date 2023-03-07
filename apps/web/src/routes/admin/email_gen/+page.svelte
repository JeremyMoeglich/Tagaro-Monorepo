<script lang="ts">
	import FormInput from 'components/elements/interactive/form_input.svelte';
	import type { SkyFormData } from 'aboforms/form_data';
	import { generate_form_response_email } from 'aboforms_resolve_resp';
	import dayjs from 'dayjs';

	export let form: SkyFormData | undefined;

	let email_html: ReturnType<typeof generate_form_response_email> = {
		body: '',
		subject: ''
	};

	$: {
		if (form) {
			email_html = generate_form_response_email(form, {
				sky_kundennummer: '123456',
				sky_vertragsnummer: '123456',
				vertragsbeginn: dayjs().toDate()
			});
		}
	}
</script>

<div class="flex">
	<div>
		<h3>{@html email_html.subject}</h3>
		{@html email_html.body}
	</div>
	<FormInput bind:current_form={form} />
</div>
