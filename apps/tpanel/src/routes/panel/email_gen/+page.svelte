<script lang="ts">
	import FormInput from 'components/elements/interactive/form_input.svelte';
	import type { SkyFormData } from 'aboforms/form_data';
	import { to_form_data } from 'aboforms/parse';
	import { generate_form_response_email, type RegisterInfo } from 'aboforms_resolve_resp';
	import dayjs from 'dayjs';
	import { z } from 'zod';
	import { type get_email_config_schema, type SentEmail, sent_email_schema } from 'emails';
	import { parse_to_date } from '$lib/zod_utils';
	import QInput from 'components/elements/interactive/quick/QInput.svelte';
	import { browser } from '$app/environment';
	import QSelect from 'components/elements/interactive/quick/QSelect.svelte';

	export let form: SkyFormData | undefined;

	let emails: { email: SentEmail; form: SkyFormData }[] | undefined = undefined;

	let email_html: ReturnType<typeof generate_form_response_email> = {
		body: '',
		subject: ''
	};

	let register_info: RegisterInfo = {
		sky_kundennummer: '123456',
		sky_vertragsnummer: '123456',
		vertragsbeginn: dayjs().toDate()
	};

	$: {
		if (form) {
			email_html = generate_form_response_email(form, register_info);
		}
	}

	type FolderType = 'Sky Aboformulare' | 'INBOX';

	let folder: FolderType = 'INBOX';
	let loading_state: 'loading' | 'loaded' | 'error' = 'loading';

	async function refresh_emails(folder: FolderType) {
		if (!browser) {
			return;
		}
		loading_state = 'loading';
		const args: z.infer<typeof get_email_config_schema> = {
			cached: true,
			folder,
			since: dayjs().subtract(1, 'week').toDate(),
			from: 'Sky Abodaten Eingang'
		};
		const res = await fetch('/api/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(args)
		});
		if (!res.ok) {
			loading_state = 'error';
			return;
		}
		emails = z
			.array(z.unknown())
			.parse(await res.json())
			.map((v) => {
				const email = parse_to_date(v, sent_email_schema, ['date']);
				return {
					email,
					form: to_form_data(email.body)
				};
			})
			.sort((a, b) => {
				return dayjs(b.email.date).diff(dayjs(a.email.date));
			});
		console.log(emails);
		loading_state = 'loaded';
	}

	$: refresh_emails(folder);

	const tabs = ['Edit', 'Emails'] as const;
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
			{#if tab === 'Edit'}
				<div class="form_input">
					<QInput name={'Kundennummer'} bind:value={register_info.sky_kundennummer} />
					<QInput name={'Vertragsnummer'} bind:value={register_info.sky_vertragsnummer} />
					<FormInput bind:current_form={form} />
				</div>
			{:else if tab === 'Emails'}
				<div>
					<div class="form_input">
						<QSelect
							name={'Folder'}
							bind:selected={folder}
							options={['Sky Aboformulare', 'INBOX']}
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="text-xl">Emails</h3>
						{#if loading_state === 'loaded'}
							{#if emails && emails.length > 0}
								{#each emails as email}
									<div class="flex">
										<div class="flex-grow">{email.form.vorname} {email.form.nachname}</div>
										<div class="flex-grow">
											{dayjs(email.email.date).format('DD.MM.YYYY - HH:mm')}
										</div>
										<button
											class="btn btn-primary btn-sm"
											on:click={() => {
												form = email.form;
											}}>Use</button
										>
									</div>
								{/each}
							{:else}
								<div class="text-center">No Emails</div>
							{/if}
						{:else if loading_state === 'loading'}
							<div class="text-center">Loading...</div>
						{:else if loading_state === 'error'}
							<div class="text-center">An Error Occured</div>
						{/if}
					</div>
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
