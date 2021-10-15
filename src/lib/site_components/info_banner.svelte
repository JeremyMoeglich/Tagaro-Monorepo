<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/layout_components/button.svelte';
	import Cookies from 'js-cookie';
	import lodash from 'lodash';
	import * as cookie_keys from '$lib/vars/cookie_keys';

	function IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	function GetPrefrenceObj(): { [key: string]: boolean | undefined } {
		const original_cookie_json = Cookies.get('preferences');
		let return_object = { Essentiell: true };
		if (original_cookie_json && IsJsonString(original_cookie_json)) {
			let object: any = JSON.parse(original_cookie_json);
			if (Object.values(object).every((key) => typeof key == 'boolean')) {
				return_object = object;
			}
		}
		const keys = Object.keys(return_object);
		const difference = cookie_keys.required_keys.filter((x) => !keys.includes(x));
		difference.forEach((element) => {
			return_object[element] = undefined;
		});
		return return_object;
	}

	function AreCookiesAccepted(object: { [key: string]: boolean | undefined }): boolean {
		//return false;
		return !Object.values(object).some((key) => key === undefined) || !browser;
	}

	let accept_obj: { [key: string]: boolean } = GetPrefrenceObj();

	export let preferences_object = accept_obj;
	$: preferences_object = lodash.cloneDeep(accept_obj);

	$: Cookies.set('preferences', JSON.stringify(accept_obj), { expires: 128 });

	let edit_preferences = lodash.cloneDeep(accept_obj);
	Object.entries(edit_preferences).forEach((element) => {
		edit_preferences[element[0]] = Boolean(element[1]);
	});
	const tabs = {
		Cookies: /*html*/`
		Auf dieser Website werden Cookies und ähnliche Technologien genutzt.
		Einige sind für den Betrieb der Website notwendig.
		Andere können aktiviert werden und dienen statistischen Erhebungen zur Optimierung der Webseite,
		der Nachverfolgung von Werbemaßnahmen, auch über mehrere Webseiten hinweg sowie der Personalisierung.
		Bedenke, dass nicht aktivierte Cookies den Funktionsumfang der Webseite einschränken können.
		Bei vereinzelten Cookies akzeptierst du zudem, dass deine Daten in Ländern,
		die unter Umständen kein adäquates Schutzniveau i.S.d. DSGVO bieten,
		verarbeitet werden können.
		`,
		Kontakt: /*html*/`
		
		`,
		Aboformular: /*html*/`
		
		`,
		Widerrufsrecht: /*html*/`
		Widerrufsrecht für Sky Verträge <br/>

		Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Sky Vertrag zu widerrufen. <br/>
	
		Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses. <br/>

		Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (TAGARO Medienshop – Möglich & Möglich GbR, Bachstr. 61, 35614 Asslar-Werdorf, E-Mail info@tagaro.de, Telefon 06443 819427, Fax 0321 21116558 mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. <br/>

		Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können das Muster-Widerrufsformular oder eine andere eindeutige Erklärung auch auf unserer Webseite http://www.tagaro.de elektronisch ausfüllen und übermitteln. Machen Sie von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich (z. B. per E-Mail) eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln. <br/>

		Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. <br/>

		Folgen des Widerrufs <br/>

		Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tage ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. <br/>

		Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tage ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrages unterrichten, an uns (siehe Anschrift oben sowie auf dieser Seite) oder an Sky Deutschland, 22033 Hamburg vor Ablauf der Frist von 14 Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
		`,
		Impressum: /*html*/`
		<h2>Unternehmen</h2>
		<p>
			TAGARO Medienshop ist eine Domain der <br />
			Möglich & Möglich GbR <br />
			Vertretungsberechtigte Gesellschafter: <br />
			Jaco Möglich und Gertraud Möglich <br />
			Rechtsform: GbR <br />
			Bereich: Fachhandel für Unterhaltungsmedien und digitales Fernsehen
		</p>

		Urheberrechtsschutz: Alle Grafiken & Texte unterliegen dem Copyright des Unternehmens. Kopie
		oder sonstige Verwendung sind ohne die schriftliche Zustimmung der Möglich & Möglich GbR
		untersagt und werden bei Zuwiderhandlung strafrechtlich verfolgt.

		<h2>Adresse</h2>
		<p>
			TAGARO Medienshop <br />
			Möglich & Möglich GbR <br />
			Bachstraße 61 <br />
			D-35614 Asslar-Werdorf
		</p>

		<h2>Finanzamt</h2>
		<p>
			Finanzamt Wetzlar <br />
			Steuer-Nummer: 039 347 00053 <br />
			USt-IdNr.: DE 248966903
		</p>

		<h2>Bankverbindung</h2>
		<p>
			Volksbank Mittelhessen eG <br />
			Kontoinhaber: TAGARO <br />
			IBAN : DE27513900000046206800 <br />
			SWIFT-BIC : VBMHDE5FXXX <br />
			Kontonummer: 46206800 <br />
			Bankleitzahl: 51390000
		</p>
		`
	};
	let current_tab = 'Cookies';
