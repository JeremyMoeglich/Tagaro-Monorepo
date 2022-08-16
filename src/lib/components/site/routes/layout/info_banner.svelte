<script lang="ts">
	import { browser } from '$app/env';
	import {
		get_preferences,
		preferences_accepted,
		preferences_keys,
		preferences_keys_enum,
		set_preferences,
		preferences_store
	} from '$lib/scripts/frontend/preferences';
	import type { preferences_obj } from '$lib/scripts/frontend/preferences';
	import Datenschutz from '../../service/datenschutz.svelte';
	import Widerrufsrecht from '../../service/widerrufsrecht.svelte';
	import Impressum from '../../service/impressum.svelte';
	import Button from '$lib/components/elements/interactive/buttons/button.svelte';
	import { cloneDeep } from 'lodash-es';
	import { page } from '$app/stores';

	const disabled_routes = ['/service'];

	$: banner_enabled = !disabled_routes.some((element) => $page.url.pathname.startsWith(element));

	function is_banner_shown(object: preferences_obj, banner_enabled: boolean): boolean {
		return !preferences_accepted(object) && banner_enabled && browser;
	}

	let edit_preferences = cloneDeep(get_preferences());
	preferences_keys.forEach((key) => {
		edit_preferences[key] = Boolean(edit_preferences[key]);
	});

	function save_current_preferences() {
		set_preferences(edit_preferences);
	}

	function save_accept_all_preferences() {
		preferences_keys.forEach((key) => {
			edit_preferences[key] = true;
		});
		set_preferences(edit_preferences);
	}

	const tabs = {
		Datenschutz: Datenschutz,
		Kontakt: /*html*/ `
			<p>
				Im Rahmen der Kontaktaufnahme mit uns werden folgende personenbezogene Daten erhoben.
			</p>
			<ul>
				<li>Name</li>
				<li>E-Mail-Adresse</li>
				<li>Telefon-Nummer falls angegeben</li>
				<li>Nachricht</li>
			</ul>
			<p>
				Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die
				Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage
				für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß
				Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche
				Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender
				Bearbeitung Ihrer Anfrage gelöscht, dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass
				der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten
				entgegenstehen.
			</p>
		`,
		Vertragsaufnahme: /*html*/ `
			<p>
				<b>Weitergabe personenbezogener Daten an die Sky Deutschland Fernsehen GmbH & Co. KG </b><br /><br />
			Im Rahmen und zur Durchführung der Vertragserstellung eines Sky Abonnements, werden eingereichte Abodaten eines Kunden (Kaufgegenstand, Name, Postanschrift, E-Mail-Adresse, Lieferanschrift und Bankverbindung) an Sky (Sky Deutschland Fernsehen GmbH & Co. KG, Medienallee 26 <br />
			85774 Unterföhring) weitergegeben. <br />
			 <br />
			Die Weitergabe erfolgt über ein verschlüsseltes Zugangssystem für Sky Partner. <br />
			 <br />
			Im Folgenden möchten wir Sie darüber informieren, wie lange Sky personenbezogene Daten von Ihnen speichert oder, falls die Angabe eines konkreten Zeitraums nicht möglich ist, wie die Kriterien für die Festlegung der Speicherdauer sind. <br />
			Sky bewahrt Ihre Daten über die folgenden Zeiträume auf; nach Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig gelöscht. <br />
			 <br />
			Vertragsdaten in der Kundendatenbank von Sky: <br />
			 <br />
			Z.B. Kaufgegenstand, Name, Postanschrift, E-Mail-Adresse, Lieferanschrift, Bezahlweise und Bankdaten <br />
			Aufbewahrungsfrist bei Sky: <br />
			10 Jahre, beginnend mit Ende des Kalenderjahres, in dem der Vertrag beendet/der Dienst letztmalig genutzt wurde  <br />
			 <br />
			Sofern Daten hiervon nicht berührt sind, werden die Daten gelöscht, wenn die Zwecke wegfallen, für die sie erhoben wurden, oder wenn Sie eine Einwilligung, auf der eine Datenverarbeitung beruht, widerrufen. <br />
			Für den Fall, dass eine Löschung aus rechtlichen, technischen oder organisatorischen Gründen nicht oder nur mit unverhältnismäßigem Aufwand möglich ist, wird die Verarbeitung Ihrer Daten eingeschränkt.  <br />
			 <br />
			<b>Weitergabe personenbezogener Daten an die Innovero Software Solutions B.V.</b><br /><br />
			Im Rahmen und zur Durchführung der Vertragserstellung eines Sky Abonnements, werden Abodaten eines Kunden (Kaufgegenstand, Name, Postanschrift, E-Mail-Adresse, Lieferanschrift, Bezahlweise und Bankdaten) über das Formdesk Formular-System von Innovero (Innovero Software Solutions B.V., Rijksstraatweg 713 zu Wassenaar, Kamer van Koophandel-Nummer 27157981) aufgenommen. <br />
			Sämtliche Aboformulare des Formdesk Formular-System sind SSL-verschlüsselt. <br />
			Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen. <br />
			Die Parteien haben am 18.05.2018 einen Vertrag in Bezug auf die Nutzung der Dienstleistung durch den Verarbeitungsverantwortlichen geschlossen. Zur Ausführung des Vertrags verarbeitet der Verarbeiter für den Verarbeitungsverantwortlichen Personenbezogene Daten. <br />
			Im Rahmen der Vertragsausführung ist Innovero Software Solutions B.V. als Verarbeiter im Sinne der DSGVO zu betrachten und die TAGARO Medienshop - Möglich & Möglich GbR als Verarbeitungsverantwortlicher im Sinne der DSGVO zu betrachten. <br />
			Die Parteien nehmen sich vor, sorgfältig und in Übereinstimmung mit der DSGVO und anderen anderen gesetzlichen Regelungen in Bezug auf die Verarbeitung von Personenbezogenen Daten mit den Personenbezogenen Daten umzugehen, die für die Vertragsausführung verarbeitet werden. <br />
			Die Parteien nehmen sich vor, in Übereinstimmung mit der DSGVO und anderen gesetzlichen <br />
			Regelungen in Bezug auf die Verarbeitung von Personenbezogenen Daten ihre Rechte und <br />
			Pflichten hinsichtlich der Verarbeitung Personenbezogener Daten der Beteiligten schriftlich in einer Verarbeitungsvereinbarung festzuhalten. <br />
			Ein entsprechender Vertrag liegt intern vor und kann bei rechtlicher Notwendigkeit vorgelegt werden. <br />
			</p>
		`,
		Widerrufsrecht: Widerrufsrecht,
		Impressum: Impressum
	};
	let current_tab = 'Datenschutz';
