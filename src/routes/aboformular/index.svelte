<script lang="ts">
	// #region [c3] Imports
	import {
		cable_receive_assets,
		receive_assets
	} from '$lib/scripts/universal/asset_library/assets/receive_type';
	import { zubuchoptionen_assets } from '$lib/scripts/universal/asset_library/assets/zubuchoptionen';
	import { indexed_assets } from '$lib/scripts/universal/asset_library/all_assets';
	import OfferSummary from '$lib/components/site/routes/aboformular/offer_summary.svelte';
	import type {
		asset_id,
		priceable_asset_id
	} from '$lib/scripts/universal/asset_library/asset_types';
	import { iban_validator } from '$lib/scripts/universal/validators/iban';
	import { bic_validator } from '$lib/scripts/universal/validators/bic';
	import type { aboformular_options } from '$lib/scripts/universal/aboformular';
	import { sort_by_price } from '$lib/scripts/universal/asset_library/prices';
	import type { category_id } from '$lib/scripts/universal/asset_library/categories';
	import SingleBoxSelector from '$lib/components/elements/interactive/box_selector/single_box_selector.svelte';
	import MultiBoxSelector from '$lib/components/elements/interactive/box_selector/multi_box_selector.svelte';
	import SimpleInputField from '$lib/components/elements/interactive/inputs/simple_input_field.svelte';
	import RadioButton from '$lib/components/elements/interactive/radio_button.svelte';
import { asset_sets } from '$lib/scripts/universal/asset_library/sets';
	// #endregion

	let options: aboformular_options = {
		receive: {
			receive_type: '',
			cable_receiver: ''
		},
		personal_info: {
			anrede: 'keine_angabe',
			title: 'Kein_Titel',
			vorname: '',
			nachname: '',
			addresse: '',
			ort: '',
			plz: '',
			telephone: '',
			email: '',
			geburtsdatum: ''
		},
		choices: {
			base_package: '',
			premium_packages: [],
			zubuchoptionen: []
		},
		shipping_address_required: 'Nein',
		shipping_address: {
			address_packingstation: '',
			plz: '',
			anrede: 'keine_angabe',
			title: 'Kein_Titel',
			vorname: '',
			nachname: '',
			firma: ''
		},
		payment_info: {
			bank_name: '',
			sepa_vorhanden: 'Ja',
			sepa_bank_info: {
				iban: '',
				bic: ''
			},
			other_bank_info: {
				bankleitzahl: '',
				kontonumber: ''
			},
			kontoinhaber_info: 'Abonnent ist Kontoinhaber',
			kontoinhaber: ''
		}
	};
	// #region [c6] Asset Variables
	let selected_priceable_assets: Array<priceable_asset_id>;
	function filter_empty_string<T extends unknown | ''>(argument: T[]): Exclude<T, ''>[] {
		return argument.filter((v): v is Exclude<T, ''> => v !== '');
	}

	$: selected_priceable_assets = filter_empty_string([
		options.choices.base_package,
		...sort_by_price(options.choices.premium_packages),
		...sort_by_price(options.choices.zubuchoptionen)
	]);
	let selected_assets: Array<asset_id>;
	$: selected_assets = filter_empty_string([
		...selected_priceable_assets,
		options.receive.receive_type
	]);
	let current_page = 0;
	let verbose = false;
	let pages: Array<Partial<Record<category_id, boolean>>> = [
		{
			receive_type: false,
			cable_receiver: false,
			base_package: false
		}
	];
	//#endregion
</script>

