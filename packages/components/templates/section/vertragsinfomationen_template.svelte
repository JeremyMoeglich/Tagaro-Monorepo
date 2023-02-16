<script lang="ts">
	import AktivierungSentence from '../../complete/aktivierung_sentence.svelte';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';

	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import { base_premium_package_combinations } from 'asset_library/assets/packages';
	import { typed_entries } from 'functional-utilities';

	const title_classes = 'light';
</script>

<div class="vertragsinfomationen_outer">
	<div>
		<slot name="wählbare_pakete">
			<div class="wählbare_pakete">
				<h3 class={title_classes}>Wählbare Pakete und Kombinationen:</h3>
				<p>
					Angebote gelten mit einer Mindestvertragslaufzeit von 12 Monaten (Monat der Freischaltung
					(anteilig) zzgl. 12 Monaten)
				</p>
				<div class="base_package_combinations">
					{#each typed_entries(base_premium_package_combinations) as [base, { title, combinations }]}
						<div>
							<h4 class={title_classes}>{@html title}</h4>
							<ul>
								{#each combinations as combination}
									{@const comb = [base, ...combination]}
									{@const offer_note = get_offer_note(comb)}
									<li>
										- {comb.map((id) => indexed_priceable_assets[id].name).join(' + ')} für {@html get_price_string(
											comb,
											'jahr'
										)}&nbsp;mtl. im 12-Monats-Abo* {#if offer_note}
											<mark>({@html offer_note})</mark>
										{/if}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
				<AktivierungSentence />
				<ul>
					<li><b>Optional:</b></li>
					<li>- UHD mtl. {@html get_price_string(['uhd'], 'jahr')} (für Sat oder Kabel-Empfang)</li>
					<li>
						- DAZN jährlich für {@html get_price_string(['dazn'], 'jahr')} mtl. oder DAZN monatlich für
						{@html get_price_string(['dazn'], 'monat')} mtl.
					</li>
					<li>
						- Multiscreen für {@html get_price_string(['multiscreen'], 'jahr')} mtl. - Inkl. Sky Go Plus
						für 3 mobile Geräte, 2. Sky Q Receiver für einmalig €&nbsp;49, 1-2 Sky Q Mini für je einmalig
						€&nbsp;29 (zur Leihe)
					</li>
					<li>
						- Netflix Standard-Abo, HD/2 Geräte (+ {@html get_price_string(
							['netflixstandard'],
							'jahr'
						)} mtl.)
					</li>
					<li>
						- Netflix Premium-Abo, UHD/4 Geräte (+ {@html get_price_string(
							['netflixpremium'],
							'jahr'
						)}
						mtl.)
					</li>
					<li>- trendSports mtl. {@html get_price_string(['trendsports'], 'jahr')}</li>
					<li>- 18+ für Blue Movie €&nbsp;0, einmalige Versandpauschale 18+ PIN</li>
					<!-- <li>
						- UHD für €&nbsp;4 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark> oder €&nbsp;5 mtl. mit Entertainment
						(für Sat oder Kabel-Empfang)
					</li>
					<li>- DAZN jährlich für €&nbsp;24,99 mtl. oder DAZN monatlich für €&nbsp;29,99 mtl.</li>
					<li>
						- Multiscreen für €&nbsp;8 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark> oder €&nbsp;10 mtl.
						mit Entertainment (Inkl. Sky Go Plus für 3 mobile Geräte, 2. Sky Q Receiver für einmalig
						€&nbsp;49, 1 Sky Q Mini für einmalig €&nbsp;29 oder OHNE zusätzliche Hardware)
					</li>
					<li>
						- Netflix Standard-Abo, HD/2 Streams für €&nbsp;4 mtl. mit Entertainment Plus <mark
							>(20% Rabatt)</mark
						>
						oder €&nbsp;5 mtl. mit Entertainment
					</li>
					<li>
						- Netflix Premium-Abo, UHD/4 Streams für €&nbsp;8 mtl. mit Entertainment Plus <mark
							>(20% Rabatt)</mark
						>
						oder €&nbsp;10 mtl. mit Entertainment
					</li>
					<li>
						- Sky Kids Zubuchung für €&nbsp;4 mtl. mit Entertainment Plus <mark>(20% Rabatt)</mark> oder €
						5 mtl. mit Entertainment
					</li>
					<li>- trendSports für €&nbsp;5,99 mtl.</li>
					<li>- 18+ für Blue Movie €&nbsp;0, einmalige Versandpauschale 18+ PIN</li> -->
				</ul>
			</div>
		</slot>
	</div>
	<div class="slot">
		<slot />
	</div>
	<div>
		<h3 class={title_classes}>Laufzeit und Preise bei Verlängerung:</h3>
		<p>
			Das Abonnement kann erstmals mit einer Frist von einem Monat zum Ablauf der
			Mindestvertragslaufzeit gekündigt werden. Das Abonnement verlängert sich ansonsten automatisch
			jeweils um einen weiteren Monat, wenn es nicht jeweils mit einer Frist von einem Monat zum
			Ablauf der Laufzeit, gekündigt wird. Im Falle der Verlängerung gelten folgende Preise:
		</p>
		<div class="laufzeit">
			<ul>
				<li>
					Entertainment für {@html get_price_string(['entertainment'], 'monat')} mtl.
				</li>
				<li>
					Entertainment + Sport für {@html get_price_string(['entertainment', 'sport'], 'monat')} mtl.
				</li>
				<li>
					Entertainment + Cinema für {@html get_price_string(['entertainment', 'cinema'], 'monat')} mtl.
				</li>
				<li>
					Entertainment + Fußball-Bundesliga für {@html get_price_string(
						['entertainment', 'bundesliga'],
						'monat'
					)} mtl.
				</li>
				<li>
					Entertainment + Sport + Cinema für {@html get_price_string(
						['entertainment', 'sport', 'cinema'],
						'monat'
					)} mtl.
				</li>
				<li>
					Entertainment + Sport + Fußball-Bundesliga für {@html get_price_string(
						['entertainment', 'sport', 'bundesliga'],
						'monat'
					)} mtl.
				</li>
				<li>
					Entertainment + Cinema + Fußball-Bundesliga für {@html get_price_string(
						['entertainment', 'cinema', 'bundesliga'],
						'monat'
					)} mtl.
				</li>
				<li>
					Entertainment + Sport + Cinema + Fußball-Bundesliga für {@html get_price_string(
						['entertainment', 'sport', 'cinema', 'bundesliga'],
						'monat'
					)} mtl.
				</li>
			</ul>
		</div>
		<ul class="laufzeit">
			<li>
				Entertainment Plus für {@html get_price_string(['entertainmentplus'], 'monat')} mtl.
			</li>
			<li>
				Entertainment Plus + Sport für {@html get_price_string(
					['entertainmentplus', 'sport'],
					'monat'
				)} mtl.
			</li>
			<li>
				Entertainment Plus + Cinema für {@html get_price_string(
					['entertainmentplus', 'cinema'],
					'monat'
				)} mtl.
			</li>
			<li>
				Entertainment Plus + Fußball-Bundesliga für {@html get_price_string(
					['entertainmentplus', 'bundesliga'],
					'monat'
				)} mtl.
			</li>
			<li>
				Entertainment Plus + Sport + Fußball-Bundesliga für {@html get_price_string(
					['entertainmentplus', 'sport', 'bundesliga'],
					'monat'
				)} mtl.
			</li>
			<li>
				Entertainment Plus + Sport + Cinema für {@html get_price_string(
					['entertainmentplus', 'sport', 'cinema'],
					'monat'
				)} mtl.
			</li>

			<li>
				Entertainment Plus + Cinema + Fußball-Bundesliga für {@html get_price_string(
					['entertainmentplus', 'cinema', 'bundesliga'],
					'monat'
				)} mtl.
			</li>
			<li>
				Entertainment Plus + Sport + Cinema + Fußball-Bundesliga für {@html get_price_string(
					['entertainmentplus', 'cinema', 'bundesliga', 'sport'],
					'monat'
				)} mtl.
			</li>
		</ul>
		<ul class="laufzeit">
			<li>Mit UHD {@html get_price_string(['uhd'], 'monat')} mtl.</li>
			<li>Multiscreen {@html get_price_string(['multiscreen'], 'monat')} mtl.</li>
			<li>
				Netflix Standard-Abo, HD/2 Geräte (+{@html get_price_string(['netflixstandard'], 'monat')} mtl.)
			</li>
			<li>
				Netflix Premium-Abo, UHD/4 Geräte (+{@html get_price_string(['netflixpremium'], 'monat')} mtl.)
			</li>
			<li>Sky Kids {@html get_price_string(['kids'], 'monat')} mtl.</li>
		</ul>
	</div>
	<div>
		<h3 class={title_classes}>Sky Entertainment Plus:</h3>
		<p>
			Das Sky Entertainment Plus Paket umfasst zusätzlich den Zugang zu Netflix Basis (beinhaltet
			aktuell HD 720p und die gleichzeitige Nutzung von Netflix auf einem Gerät) des Anbieters Netflix
			International B.V. Voraussetzung für die Nutzung des Netflix Dienstes über die Sky Q Plattform
			im Rahmen des Pakets Sky Entertainment Plus ist ein Sky Q Receiver oder eine Sky Q IPTV Box,
			welcher mit dem Internet verbunden ist. Für die Internetverbindung anfallende Kosten sind kein
			Bestandteil des Sky Abonnements. Der Netflix Dienst steht auf Sky Go und der Sky Q App für
			Smart-TVs nicht zur Verfügung. Sobald der Netflix Dienst im Rahmen des Sky Entertainment
			Plus-Abonnements aktiviert ist, kann er auch außerhalb von Sky Q über die Plattformen und Apps
			von Netflix genutzt werden. Das Sky Entertainment Plus-Abonnement gewährt den Zugang zum
			Netflix-Dienst wie oben näher beschrieben. Für Netflix-Accounts, die mit Sky Entertainment
			Plus verbunden sind, gilt für die Dauer des Sky Entertainment Plus-Abonnements folgendes: Die
			Geschäftsbedingungen von Sky regeln das Abonnementverhältnis des Kunden mit Sky sowie das Sky
			Entertainment Plus-Abonnement selbst, während die Nutzungsbedingungen von Netflix die
			Benutzung des Netflix-Dienstes durch den Kunden regeln. Alle Ansprüche des Kunden im Hinblick
			auf das Entertainment Plus-Abonnement müssen gegenüber Sky geltend gemacht werden. Sky erklärt
			hiermit im Namen von Netflix, dass die Netflix-Nutzungsbedingungen in Bezug auf die Laufzeit,
			die Rechnungsstellung, den Preis, ausdrückliche
			Zusicherungen/Gewährleistungsansprüche/Garantien (soweit vorhanden), Probezeiträume und
			Kündigungen nicht anwendbar sind. Und Netflix wird in Bezug auf den jeweiligen Netflix-Account
			keine Entgelte in Rechnung stellen.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Entertainment Plus Upgrade auf Netflix Standard/Premium:</h3>
		<p>
			Gegen Aufpreis kann jederzeit ein Upgrade des Entertainment Plus Pakets von Netflix Basis auf
			Netflix Standard oder Premium vorgenommen werden. Netflix Standard beinhaltet aktuell Full HD 1080p und
			die gleichzeitige Nutzung von Netflix auf bis zu zwei Geräten. Netflix Premium beinhaltet
			aktuell UHD und die gleichzeitige Nutzung von Netflix auf bis zu vier Geräten. Das Sky
			Entertainment Plus Upgrade kann vom Kunden jederzeit sowohl mittels Erklärung gegenüber Sky
			als auch gegenüber Netflix beendet werden. Im letzteren Fall (Erklärung der Kündigung
			gegenüber Netflix) handelt Netflix als Empfangsbote für Sky. Das Entertainment Plus Paket
			enthält ab dem Wirksamwerden dieser Kündigung wiederum nur noch Netflix Basis oder Netflix
			Standard.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>DAZN über Sky:</h3>
		<p>
			Die Laufzeit entspricht 1 Monat oder 12 Monate, jeweils mit anschließender automatischer
			Verlängerung jeweils um einen Monat. Im Falle der Verlängerung fällt bei der 12-Monats Option
			ein monatlicher Preis von {@html get_price_string(['dazn'], 'jahr')} an. Im deutschen Kabelnetz
			von Vodafone/Unitymedia sind die beiden Sender aus lizenzrechtlichen Gründen derzeit nicht verfügbar.
			Kunden, die Sky über dieses Netz empfangen, können ebenfalls wie Kunden anderer Netze, die DAZN
			Inhalte über Sky Q in der DAZN App empfangen. Zum Empfang über die DAZN App ist eine dauerhafte
			Internetverbindung nötig. Empfohlene Übertragungsrate von mindestens 8 Mbit/s für HD-Qualität.
			Durch eine parallele Nutzung von Inhalten erhöht sich die benötigte Mindestbandbreite. Erst mit
			Aktivierung des DAZN-Abonnements beginnt dessen zahlungspflichtige Laufzeit. Sky übersendet per
			E-Mail einen DAZN-Aktivierungslink. Über diesen kann das DAZN-Abonnement direkt bei DAZN aktiviert
			werden. Die Aktivierung ist bis 7 Tage ab Versand des Aktivierungslinks möglich. Falls das DAZN-Abonnement
			nicht innerhalb dieser Frist aktiviert wird, wird die Buchung automatisch nach 7 Tagen storniert.
			Vertragspartner ist die DAZN Limited, Hanover House, Plane Tree Crescent, Feltham, Vereinigtes
			Königreich, TW137BZ. Voraussetzung für die Nutzung der linearen Kanäle im DAZN-Abonnement über
			Sky, ist ein aktives nicht-gewerbliches Sky Abonnement, dem steht ein Mietverhältnis eines Sky
			Receiver gleich. Das DAZN-Abonnement kann jederzeit mit Wirkung zum Ende der jeweiligen Laufzeit
			gekündigt.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Go inkl. Download:</h3>
		<p>
			Sky Go für 1 Stream gleichzeitig ist kostenlos im Abonnement enthalten. Mit Sky Go können
			einzelne Inhalte des Sky Abonnements (ausgenommen gewerbliche und Sky Ticket Abonnements) über
			das Internet (ausgeschlossen ist die Verbindung über einen VPN-Zugang) mit einem mobilen
			Endgerät (Smartphones/Tablets ab iOS 9.0, Android 4.2, Windows 7, MacOS 10.9) empfangen und
			abgerufen werden. Die verfügbaren Inhalte sind abhängig von den gebuchten Sky Programmpaketen.
			Empfohlene Bandbreite 1 Mbit/s für SD-Qualität, 6 Mbit/s für HD-Qualität. Kunden können Sky Go
			gemäß EU-Portabilitätsverordnung auch während eines vorübergehenden Aufenthalts in einem
			anderen EU-Mitgliedstaat als Österreich oder Deutschland nutzen. Mit der Download-Funktion
			können bis zu 25 Titel (max. 5 Spielfilme) gleichzeitig und jeder Titel kann nur zweimal im
			Kalenderjahr heruntergeladen werden. Die heruntergeladenen Titel bleiben jeweils 30 Tage
			verfügbar. Nach Beginn der Wiedergabe stehen die Titel 48 Stunden lang zur Verfügung und
			werden anschließend gesperrt.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Go Plus:</h3>
		<p>
			Mit Sky Go Plus können einzelne Inhalte des Sky Abonnements auf 3 mobilen Endgeräten mit der
			Sky Go App gestreamt werden (ausgeschlossen ist die Verbindung über einen VPN-Zugang).
		</p>
	</div>
	<div>
		<h3 class={title_classes}>UHD:</h3>
		<p>
			Für den Empfang der UHD-Kanäle ist ein Sky Q Receiver sowie ein UHD-fähiges Endgerät (z.B.
			Fernseher) erforderlich. Welche UHD-Sender enthalten sind, richtet sich nach den gewählten
			Programmpaketen und der Verfügbarkeit beim jeweiligen Netzbetreiber. Weitere Informationen
			unter www.sky.de/senderempfang. Vereinzelt sind aus lizenzrechtlichen Gründen bestimmte
			Inhalte nicht in UHD verfügbar. Über die Sky Q IPTV Box und Sky Q-Mini sind UHD-Inhalte nicht
			verfügbar.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Multiscreen (bis zu 5 Geräte):</h3>
		<p>
			Mit Multiscreen kann das Sky Programm mit Sky Q über das Internet auf bis zu 3 Endgeräten und
			auf Sky Q über SAT oder Kabel auf bis zu 5 Endgeräten gleichzeitig gestreamt werden.
			Voraussetzung ist die Nutzung von mindestens einem Sky Q Receiver oder einer Sky Q IPTV Box
			sowie eine stabile Internetverbindung (ausgeschlossen ist die Verbindung über einen
			VPN-Zugang). Empfohlene Bandbreite 6 Mbit/s für HD-Qualität. Für die Internetverbindung
			anfallende Kosten sind nicht Bestandteil des Abonnements. Das Streaming des Sky Programmes ist
			mit der Sky Q-Mini, der Sky Q IPTV Box, der Sky Q App (auf Apple TV ab Generation 4, auf Smart
			TV von LG Electronics mit Betriebssystem Web OS 2.0 oder höher oder Samsung Smart TV ab
			Modelljahr 2015 mit Tizen Betriebssystem oder einer Playstation 4 Konsole) und mit der Sky Go
			App auf mobilen Endgeräten (Betriebssysteme: Android, iOS, Windows; Hersteller: Mac, Huawei)
			möglich. Über die Sky Q IPTV Box und Sky Q-Mini sind UHD-Inhalte nicht verfügbar. Pro Sky Q
			Abonnement über SAT oder Kabel sind maximal 2 Sky Q Receiver (je €&nbsp;49 durch Sky) zzgl.
			maximal 2 Sky Q-Mini (je €&nbsp;29 durch Sky) oder bei einem Sky Q Abonnement über das
			Internet maximal 3 Sky Q IPTV Boxen (je €&nbsp;29 durch Sky) buchbar. Eine Buchung von
			Multiscreen ohne zusätzliches Gerät ist ebenso möglich.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Apps:</h3>
		<p>
			Nicht enthalten ist die Nutzung von kostenpflichtigen Apps/Mediatheken wie z. B. Prime Video,
			Netflix , DAZN etc. Hierfür ist ein separates Abonnement des jeweiligen Anbieters nötig. <br
			/>
			Netflix und DAZN lassen sich über uns hinzubuchen.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>HD+:</h3>
		<p>
			Bei Sat-Empfang werden die HD+ Sender für HD+ Neukunden 4 Monate kostenlos freigeschaltet. Die
			Freischaltung endet automatisch. Danach können die HD+ Sender gegen eine Servicepauschale
			weiterhin zugebucht werden. Bei gesonderter Buchung der HD+ Sender sind die ersten 6
			Laufzeitmonate kostenlos und es gilt eine Mindestvertragslaufzeit von einem Monat. Das
			Abonnement verlängert sich nach Ablauf der Mindestlaufzeit um jeweils einen weiteren Monat,
			wenn es nicht mit einer Frist von 1 Monat auf den Ablauf der Laufzeit gekündigt wird. Danach
			beträgt die Abonnementgebühr €&nbsp;6 mtl. Vertragspartner des HD+ Abonnements ist die HD PLUS
			GmbH. Die HD PLUS GmbH ermächtigt Sky, die Abonnementgebühren einzuziehen.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Q Receiver:</h3>
		<p>
			Sky stellt einen Sky Q Receiver leihweise zur Verfügung (die Servicepauschale i. H. v.
			€&nbsp;149 entfällt).
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Q Mini:</h3>
		<p>
			Sky Q Mini wird leihweise für die Dauer des Sky Abonnements zur Verfügung gestellt. Mit Sky Q
			Mini können einzelne Inhalte des Sky Abonnements über das Internet auf einem TV-Gerät mit
			HDMI-Anschluss empfangen werden. Voraussetzung ist ein Sky Abonnement inkl. Sky Q. UHD-Inhalte
			sind über Sky Q Mini nicht verfügbar. Für die Internetverbindung anfallende Kosten sind kein
			Bestandteil des Sky Abonnements.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Q IPTV Box:</h3>
		<p>
			Die Sky Q IPTV Box wird leihweise für die Dauer des Sky Abonnements zur Verfügung gestellt.
			Mit der Sky Q IPTV Box können einzelne Inhalte des Sky Abonnements über das Internet auf einem
			TV-Gerät mit HDMI-Anschluss empfangen werden. Voraussetzung ist ein Sky Abonnement inkl. Sky Q
			sowie eine dauerhafte Internetverbindung. Empfohlene Bandbreite mindestens 3,5 Mbit/s für
			SD-Qualität, 6 Mbit/s für HD-Qualität. Für die Internetverbindung anfallende Kosten sind kein
			Bestandteil des Sky Abonnements. UHD-Inhalte sind über die Sky Q IPTV Box nicht verfügbar.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>trendSports:</h3>
		<p>
			Nur für Sat-Empfang. Spektakulär - rund um die Uhr - live: Entdecke die Faszination von
			trendSports mit Sport1+, sportdigital fussball, EDGEsport, eSports1 und WAIDWERK. Über 3.000h
			live, dazu News, Magazine und Dokumentationen.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>18+:</h3>
		<p>
			In der Sky Paketabwicklung hinzubuchbar. Bei Anforderung einer Smartcard bzw. Leihe eines
			Receivers entfällt die Logistikpauschale. Filmabrufe bei Blue Movie und bei Select 18+ sind
			kostenpflichtig. Für die Nutzung von Sky On Demand ist ein Sky+ HD-Festplattenreceiver
			notwendig.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Zusätzliche Informationen:</h3>
		<p>
			Dieses Angebot gilt für Internet, Sat- oder Kabelanschluss. Es ist eine deutsche Adresse zur
			Bestellung erforderlich. Der Abobeginn ist nicht verlegbar. Der Vertrag
			startet innerhalb von 7 Tagen nach Erhalt der Ware.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>€&nbsp;20 Prämie von uns:</h3>
		<p>
			Als Dankeschön erhalten Sie eine Prämie von €&nbsp;20 auf Ihr Konto überwiesen. Sie erhalten
			den Betrag nach ca. 8 Wochen nach dem Abobeginn gutgeschrieben.
		</p>
	</div>
	<br />
</div>

<style>
	ul {
		list-style: none;
		line-height: 150%;
		padding-left: 0px;
	}
	:global(.vertragsinfomationen_outer) {
		font-size: small;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.wählbare_pakete {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.base_package_combinations {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.laufzeit {
		margin-top: 8px;
	}
</style>
