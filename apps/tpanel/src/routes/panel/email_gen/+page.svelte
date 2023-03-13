<script lang="ts">
	import FormInput from 'components/elements/interactive/form_input.svelte';
	import type { SkyFormData } from 'aboforms/form_data';
	import { generate_form_response_email } from 'aboforms_resolve_resp';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import type { z } from 'zod';
	import type { get_email_config_schema, SentEmail } from 'get_emails/types';

	export let form: SkyFormData | undefined;

	let emails: SentEmail[] | undefined = undefined;

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

	onMount(async () => {
		const args: z.infer<typeof get_email_config_schema> = {
			cached: true,
			folder: 'Sky Aboformulare'
		};
		const res = await fetch('/api/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(args)
		});
		emails = await res.json();
	});

	const tabs = ['Tab 1', 'Tab 2', 'Tab 3'] as const;
	let tab: (typeof tabs)[number] = tabs[0];
</script>

<div class="flex h-full w-full p-4 gap-4">
	<div class="text-sm bg-white p-4 rounded-lg overflow-y-scroll w-1/2">
		<h3>{@html email_html.subject}</h3>
		{@html email_html.body}
	</div>
	<div class="flex flex-col grow max-h-full">
		<div class="tabs">
			{#each tabs as tab_name}
				<button
					class="tab tab-lifted"
					on:click={() => (tab = tab_name)}
					class:tab-active={tab === tab_name}
				>
					{tab_name}
				</button>
			{/each}
		</div>
		<div class="bg-gray-800 text-slate-300 p-4 rounded-b-lg rounded-r-lg overflow-y-scroll">
			{#if tab === 'Tab 1'}
				<div class="form_input">
					<FormInput bind:current_form={form} />
				</div>
			{:else if tab === 'Tab 2'}
				<div>
					{#if emails}
						{#each emails as email}
							<div class="flex">
								<div class="flex-grow">{email.subject}</div>
								<div class="flex-grow">{email.date}</div>
							</div>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.form_input input) {
		background-color: #1f2937;
		color: var(--color-slate-300);
		border: 1px solid #4b5563;
		border-radius: 5px;
		padding: 1px 10px;
	}
	:global(.form_input select) {
		background-color: #1f2937;
		color: var(--color-slate-300);
		border: 1px solid #4b5563;
		border-radius: 5px;
		padding: 1px 10px;
	}
</style>