<div class="alignment">
	<h1>Aboformular</h1>

	{#if current_page === 0}
		<div>
			<!-- #region [c1] Page 1 Receive Type -->
			<div>
				<SingleBoxSelector
					title="Empfangsart"
					id="receive_type"
					boxes={receive_assets.map((v) => ({
						asset: v,
						disabled: false
					}))}
					selector_assets={selected_assets}
					bind:selected={options.receive.receive_type}
					bind:status={pages[0]['receive_type']}
					bind:verbose
				/>
				<SingleBoxSelector
					title="Ihr Kabelnetzbetreiber"
					boxes={cable_receive_assets.map((v) => ({
						asset: v,
						disabled: false
					}))}
					selector_assets={selected_assets}
					active={options.receive.receive_type === 'kabel'}
					id="cable_receiver"
					bind:selected={options.receive.cable_receiver}
					bind:status={pages[0]['cable_receiver']}
					bind:verbose
				/>
			</div>
			<!-- #endregion -->
			<!-- #region [c2] Page 1 Packages -->
			<div>
				<SingleBoxSelector
					title="Basispakete"
					id="base_package"
					bind:status={pages[0]['base_package']}
					boxes={asset_sets.base.map((v) => ({
						asset: indexed_assets[v],
						selector_assets: selected_assets,
						disabled: false
					}))}
					selector_assets={selected_assets}
					bind:selected={options.choices.base_package}
					bind:verbose
				/>
				<MultiBoxSelector
					title="Premiumpakete"
					boxes={asset_sets.premium.map((v) => ({
						asset: indexed_assets[v],
						selector_assets: selected_assets,
						disabled: false
					}))}
					selector_assets={selected_assets}
					bind:selected={options.choices.premium_packages}
				/>
			</div>
			<!-- #endregion -->
		</div>{/if}

	{#if current_page === 1}
		<div>
			<!-- #region [c3] Page 2 Zubuchoptionen -->
			<MultiBoxSelector
				title="Zubuchoptionen"
				boxes={zubuchoptionen_assets.map((v) => ({
					asset: v,
					selector_assets: selected_assets,
					disabled: false
				}))}
				selector_assets={selected_assets}
				bind:selected={options.choices.zubuchoptionen}
			/>
			<!-- #endregion -->
		</div>{/if}
	{#if current_page === 2}
		<form>
			<!-- #region [c2] Page 3 Personal Info -->
			<div>
				<div>
					<SimpleInputField
						text="Anrede:"
						name="anrede"
						type="select"
						bind:value={options.personal_info.anrede}
					>
						<option value="herr">Herr</option>
						<option value="frau">Frau</option>
						<option value="keine_angabe">Keine Angabe</option>
					</SimpleInputField>
					<SimpleInputField
						text="Vorname:"
						name="fname"
						autocomplete="given-name"
						bind:value={options.personal_info.vorname}
					/>
					<SimpleInputField
						text="Nachname:"
						name="lname"
						autocomplete="family-name"
						bind:value={options.personal_info.nachname}
					/>
					<SimpleInputField
						text="Addresse:"
						name="address"
						autocomplete="street-address"
						bind:value={options.personal_info.addresse}
					/>
					<SimpleInputField
						text="Ort:"
						name="ort"
						autocomplete="address-level2"
						bind:value={options.personal_info.ort}
					/>
				</div>
				<div>
					<SimpleInputField
						text="Titel:"
						name="title"
						type="select"
						bind:value={options.personal_info.title}
					>
						<option value="Kein Titel">Kein Titel</option>
						<option value="ING.">ING.</option>
						<option value="DIPL.ING.">DIPL.ING.</option>
						<option value="DIPL.KFM.">DIPL.KFM.</option>
						<option value="MAG.">MAG.</option>
						<option value="DR.">DR.</option>
						<option value="DR.DR.">DR.DR.</option>
						<option value="DR.MAG.">DR.MAG.</option>
						<option value="HFRT.">HFRT.</option>
						<option value="PROF.">PROF.</option>
						<option value="MAG.FH">MAG.FH</option>
						<option value="UNIV.PROF.">UNIV.PROF.</option>
						<option value="UNIV.DOZ.">UNIV.DOZ.</option>
						<option value="GRAF">GRAF</option>
						<option value="FÜRST">FÜRST</option>
						<option value="FREIHERR">FREIHERR</option>
						<option value="BARON">BARON</option>
					</SimpleInputField>
					<SimpleInputField
						text="Geburtsdatum:"
						name="bday"
						autocomplete="bday"
						type="date"
						bind:value={options.personal_info.geburtsdatum}
					/>
					<SimpleInputField
						text="Email-Adresse:"
						name="email"
						autocomplete="email"
						bind:value={options.personal_info.email}
					/>
					<SimpleInputField
						text="Telefon:"
						name="phone"
						autocomplete="tel"
						bind:value={options.personal_info.telephone}
					/>
					<SimpleInputField
						text="Postleitzahl:"
						name="plz"
						autocomplete="postal-code"
						bind:value={options.personal_info.plz}
					/>
				</div>
			</div>
			<!-- #endregion -->

			<!-- #region [c3] Lieferaddresse -->
			<div>
				<div>
					<div>
						<RadioButton
							name="lieferadresse_vorhanden"
							values={['Ja', 'Nein']}
							bind:selected={options.shipping_address_required}
							text="Abweichende Lieferadresse gewünscht?"
						/>
					</div>
				</div>
				{#if options.shipping_address_required === 'Ja'}
					<div>
						<div>
							<SimpleInputField text="Anrede:" name="anrede" type="select">
								<option value="herr">Herr</option>
								<option value="frau">Frau</option>
								<option value="--">Keine Angabe</option>
							</SimpleInputField>
							<SimpleInputField text="Vorname:" name="fname" autocomplete="given-name" />
							<SimpleInputField text="Nachname:" name="lname" autocomplete="family-name" />
							<SimpleInputField
								text="Straβe oder Packstation:"
								name="address"
								autocomplete="street-address"
							/>
						</div>
						<div>
							<SimpleInputField text="Titel:" name="title" type="select">
								<option value="Kein Titel">Kein Titel</option>
								<option value="ING.">ING.</option>
								<option value="DIPL.ING.">DIPL.ING.</option>
								<option value="DIPL.KFM.">DIPL.KFM.</option>
								<option value="MAG.">MAG.</option>
								<option value="DR.">DR.</option>
								<option value="DR.DR.">DR.DR.</option>
								<option value="DR.MAG.">DR.MAG.</option>
								<option value="HFRT.">HFRT.</option>
								<option value="PROF.">PROF.</option>
								<option value="MAG.FH">MAG.FH</option>
								<option value="UNIV.PROF.">UNIV.PROF.</option>
								<option value="UNIV.DOZ.">UNIV.DOZ.</option>
								<option value="GRAF">GRAF</option>
								<option value="FÜRST">FÜRST</option>
								<option value="FREIHERR">FREIHERR</option>
								<option value="BARON">BARON</option>
							</SimpleInputField>
							<SimpleInputField
								text="Postleitzahl:"
								name="plz"
								autocomplete="postal-code"
								bind:value={options.shipping_address.plz}
							/>
							<SimpleInputField text="Ort:" name="ort" autocomplete="address-level2" />
							<SimpleInputField text="Firma:" name="firma" autocomplete="off" />
							<SimpleInputField
								text="Hausnummer oder DHL Kundennummer:"
								name="hausnummer"
								autocomplete="off"
							/>
						</div>
					</div>
				{/if}
			</div>
			<!-- #endregion -->
			<!-- #region [c4] Payment Info -->
			<div>
				<div>
					<RadioButton
						name="sepa_vorhanden"
						values={['Ja', 'Nein']}
						bind:selected={options.payment_info.sepa_vorhanden}
						text="SEPA Bankinformationen vorhanden?"
					/>
					<RadioButton
						name="kontoinhaber"
						values={['Abonnent ist Kontoinhaber', 'Anderer']}
						bind:selected={options.payment_info.kontoinhaber_info}
						text="Kontoinhaber"
					/>
					{#if options.payment_info.kontoinhaber_info === 'Anderer'}
						<SimpleInputField
							text=""
							name="kontoinhaber_value"
							autocomplete="kontoinhaber"
							bind:value={options.payment_info.kontoinhaber}
						/>
					{/if}
				</div>
				<div>
					<SimpleInputField text="Name der Bank:" name="bank_name" autocomplete="bank" />
					{#if options.payment_info.sepa_vorhanden == 'Ja'}
						<SimpleInputField
							text="IBAN:"
							name="iban"
							autocomplete="iban"
							validator={iban_validator}
							bind:value={options.payment_info.sepa_bank_info.iban}
						/>
						<SimpleInputField
							text="BIC:"
							name="bic"
							autocomplete="bic"
							validator={bic_validator}
							bind:value={options.payment_info.sepa_bank_info.bic}
						/>
					{:else}
						<SimpleInputField
							text="Bankleitzahl (8-stellig):"
							name="bankleitzahl"
							autocomplete="bankleitzahl"
							validator={(v) => {
								if (v.trim().replace(' ', '').length == 8) {
									return '';
								} else {
									return 'Falsche Länge';
								}
							}}
							bind:value={options.payment_info.other_bank_info.bankleitzahl}
						/>
						<SimpleInputField
							text="Kontonummer:"
							name="kontonummer"
							autocomplete="kontonummer"
							bind:value={options.payment_info.other_bank_info.kontonumber}
						/>
					{/if}
				</div>
			</div>
			<!-- #endregion -->
		</form>{/if}
	<div class="price_overview">
		<OfferSummary {selected_priceable_assets} bind:current_page {pages} bind:verbose />
	</div>
</div>

<style>
	.alignment {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
	.price_overview {
		display: flex;
		width: 100vw;
		position: sticky;
		bottom: 0px;
		z-index: 3;
	}
	form > div {
		display: flex;
		gap: 20px;
		width: 100%;
		justify-content: center;
		padding: 50px 0px;
	}
</style>
