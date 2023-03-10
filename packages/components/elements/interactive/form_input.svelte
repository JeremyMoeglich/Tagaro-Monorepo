<script lang="ts">
	import type { SkyFormData } from 'aboforms/form_data';
	import { zubuchoption_ids } from 'asset_library/assets/zubuchoptionen';
	import QBool from './quick/QBool.svelte';
	import QInput from './quick/QInput.svelte';
	import QInputMulti from './quick/QInputMulti.svelte';
	import QMultiSelect from './quick/QMultiSelect.svelte';
	import QoInput from './quick/QOInput.svelte';
	import QSelect from './quick/QSelect.svelte';

	const default_form: SkyFormData = {
		abweichende_lieferadresse: false,
		anrede: 'herr',
		bankleitzahl: '',
		nachname: 'Nachname',
		ort: '',
		plz: '',
		telefon: '',
		base_package: 'entertainment',
		cable_receiver: 'Vodafone',
		email: 'test@test.test',
		empfangsart: 'cable',
		form_name: 'Sky-Bestellung-4',
		geburtsdatum: '01.01.1970',
		hausnummer: '1',
		hardware: 'KEINE',
		kontoinhaber: 'abonnent ist kontoinhaber',
		kontonummer: '',
		premium_packages: [],
		sepa_vorhanden: false,
		straße: 'Teststraße',
		telefon_weitere: [],
		titel: 'Kein_Titel',
		vorname: 'Vorname',
		zubuchoptionen: []
	};

	const titles = [
		'Kein_Titel',
		'ING',
		'DIPL.ING',
		'DIPL.KFM',
		'MAG',
		'DR',
		'DR.DR',
		'DR.MAG',
		'HFRT',
		'PROF',
		'MAG.FH',
		'UNIV.PROF',
		'UNIV.DOZ',
		'GRAF',
		'FÜRST',
		'FREIHERR',
		'BARON'
	] as const;

	export let current_form: SkyFormData | undefined;
	let form: SkyFormData = current_form ?? default_form;

	$: current_form = form ?? default_form;
</script>

<div class="outer">
	<h2>Formular</h2>
	<QSelect
		name={'Bestellmethode'}
		options={['Sky-Bestellung-5', 'Sky-Bestellung-4']}
		bind:selected={form.form_name}
	/>
	<QSelect name={'Anrede'} options={['herr', 'frau', 'keine_angabe']} bind:selected={form.anrede} />
	<QSelect name={'Titel'} options={titles} bind:selected={form.titel} />
	<QInput name={'Vorname'} bind:value={form.vorname} />
	<QInput name={'Nachname'} bind:value={form.nachname} />
	<QInput name={'Straße'} bind:value={form.straße} />
	<QInput name={'Hausnummer'} bind:value={form.hausnummer} />
	<QoInput name={'Adresszusatz'} bind:value={form.adresszusatz} />
	<QInput name={'PLZ'} bind:value={form.plz} />
	<QInput name={'Ort'} bind:value={form.ort} />

	<QBool name={'Abweichende Lieferadresse'} bind:active={form.abweichende_lieferadresse} />
	{#if form.abweichende_lieferadresse}
		<QSelect
			name={'Anrede Lieferadresse'}
			options={['herr', 'frau', 'keine_angabe']}
			bind:selected={form.anrede_liefer}
		/>
		<QSelect name={'Titel Lieferadresse'} options={titles} bind:selected={form.titel_liefer} />
		<QInput name={'Vorname Lieferadresse'} bind:value={form.vorname_liefer} />
		<QInput name={'Nachname Lieferadresse'} bind:value={form.nachname_liefer} />
		<QoInput name={'Firma Lieferadresse'} bind:value={form.firma_liefer} />
		<QInput
			name={'Straße / Packstation Lieferadresse'}
			bind:value={form.straße_oder_packstation_liefer}
		/>
		<QInput
			name="Hausnummer oder DHL Kundennummer"
			bind:value={form.hausnummer_oder_dhl_kundennummer_liefer}
		/>
		<QoInput name={'Adresszusatz Lieferadresse'} bind:value={form.adresszusatz_liefer} />
		<QInput name={'PLZ Lieferadresse'} bind:value={form.plz_liefer} />
		<QInput name={'Ort Lieferadresse'} bind:value={form.ort_liefer} />
	{/if}

	<QInput name={'Gebrurtsdatum'} bind:value={form.geburtsdatum} />
	<QInput name={'E-Mail'} bind:value={form.email} />
	<QInput name={'Telefon'} bind:value={form.telefon} />
	<QInputMulti name={'Telefon (weitere)'} bind:value={form.telefon_weitere} />

	<QBool name={'SEPA vorhanden'} bind:active={form.sepa_vorhanden} />
	{#if !form.sepa_vorhanden && 'kontonummer' in form && 'bankleitzahl' in form}
		<QInput name={'Kontonummer'} bind:value={form.kontonummer} />
		<QInput name={'Bankleitzahl'} bind:value={form.bankleitzahl} />
	{:else}
		<QInput name={'IBAN'} bind:value={form.iban} />
		<QInput name={'BIC'} bind:value={form.bic} />
	{/if}

	<QSelect
		name={'Kontoinhaber'}
		options={['abonnent ist kontoinhaber', 'abonnent ist nicht kontoinhaber']}
		bind:selected={form.kontoinhaber}
	/>
	{#if form.kontoinhaber === 'abonnent ist nicht kontoinhaber'}
		<QInput name={'Kontoinhaber Info'} bind:value={form.kontoinhaber_info} />
	{/if}

	<QSelect
		name={'Empfangsart'}
		options={['cable', 'satellit', 'internet']}
		bind:selected={form.empfangsart}
	/>

	{#if form.empfangsart === 'cable'}
		<QSelect
			name={'Cable Receiver'}
			options={[
				'Vodafone',
				'Unitymedia',
				'Kabel Deutschland',
				'Kabel BW',
				'Kabel BW (Kabel Deutschland)',
				'Anderer Anbieter'
			]}
			bind:selected={form.cable_receiver}
		/>
	{/if}

	<QSelect
		name={'Basis-Paket'}
		options={['entertainment', 'entertainmentplus']}
		bind:selected={form.base_package}
	/>
	<QMultiSelect
		name={'Premium-Pakete'}
		options={['sport', 'cinema', 'bundesliga']}
		bind:selected={form.premium_packages}
	/>
	<QMultiSelect
		name={'Zubuchoptionen'}
		options={zubuchoption_ids}
		bind:selected={form.zubuchoptionen}
	/>

	<QoInput name={'Payback Nummer'} bind:value={form.payback_number} />

	<QSelect
		name={'Hardware'}
		options={['KEINE', 'SMC', 'SMC UND STB / CI PLUS', 'STB / CI PLUS']}
		bind:selected={form.hardware}
	/>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
	}
</style>
