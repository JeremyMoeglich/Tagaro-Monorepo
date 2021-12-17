<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/layout_components/button.svelte';
	import Cookies from 'js-cookie';
	import lodash from 'lodash';
	import * as cookie_keys from '$lib/vars/cookie_data';
	import { page } from '$app/stores';

	function IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	const disabled_routes = ['/service'];
	$: banner_enabled = !disabled_routes.some((element) => $page.path.startsWith(element));

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
	function IsBannerShown(
		object: { [key: string]: boolean | undefined },
		banner_enabled: boolean
	): boolean {
		return !AreCookiesAccepted(object) && banner_enabled;
	}

	let accept_obj: { [key: string]: boolean } = GetPrefrenceObj();

	export let preferences_object = accept_obj;
	$: preferences_object = lodash.cloneDeep(accept_obj);

	$: banner_enabled
		? Cookies.set('preferences', JSON.stringify(accept_obj), { expires: 128 })
		: undefined;

	let edit_preferences = lodash.cloneDeep(accept_obj);
	Object.entries(edit_preferences).forEach((element) => {
		edit_preferences[element[0]] = Boolean(element[1]);
	});
	const tabs = {
		Datenschutz: /*html*/ `
			<p>
				Auf dieser Website werden Cookies und ähnliche Technologien genutzt.
				Einige sind für den Betrieb der Website notwendig.
				Andere können aktiviert werden und dienen statistischen Erhebungen zur Optimierung der Webseite,
				der Nachverfolgung von Werbemaßnahmen, auch über mehrere Webseiten hinweg sowie der Personalisierung.
				Bedenke, dass nicht aktivierte Cookies den Funktionsumfang der Webseite einschränken können.
				Bei vereinzelten Cookies akzeptierst du zudem, dass deine Daten in Ländern,
				die unter Umständen kein adäquates Schutzniveau i.S.d. DSGVO bieten,
				verarbeitet werden können.
			</p>
		
		`,
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
		Widerrufsrecht: /*html*/ `
			<p>
				<b>Widerrufsrecht für Sky Verträge</b><br /><br /> 
				Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Sky Vertrag zu widerrufen. <br/><br/>
				Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses. <br/><br/>
				Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (TAGARO Medienshop – Möglich & Möglich GbR, Bachstr. 61, 35614 Asslar-Werdorf, E-Mail info@tagaro.de, Telefon 02381-9874699, Fax 0321 21116558 mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. <br/><br/>
				Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können das Muster-Widerrufsformular oder eine andere eindeutige Erklärung auch auf unserer Webseite https://www.tagaro.de elektronisch ausfüllen und übermitteln. Machen Sie von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich (z. B. per E-Mail) eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln. <br/><br/>
				Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. <br/>
				Folgen des Widerrufs <br/><br/>
				Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tage ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. <br/><br/>
				Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tage ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrages unterrichten, an uns (siehe Anschrift oben sowie auf dieser Seite) oder an Sky Deutschland, 22033 Hamburg vor Ablauf der Frist von 14 Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
			</p>
			<p>
				Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: <br />
							<br />
				1x Sky Programm, bestellt am: .................................... <br />
							 <br />
				Sky Kundennummer: .................................... <br />
							 <br />
							 <br />
				Name und Anschrift des Verbrauchers <br />
							 <br />
				.......................................................... <br />
				.......................................................... <br />
				.......................................................... <br />
				.......................................................... <br />
							 <br />
				Datum <br />
							 <br />
				................................................................................... <br />
				Unterschrift Abonnent (nur bei Mitteilung auf Papier)
			</p>

			<a href='/downloads/Widerrufsformular.pdf' target='_blank'>Widerrufsformular</a> <br />
			<a href='/service/widerrufsrecht'>Weitere Informationen</a>
		`,
		Impressum: /*html*/ `
			<p>
				<b>Unternehmen</b><br />
			</p>
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

			<b>Adresse</b><br />
			<p>
				TAGARO Medienshop <br />
				Möglich & Möglich GbR <br />
				Bachstraße 61 <br />
				D-35614 Asslar-Werdorf
			</p>

			<b>Finanzamt</b><br />
			<p>
				Finanzamt Wetzlar <br />
				Steuer-Nummer: 039 347 00053 <br />
				USt-IdNr.: DE 248966903
			</p>
			<b>Markenerwähnung „Sky“:</b><br />
			<p>
				Alle „Sky“-Marken einschließlich sonstiger geistiger Schutzrechte sind Eigentum der Sky
				International AG und werden von Sky in Lizenz genutzt. Alle hier verwendeten Namen, Begriffe,
				Zeichen, Logos und Grafiken können Marken- oder Warenzeichen im Besitze ihrer rechtlichen
				Eigentümer sein. Die Rechte aller erwähnten und benutzten Marken- und Warenzeichen liegen
				ausschließlich bei deren Besitzern.
			</p>
			<b>Bildnachweis:</b><br />

			<p>
				Teilweise werden auf tagaro.de Bilder bzw. Stockfotos von Shutterstock, Fotolia und der Website
				Sky.de zu Vermittlungs- und Visualisierungszwecken der einzelnen Programmpakete verwendet.
			</p>
			<b>Zweck:</b><br />

			<p>
				Die TAGARO Medienshop - Möglich & Möglich GbR ist ein autorisierter Onlinehändler der „Sky
				Deutschland Fernsehen GmbH & Co. KG“ und dient dem Zweck, allen interessierten Neu- und
				Bestandskunden von Sky, Abonnements von Sky zu vermitteln. Informationen zur Vertragsaufnahme und
				der Vermittlung, finden Sie im Abschnitt „5) Datenverarbeitung zur Bestellabwicklung“ im Bereich
				Datenschutz unter: <a href='/service/datenschutz'>https://www.tagaro.de/service/datenschutz</a>
			</p>
			<p>
				Die TAGARO Medienshop - Möglich & Möglich GbR nimmt keine Schreiben von Kündigungen,
				Streitigkeiten, Änderungen von Bankverbindungen oder vorzeitigen Vertragsauflösungen (im
				Sterbefall) entgegen.
			</p>

			<p>Sie möchten Sky kündigen, haben Fragen zu einem laufenden Vertrag, der älter als 14 Tage ist, haben Kritik oder möchten Ihr Abonnement ändern? Wir haben hier für alle Zwecke sämtliche Kontaktmöglichkeiten zu Sky Deutschland aufgelistet.</p>

			<b>Post-Anschrift von Sky:</b><br />
			<p>
				Sky Deutschland Fernsehen GmbH & Co. KG <br />
				Medienallee 26 <br />
				85774 Unterföhring
			</p>

			<b>Kundenservice-Postanschrift (für Bestandskunden):</b><br />
			<p>
				Sky Deutschland Fernsehen GmbH & Co. KG <br />
				22033 Hamburg
			<p>
			
			<b>Telefonischer Kundenservice von Sky:</b><br />
			<p>089 - 99 72 79 00 (gebührenfrei).<p>
		`
	};
	let current_tab = 'Datenschutz';
</script>

<svelte:head>
	{#if IsBannerShown(accept_obj, banner_enabled)}
		<style type="text/css">
			body {
				overflow-y: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if IsBannerShown(accept_obj, banner_enabled)}
	<div class="grey_out" />
	<div class="outer">
		<div class="top_bar">
			<img src="/favicon.svg" alt="" style="height: 30px;" />
			<h2>Datenschutz</h2>
		</div>
		<div class="options_top">
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
		<div class="side_alignment">
			<div class="options_side">
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
