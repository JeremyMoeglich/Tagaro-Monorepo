<script lang="ts">
	import {
		base_packages,
		premiumpackages,
		package_id
	} from '$lib/scripts/universal/asset_libary/assets/packages';
	import {
		receive_id,
		receive_assets
	} from '$lib/scripts/universal/asset_libary/assets/receive_type';
	import { zubuchoptionen_assets } from '$lib/scripts/universal/asset_libary/assets/zubuchoptionen';
	import type { zubuchoption_id } from '$lib/scripts/universal/asset_libary/assets/zubuchoptionen';
	import { indexed_assets } from '$lib/scripts/universal/asset_libary/all_assets';
	import OfferSummary from '$lib/components/site_components/offer_summary.svelte';
	import { indexed_priceable_assets } from '$lib/scripts/universal/asset_libary/priceable_asset';
	import SimpleInputField from '$lib/components/layout_components/simple_input_field.svelte';
	import RadioButton from '$lib/components/layout_components/radio_button.svelte';
	import { validateBIC, validateIBAN } from 'ibantools';
	import SingleBoxSelector from '$lib/components/layout_components/box_selector/single_box_selector.svelte';
	import type { priceable_asset_id } from '$lib/scripts/universal/asset_libary/asset_types';
	import MultiBoxSelector from '$lib/components/layout_components/box_selector/multi_box_selector.svelte';

	function iban_validator(v: string): string {
		const result = validateIBAN(v.trim().replace(' ', '').toUpperCase());
		if (result.valid) {
			return '';
		} else {
			if (result.errorCodes.includes(0)) {
				return '';
			} else if (result.errorCodes.includes(1)) {
				return 'IBAN Land Code fehlt';
			} else if (result.errorCodes.includes(2)) {
				return 'IBAN hat falsche Länge';
			} else {
				return 'IBAN zahlen sind falsch';
			}
		}
	}
	function bic_validator(v: string): string {
		const result = validateBIC(v.trim().replace(' ', '').toUpperCase());
		if (result.valid) {
			return '';
		} else {
			if (result.errorCodes.includes(0)) {
				return '';
			} else if (result.errorCodes.includes(1)) {
				return 'BIC Land Code fehlt';
			} else {
				return 'BIC zahlen sind falsch';
			}
		}
	}

	let selected_base_package: package_id = base_packages[0];

	let selected_premium_packages: Array<package_id> = [];
	let selected_receive_type: receive_id;
	let selected_zubuchoptionen: Array<zubuchoption_id> = [];

	let selected_priceable_assets: Array<priceable_asset_id>;
	$: selected_priceable_assets = [
		...selected_premium_packages,
		selected_base_package,
		...selected_zubuchoptionen
	];
	$: selected_assets = [...selected_priceable_assets, selected_receive_type];
	$: selected_priceable_assets.sort(
		(a, b) => indexed_priceable_assets[b].price.jahr - indexed_priceable_assets[a].price.jahr
	);

	let lieferadresse_vorhanden = 'Nein';
	let sepa_vorhanden = 'Ja';
</script>

<div class="alignment">
	<h1>Aboformular</h1>
	<SingleBoxSelector
		title="Empfangsart"
		boxes={receive_assets.map((v) => ({
			asset: v,
			disabled: false
		}))}
		selector_assets={selected_assets}
		bind:selected={selected_receive_type}
	/>
	<SingleBoxSelector
		title="Basispakete"
		boxes={base_packages.map((v) => ({
			asset: indexed_assets[v],
			selector_assets: selected_assets,
			disabled: false
		}))}
		selector_assets={selected_assets}
		bind:selected={selected_base_package}
	/>
	<MultiBoxSelector
		title="Premiumpakete"
		boxes={premiumpackages.map((v) => ({
			asset: indexed_assets[v],
			selector_assets: selected_assets,
			disabled: false
		}))}
		selector_assets={selected_assets}
		bind:selected={selected_premium_packages}
	/>
	<MultiBoxSelector
		title="Zubuchoptionen"
		boxes={zubuchoptionen_assets.map((v) => ({
			asset: v,
			selector_assets: selected_assets,
			disabled: false
		}))}
		selector_assets={selected_assets}
		bind:selected={selected_zubuchoptionen}
	/>
	<form>
		<div>
			<div>
				<SimpleInputField text="Anrede:" name="anrede" type="select">
					<option value="ok">Herr</option>
					<option value="ok">Frau</option>
					<option value="ok">Keine Angabe</option>
				</SimpleInputField>
				<SimpleInputField text="Vorname:*" name="fname" autocomplete="given-name" />
				<SimpleInputField text="Nachname:*" name="lname" autocomplete="family-name" />
				<SimpleInputField text="Addresse:*" name="address" autocomplete="street-address" />
				<SimpleInputField text="Postleitzahl:*" name="plz" autocomplete="postal-code" />
				<SimpleInputField text="Ort:*" name="ort" autocomplete="address-level2" />
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
				<SimpleInputField text="Geburtsdatum:*" name="bday" autocomplete="bday" type="date" />
				<SimpleInputField text="Email-Adresse:*" name="email" autocomplete="email" />
				<SimpleInputField text="Telefon:*" name="phone" autocomplete="tel" />
				<SimpleInputField text="Postleitzahl:*" name="plz" autocomplete="postal-code" />
			</div>
		</div>
		<div>
			<div>
				<RadioButton
					name="lieferadresse_vorhanden"
					values={['Ja', 'Nein']}
					bind:selected={lieferadresse_vorhanden}
					text="Abweichende Lieferadresse gewünscht?"
				/>
			</div>
		</div>
		{#if lieferadresse_vorhanden === 'Ja'}
			<div>
				<div>
					<SimpleInputField text="Anrede:" name="anrede" type="select">
						<option value="herr">Herr</option>
						<option value="frau">Frau</option>
						<option value="--">Keine Angabe</option>
					</SimpleInputField>
					<SimpleInputField text="Vorname:*" name="fname" autocomplete="given-name" />
					<SimpleInputField text="Nachname:*" name="lname" autocomplete="family-name" />
					<SimpleInputField
						text="Straβe oder Packstation:*"
						name="address"
						autocomplete="street-address"
					/>
					<SimpleInputField text="Postleitzahl:*" name="plz" autocomplete="postal-code" />
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
					<SimpleInputField text="Postleitzahl:*" name="plz" autocomplete="postal-code" />
					<SimpleInputField text="Ort:*" name="ort" autocomplete="address-level2" />
					<SimpleInputField text="Firma:" name="firma" autocomplete="off" />
					<SimpleInputField
						text="Hausnummer oder DHL Kundennummer:"
						name="hausnummer"
						autocomplete="off"
					/>
				</div>
			</div>
		{/if}
		<div>
			<div>
				<RadioButton
					name="sepa_vorhanden"
					values={['Ja', 'Nein']}
					bind:selected={sepa_vorhanden}
					text="SEPA Bankinformationen vorhanden?"
				/>
			</div>
			<div>
				<SimpleInputField text="Name der Bank:*" name="bank_name" autocomplete="bank" />
				{#if sepa_vorhanden == 'Ja'}
					<SimpleInputField
						text="IBAN:"
						name="iban"
						autocomplete="iban"
						validator={iban_validator}
					/>
					<SimpleInputField text="BIC:" name="bic" autocomplete="bic" validator={bic_validator} />
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
					/>
					<SimpleInputField text="Kontonummer:" name="kontonummer" autocomplete="kontonummer" />
				{/if}
			</div>
		</div>
	</form>
	<div class="price_overview">
		<OfferSummary {selected_priceable_assets} />
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