</script>

<svelte:head>
	{#if !AreCookiesAccepted(accept_obj)}
		<style type="text/css">
			body {
				overflow-y: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if !AreCookiesAccepted(accept_obj)}
	<div class="grey_out" />
	<div class="outer">
		<div class="scroll_container">
			<div class="top_bar">
				<img src="/favicon.svg" alt="" style="height: 70px;" />
				<h2>Cookie Einstellungen</h2>
			</div>
			<div class="side_alignment">
				<div class="options">
					{#each Object.entries(edit_preferences) as pair}
						<div class="option">
							<p>{pair[0]}</p>
							<label class="switch">
								<input
									type="checkbox"
									bind:checked={edit_preferences[pair[0]]}
									disabled={pair[0] === 'Essentiell'}
								/>
								<span class="slider round" />
							</label>
						</div>
					{/each}
				</div>
				<div class="tabs_container">
					<div class="tab_bar">
						{#each Object.keys(tabs) as tab_name}
							<button
								class={current_tab === tab_name ? 'selected' : ''}
								on:click={function () {
									current_tab = tab_name;
								}}
							>
								{tab_name}
							</button>
						{/each}
					</div>
					<div class="tab_content">
						{@html tabs[current_tab]}
					</div>
				</div>
			</div>
			<div class="buttons">
				<div
					on:click={function () {
						accept_obj = lodash.cloneDeep(edit_preferences);
					}}
				>
					<Button text="Einstellungen Speichern" reversed={true} />
				</div>
				<div
					on:click={function () {
						accept_obj = lodash.cloneDeep(edit_preferences);
						Object.keys(accept_obj).forEach((element) => {
							accept_obj[element] = true;
						});
					}}
				>
					<Button text="Alle Akzeptieren" reversed={false} />
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.top_bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 50%;
		min-width: fit-content;
		gap: 20px;
	}
	.tab_bar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		button {
			flex-grow: 1;
			padding: 10px 0px;
			font-size: min(17px, 5vw);
		}
		button.selected {
			background-color: white;
		}
	}
	.tab_content {
		width: calc(100% - 40px);
		background-color: white;
		padding: 20px;
		overflow-y: scroll;
		height: 300px;
	}
	.tabs_container {
		font-size: min(17px, 5vw);
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 500px;
		max-width: 95vw;
	}
	.buttons {
		display: flex;
		gap: 20px;
		width: 450px;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: 95vw;
		justify-content: center;
	}
	.side_alignment {
		display: flex;
		gap: 20px;
		padding: 20px;
		justify-content: center;
		width: fit-content;
		max-width: 100%;
		flex-wrap: wrap-reverse;
	}
	.grey_out {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(75, 75, 75, 0.774);
		z-index: 1000;
	}
	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
	.options {
		display: flex;
		flex-direction: column;
		min-width: fit-content;
		background-color: white;
		padding: 20px;
		flex-grow: 1;
	}
	.outer {
		position: fixed;
		background-color: rgb(231, 231, 231);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1001;
		box-shadow: 0px 0px 300px -30px rgba(0, 0, 0, 0.75);
		border-radius: 10px;
	}
	.scroll_container {
		padding: 20px;
		align-items: center;
		width: 100%;
		max-height: 100vh;
		width: max-content;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}
	h2 {
		margin: 0px;
	}
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
		input {
			opacity: 0;
			width: 0;
			height: 0;
		}
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}
	input[disabled]:checked + .slider {
		background-color: rgb(120, 152, 179);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
