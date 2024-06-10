<script lang="ts">
	import AktivierungSentence from '../../complete/aktivierung_sentence.svelte';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';

	import { bonus, get_offer_note, get_price_string } from 'asset_library/prices';
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
				<!-- <ul>
					<li><b>Inklusive: </b></li>
					<li>- UHD ... Temp</li>
				</ul> -->
				<ul>
					<li><b>Optional:</b></li>
					<!-- <li>
						- UHD für {@html get_price_string(['uhd'], 'jahr')} mtl.
					</li> -->
					<li>- UHD € 5 mtl.</li>
					<li>
						- DAZN UNLIMITED im Jahresabo für {@html get_price_string(['dazn_unlimited'], 'jahr')} mtl.
					</li>
					<li>
						- Multiscreen für {@html get_price_string(['multiscreen'], 'jahr')} mtl. - Inkl. Sky Go Plus
						für 3 mobile Geräte, 2. Sky Q Receiver für einmalig €&nbsp;49, 1-2 Sky Q Mini für je einmalig
						€&nbsp;39 (zur Leihe)
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
					<li>
						- Sky Kids für {@html get_price_string(['kids'], 'jahr')} mtl.
					</li>
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
			Das Abonnement verlängert sich automatisch nach der Mindestvertragslaufzeit auf unbestimmte
			Zeit, wenn es nicht mit einer Frist von einem Monat zum Ende der Mindestvertragslaufzeit
			gekündigt wird. Im Anschluss ist das Abonnement mit selber Frist monatlich kündbar. Im Falle
			der Verlängerung gelten folgende Preise:
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
			<li>UHD {@html get_price_string(['uhd'], 'monat')} mtl.</li>
			<li>
				DAZN Unlimited {@html get_price_string(['dazn_unlimited'], 'monat')} mtl.
			</li>
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
	<!-- <div>
		<h3 class={title_classes}>Ersparnis:</h3>
		<p>
			Die Ersparnis bis zu {@html get_savings_string([
				'entertainmentplus',
				'cinema',
				'bundesliga',
				'sport'
			])} ergibt sich aus dem rabattierten Sky Jahresabonnementspreis im Vergleich zum Sky Standard-Jahresabonnementspreis
			sowie aus dem rabattierten DAZN Jahresabonnementspreis im Vergleich zum regulären DAZN Jahresabonnementspreis.
		</p>
	</div> -->
	<div>
		<h3 class="light">Sky Cinema Paket / Paramount+</h3>
		<p>
			Voraussetzung ist ein Sky Abonnement mit gebuchtem Sky Cinema Paket. Ausgenommen sind Sky
			Kunden mit gewerblichem Abonnement und Sky Ticket / WOW / Sky X Abonnement sowie Sky
			Abonnements mit TV-Empfang via T-Mobile Austria (Magenta). Der Aktivierungscode berechtigt zur
			Registrierung beim Paramount+ Streamingdienst. Solange das Sky Cinema Paket Bestandteil des
			Sky Abonnements ist, besteht auch die Berechtigung zum Bezug des Paramount+ Streamingdienst.
			Mit Wegfall des Sky Cinema Pakets, endet auch die Berechtigung für den Paramount+
			Streamingdienst automatisch. Mindestalter zur Teilnahme: 18 Jahre. Empfohlene Bandbreite 1
			Mbit/s für SD-Qualität, 6 Mbit/s für HD-Qualität.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>UHD/Dolby Atmos:</h3>
		<p>
			Für den Empfang der UHD- und Dolby-Atmos-Inhalte sind ein Sky Abonnement inkl. UHD Paket, ein
			Sky Q Receiver sowie ein UHD- und Dolby Atmos-fähiges Endgerät (z. B. Fernseher oder Soundbar)
			erforderlich. Welche UHD- und Dolby-Atmos-Programme enthalten sind, richtet sich nach den
			gewählten Sky Programmpaketen und der Verfügbarkeit beim jeweiligen Netzbetreiber. Aus
			lizenzrechtlichen Gründen sind bestimmte Inhalte nicht in UHD oder Dolby Atmos verfügbar. Über
			die Sky Q IPTV Box und Sky Q Mini sind UHD- und Dolby-Atmos-Inhalte nicht verfügbar.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Entertainment Plus:</h3>
		<p>
			Das Sky Entertainment Plus Paket umfasst zusätzlich den Zugang zu Netflix Basis (beinhaltet
			aktuell HD 720p und die gleichzeitige Nutzung von Netflix auf einem Gerät) des Anbieters
			Netflix International B.V. Voraussetzung für die Nutzung des Netflix Dienstes über die Sky Q
			Plattform im Rahmen des Pakets Sky Entertainment Plus ist ein Sky Q Receiver oder eine Sky Q
			IPTV Box, welcher mit dem Internet verbunden ist. Für die Internetverbindung anfallende Kosten
			sind kein Bestandteil des Sky Abonnements. Der Netflix Dienst steht auf Sky Go und der Sky Q
			App für Smart-TVs nicht zur Verfügung. Sobald der Netflix Dienst im Rahmen des Sky
			Entertainment Plus-Abonnements aktiviert ist, kann er auch außerhalb von Sky Q über die
			Plattformen und Apps von Netflix genutzt werden. Das Sky Entertainment Plus-Abonnement gewährt
			den Zugang zum Netflix-Dienst wie oben näher beschrieben. Für Netflix-Accounts, die mit Sky
			Entertainment Plus verbunden sind, gilt für die Dauer des Sky Entertainment Plus-Abonnements
			folgendes: Die Geschäftsbedingungen von Sky regeln das Abonnementverhältnis des Kunden mit Sky
			sowie das Sky Entertainment Plus-Abonnement selbst, während die Nutzungsbedingungen von
			Netflix die Benutzung des Netflix-Dienstes durch den Kunden regeln. Alle Ansprüche des Kunden
			im Hinblick auf das Entertainment Plus-Abonnement müssen gegenüber Sky geltend gemacht werden.
			Sky erklärt hiermit im Namen von Netflix, dass die Netflix-Nutzungsbedingungen in Bezug auf
			die Laufzeit, die Rechnungsstellung, den Preis, ausdrückliche
			Zusicherungen/Gewährleistungsansprüche/Garantien (soweit vorhanden), Probezeiträume und
			Kündigungen nicht anwendbar sind. Und Netflix wird in Bezug auf den jeweiligen Netflix-Account
			keine Entgelte in Rechnung stellen.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>Sky Entertainment Plus Upgrade auf Netflix Standard/Premium:</h3>
		<p>
			Gegen Aufpreis kann jederzeit ein Upgrade des Entertainment Plus Pakets von Netflix Basis auf
			Netflix Standard oder Premium vorgenommen werden. Netflix Standard beinhaltet aktuell Full HD
			1080p und die gleichzeitige Nutzung von Netflix auf bis zu zwei Geräten. Netflix Premium
			beinhaltet aktuell UHD und die gleichzeitige Nutzung von Netflix auf bis zu vier Geräten. Das
			Sky Entertainment Plus Upgrade kann vom Kunden jederzeit sowohl mittels Erklärung gegenüber
			Sky als auch gegenüber Netflix beendet werden. Im letzteren Fall (Erklärung der Kündigung
			gegenüber Netflix) handelt Netflix als Empfangsbote für Sky. Das Entertainment Plus Paket
			enthält ab dem Wirksamwerden dieser Kündigung wiederum nur noch Netflix Basis oder Netflix
			Standard.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>DAZN</h3>
		<p>
			Mit Abschluss des DAZN Abonnements erhältst du DAZN UNLIMITED zum Preis von {@html get_price_string(
				['dazn_unlimited'],
				'jahr'
			)} monatlich. Die Mindestlaufzeit entspricht 12 Monate, wie im Rahmen Deiner Anmeldung für den
			DAZN Service angegeben. Nach deiner ursprünglichen Vertragslaufzeit von 12 Monaten wird deine Mitgliedschaft
			als monatlich kündbare Mitgliedschaft zum Preis von {@html get_price_string(
				['dazn_unlimited'],
				'monat'
			)} weitergeführt und beinhaltet ab diesem Zeitpunkt der Monatsmitgliedschaft entsprechend einen
			Stream und maximal drei parallel registrierte Geräte. Erst mit Aktivierung des DAZN Abonnements
			beginnt dessen zahlungspflichtige Laufzeit. Hierzu übermittelt dir Sky einen Aktivierungslink per
			E-Mail. Die Aktivierung ist bis 7 Tage ab Versand des Aktivierungslinks möglich. Solltest du dein
			DAZN-Abonnement nicht innerhalb der angegebenen Frist aktivieren, wird die Buchung automatisch
			storniert. Deine zahlungspflichtige Mitgliedschaft ist mit einer Kündigungsfrist von dreißig (30)
			Tagen zum Ende der jeweils geltenden Mindestvertragslaufzeit kündbar. Das Sky-Abonnement bleibt
			davon unberührt. <br />
			Zum Empfang über die DAZN App ist eine dauerhafte Internetverbindung nötig. Empfohlene Übertragungsrate
			von mindestens 8 Mbit/s für HD-Qualität. Durch eine parallele Nutzung von Inhalten erhöht sich
			die benötigte Mindestbandbreite. <br />
			Vertragspartner ist die DAZN Limited, 12 Hammersmith Grove, London, W6 7AP, England.
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
			maximal 2 Sky Q-Mini (je €&nbsp;39 durch Sky) oder bei einem Sky Q Abonnement über das
			Internet maximal 3 Sky Q IPTV Boxen (je €&nbsp;39 durch Sky) buchbar. Eine Buchung von
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
			Dieses Angebot gilt für Internet, Sat- oder Kabelanschluss. Du benötigst eine deutsche Adresse
			und eine Bankverbindung für die Vertragsanmeldung. Eine Änderung auf eine andere Zahlungsweise
			ist später in deinem Sky Kundencenter möglich. Der Abobeginn ist nicht verlegbar. Der Vertrag
			startet innerhalb von 7 Tagen nach Erhalt der Ware.
		</p>
	</div>
	<div>
		<h3 class={title_classes}>€&nbsp;{bonus} Prämie von uns:</h3>
		<p>
			Als Dankeschön erhältst du eine Prämie von €&nbsp;{bonus} auf dein Konto überwiesen. Du erhältst
			den Betrag nach ca. 8 Wochen nach dem Abobeginn gutgeschrieben.
		</p>
	</div>
	<!-- <div>
		<h3 class={title_classes}>1 Monat deiner Abogebühren geschenkt:</h3>
		<p>
			Als Dankeschön erhältst du eine Gutschrift über den Abobetrag eines Monats deines gewählten
			Wunschabos auf dein Konto überwiesen. Die Auszahlung erfolgt von uns nach ca. 8 Wochen.
		</p>
	</div> -->
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