</script>

{#if is_banner_shown($preferences_store, banner_enabled)}
	<div class="grey_out" />
	<div class="outer">
		<div class="top_bar">
			<img src="/favicon.svg" alt="" style="height: 30px;" />
			<h2>Datenschutz</h2>
		</div>
		<div class="options_top">
			{#each Object.entries(edit_preferences) as pair}
				<div class="option">
					<p>{preferences_keys_enum[pair[0]]}</p>
					<label class="switch">
						<input
							type="checkbox"
							bind:checked={edit_preferences[pair[0]]}
							disabled={pair[0] === 'essentiell'}
						/>
						<span class="slider round" />
					</label>
				</div>
			{/each}
		</div>
		<div class="side_alignment">
			<div class="options_side">
				{#each Object.entries(edit_preferences) as pair}
					<div class="option">
						<p>{preferences_keys_enum[pair[0]]}</p>
						<label class="switch">
							<input
								type="checkbox"
								bind:checked={edit_preferences[pair[0]]}
								disabled={pair[0] === 'essentiell'}
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
							on:click={() => {
								current_tab = tab_name;
							}}
						>
							{tab_name}
						</button>
					{/each}
				</div>
				<div class="tab_content">
					{#if typeof tabs[current_tab] === 'string'}
						{@html tabs[current_tab]}
					{:else}
						<svelte:component this={tabs[current_tab]} />
					{/if}
				</div>
			</div>
		</div>
		<div class="buttons">
			<div on:click={save_current_preferences}>
				<Button text="Einstellungen Speichern" reversed={true} />
			</div>
			<div on:click={save_accept_all_preferences}>
				<Button text="Alle Akzeptieren" reversed={false} />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.grey_out {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(75, 75, 75, 0.774);
		z-index: 1000;
	}
	$base_color: rgb(231, 231, 231);
	.outer {
		display: flex;
		position: fixed;
		flex-direction: column;
		align-items: center;
		background-color: $base_color;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1001;
		max-height: 80vh;
		max-width: 100vw;
		border-radius: 10px;
		gap: 20px;
		padding: 20px;
		$wrap_px: 700px;
		.top_bar {
			display: flex;
			align-items: center;
			gap: 20px;
			@media only screen and (max-width: $wrap_px) {
				order: -1;
			}
			h2 {
				margin: 0px;
			}
		}
		.options_top,
		.options_side {
			display: flex;
			flex-direction: column;
			padding: 20px;
			background-color: white;
		}
		.options_top {
			@media only screen and (min-width: $wrap_px) {
				display: none;
			}
		}
		.side_alignment {
			max-width: 100vw;
			flex: 1 1 0;
			max-height: 300px;
			display: flex;
			gap: 20px;
			@media only screen and (max-width: $wrap_px) {
				max-height: 26vh;
			}
			.tabs_container {
				position: relative;
				overflow-y: scroll;
				flex: 1 1 1;
				.tab_bar {
					position: absolute;
					position: sticky;
					top: -1px;
					display: flex;

					background-color: $base_color;
					& > * {
						flex: 1 1 0;
						padding: 10px 1vw;
						font-size: min(3.1vw, 15px);
					}
					.selected {
						background-color: white;
					}
				}
				.tab_content {
					background-color: white;
					padding: 20px;
					font-size: min(3.3vw, 15px);
				}
			}
			.options_side {
				@media only screen and (max-width: $wrap_px) {
					display: none;
				}
			}
		}
		.option {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
			p {
				margin: 0px;
			}
			.switch {
				position: relative;
				display: inline-block;
				$width: 60px;
				min-width: $width;
				max-width: $width;
				height: 34px;

				.slider {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: #ccc;
					transition: 0.4s;
					&.round {
						border-radius: 34px;
					}
					&.round:before {
						border-radius: 50%;
					}
					&:before {
						position: absolute;
						content: '';
						height: 26px;
						width: 26px;
						left: 4px;
						bottom: 4px;
						background-color: white;
						transition: 0.4s;
					}
				}
				input {
					opacity: 0;
					&:checked + .slider {
						background-color: #2196f3;
					}
					&[disabled]:checked + .slider {
						background-color: rgb(120, 152, 179);
					}
					&:focus + .slider {
						box-shadow: 0 0 1px #2196f3;
					}
					&:checked + .slider:before {
						-webkit-transform: translateX(26px);
						-ms-transform: translateX(26px);
						transform: translateX(26px);
					}
				}
			}
		}
		.buttons {
			display: flex;
			gap: 1vh;
			@media only screen and (max-width: $wrap_px) {
				order: -1;
			}
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
