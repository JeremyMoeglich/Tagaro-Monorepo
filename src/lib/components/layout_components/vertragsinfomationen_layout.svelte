<script>
	import ExpandableBox from '$lib/components/layout_components/expandable_box.svelte';
	import { aktivierung_string, get_price_string } from '$lib/scripts/universal/asset_libary/prices';
</script>

<ExpandableBox title={'*Vertragsinformationen'}>
	<span slot="main_text">
		<div>
			<h3>Wählbare Pakete und Kombinationen:</h3>
			<p>
				Angebote gelten mit einer Mindestvertragslaufzeit von 12 Monaten (Monat der Freischaltung
				(anteilig) zzgl. 12 Monaten)
			</p>
			<ul>
				<li>
					- Sky Entertainment für mtl. {get_price_string(['entertainment'], 'jahr')} <br />
					<b>in Kombination mit</b>
				</li>
				<li>- Sky Sport mtl. {get_price_string(['entertainment', 'sport'], 'jahr')}</li>
				<li>
					- Sky Fußball-Bundesliga mtl. {get_price_string(['entertainment', 'bundesliga'], 'jahr')}
				</li>
				<li>
					- Sky Sport + Sky Cinema mtl. {get_price_string(
						['entertainment', 'cinema', 'sport'],
						'jahr'
					)}
				</li>
				<li>
					- Sky Sport + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainment', 'sport', 'bundesliga'],
						'jahr'
					)}
				</li>
				<li>
					- Sky Cinema + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainment', 'cinema', 'bundesliga'],
						'jahr'
					)}
				</li>
				<li>
					- Sky Sport + Sky Cinema + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainment', 'cinema', 'bundesliga', 'sport'],
						'jahr'
					)}
				</li>
			</ul>
			<ul>
				<li>
					- Sky Ultimate TV mit Entertainment inkl. Netflix mtl. {get_price_string(
						['entertainmentplus'],
						'jahr'
					)} <br /> <b> in Kombination mit</b>
				</li>
				<li>- Sky Sport mtl. {get_price_string(['entertainmentplus', 'sport'], 'jahr')}</li>
				<li>- Sky Cinema mtl. {get_price_string(['entertainmentplus', 'cinema'], 'jahr')}</li>
				<li>
					- Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainmentplus', 'bundesliga'],
						'jahr'
					)}
				</li>
				<li>- Sky Kids mtl. € 25,00</li>
				<li>
					- Sky Sport + Sky Cinema mtl. {get_price_string(['entertainmentplus', 'cinema'], 'jahr')}
				</li>
				<li>
					- Sky Sport + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainmentplus', 'sport', 'bundesliga'],
						'jahr'
					)}
				</li>
				<li>
					- Sky Cinema + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainmentplus', 'bundesliga', 'cinema'],
						'jahr'
					)}
				</li>
				<li>
					- Sky Sport + Sky Cinema + Sky Fußball-Bundesliga mtl. {get_price_string(
						['entertainmentplus', 'cinema', 'sport', 'bundesliga'],
						'jahr'
					)}
				</li>
			</ul>
			<p>
				Alle Paketkombinationen zzgl. einmaliger Aktivierungsgebühr in Höhe von {aktivierung_string}
				durch Sky.
			</p>
			<ul>
				<li><b>Optional:</b></li>
				<li>- UHD mtl. € 5,00 (für Sat oder Kabel-Empfang)</li>
				<li>- DAZN jährlich für € 12,50 mtl. oder DAZN monatlich für € 14,99 mtl.</li>
				<li>
					- Multiscreen für € 10,00 mtl. - Inkl. Sky Go Plus für 3 mobile Geräte, 2. Sky Q Receiver
					für einmalig € 49 oder 1 Sky Q Mini für einmalig € 29 (zur Leihe)
				</li>
				<li>- Netflix Standard-Abo, HD/2 Streams (+ € 5 mtl.)</li>
				<li>- Netflix Premium-Abo, UHD/4 Streams (+ € 10 mtl.)</li>
				<li>- trendSports mtl. € 5,99</li>
				<li>- 18+ für Blue Movie € 0, einmalige Versandpauschale 18+ PIN</li>
			</ul>
		</div>
		<div class="slot">
			<slot />
		</div>
		<div>
			<h3>Laufzeit und Preise bei Verlängerung:</h3>
			<p>
				Das Abonnement kann erstmals mit einer Frist von einem Monat zum Ablauf der
				Mindestvertragslaufzeit gekündigt werden. Das Abonnement verlängert sich ansonsten
				automatisch jeweils um einen weiteren Monat, wenn es nicht jeweils mit einer Frist von einem
				Monat zum Ablauf der Laufzeit, gekündigt wird. Im Falle der Verlängerung gelten folgende
				Preise:
			</p>
			<p>
				Sky Entertainment für {get_price_string(['entertainment'], 'monat')} mtl. im 12-Monats-Abo in
				Kombination mit Sky Sport {get_price_string(['entertainment', 'sport'], 'monat')}
				mtl. im 12-Monats-Abo Sky Cinema {get_price_string(['entertainment', 'cinema'], 'monat')} mtl.
				im 12-Monats-Abo Sky Fußball-Bundesliga {get_price_string(
					['entertainment', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Sport + Sky Cinema
				{get_price_string(['entertainment', 'sport', 'cinema'], 'monat')} mtl. im 12-Monats-Abo Sky Sport
				+ Sky Fußball-Bundesliga {get_price_string(
					['entertainment', 'sport', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Cinema + Sky Fußball-Bundesliga {get_price_string(
					['entertainment', 'cinema', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Sport + Sky Cinema + Sky Fußball-Bundesliga {get_price_string(
					['entertainment', 'sport', 'cinema', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Entertainment Plus für {get_price_string(
					['entertainmentplus'],
					'monat'
				)} mtl. im 12-Monats-Abo in Kombination mit Sky Sport {get_price_string(
					['entertainmentplus', 'sport'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Cinema {get_price_string(
					['entertainmentplus', 'cinema'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Fußball-Bundesliga
				{get_price_string(['entertainmentplus', 'bundesliga'], 'monat')} mtl. im 12-Monats-Abo Sky Sport
				+ Sky Cinema {get_price_string(['entertainmentplus', 'sport', 'cinema'], 'monat')} mtl. im 12-Monats-Abo
				Sky Sport + Sky Fußball-Bundesliga {get_price_string(
					['entertainmentplus', 'sport', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo Sky Cinema + Sky Fußball-Bundesliga {get_price_string(
					['entertainmentplus', 'cinema', 'bundesliga'],
					'monat'
				)}
				mtl. im 12-Monats-Abo Sky Sport + Sky Cinema + Sky Fußball-Bundesliga {get_price_string(
					['entertainmentplus', 'cinema', 'bundesliga'],
					'monat'
				)} mtl. im 12-Monats-Abo
			</p>
		</div>
		<div>
			<h3>Sky Entertainment Plus:</h3>
			<p>
				Das Sky Entertainment Plus Paket umfasst zusätzlich den Zugang zu Netflix Basis (beinhaltet
				aktuell SD und die gleichzeitige Nutzung von Netflix auf einem Gerät) des Anbieters Netflix
				International B.V. Voraussetzung für die Nutzung des Netflix Dienstes über die Sky Q
				Plattform im Rahmen des Pakets Sky Entertainment Plus ist ein Sky Q Receiver oder eine Sky Q
				IPTV Box, welcher mit dem Internet verbunden ist. Für die Internetverbindung anfallende
				Kosten sind kein Bestandteil des Sky Abonnements. Der Netflix Dienst steht auf Sky Go und
				der Sky Q App für Smart-TVs nicht zur Verfügung. Sobald der Netflix Dienst im Rahmen des Sky
				Entertainment Plus-Abonnements aktiviert ist, kann er auch außerhalb von Sky Q über die
				Plattformen und Apps von Netflix genutzt werden. Das Sky Entertainment Plus-Abonnement
				gewährt den Zugang zum Netflix-Dienst wie oben näher beschrieben. Für Netflix-Accounts, die
				mit Sky Entertainment Plus verbunden sind, gilt für die Dauer des Sky Entertainment
				Plus-Abonnements folgendes: Die Geschäftsbedingungen von Sky regeln das Abonnementverhältnis
				des Kunden mit Sky sowie das Sky Entertainment Plus-Abonnement selbst, während die
				Nutzungsbedingungen von Netflix die Benutzung des Netflix-Dienstes durch den Kunden regeln.
				Alle Ansprüche des Kunden im Hinblick auf das Entertainment Plus-Abonnement müssen gegenüber
				Sky geltend gemacht werden. Sky erklärt hiermit im Namen von Netflix, dass die
				Netflix-Nutzungsbedingungen in Bezug auf die Laufzeit, die Rechnungsstellung, den Preis,
				ausdrückliche Zusicherungen/Gewährleistungsansprüche/Garantien (soweit vorhanden),
				Probezeiträume und Kündigungen nicht anwendbar sind. Und Netflix wird in Bezug auf den
				jeweiligen Netflix-Account keine Entgelte in Rechnung stellen.
			</p>
		</div>
		<div>
			<h3>Sky Entertainment Plus Upgrade auf Netflix Standard/Premium:</h3>
			<p>
				Gegen Aufpreis kann jederzeit ein Upgrade des Entertainment Plus Pakets von Netflix Basis
				auf Netflix Standard (€ 5 mtl.) oder Premium (€ 10 mtl.) vorgenommen werden. Netflix
				Standard beinhaltet aktuell HD und die gleichzeitige Nutzung von Netflix auf bis zu zwei
				Geräten. Netflix Premium beinhaltet aktuell UHD und die gleichzeitige Nutzung von Netflix
				auf bis zu vier Geräten. Das Sky Entertainment Plus Upgrade kann vom Kunden jederzeit sowohl
				mittels Erklärung gegenüber Sky als auch gegenüber Netflix beendet werden. Im letzteren Fall
				(Erklärung der Kündigung gegenüber Netflix) handelt Netflix als Empfangsbote für Sky. Das
				Entertainment Plus Paket enthält ab dem Wirksamwerden dieser Kündigung wiederum nur noch
				Netflix Basis oder Netflix Standard.
			</p>
		</div>
		<div>
			<h3>DAZN über Sky:</h3>
			<p>
				Die Laufzeit entspricht 1 Monat oder 12 Monate, jeweils mit anschließender automatischer
				Verlängerung jeweils um einen Monat. Im Falle der Verlängerung fällt bei der 12-Monats
				Option ein monatlicher Preis von € 14,99 an. Im deutschen Kabelnetz von Vodafone/Unitymedia
				sind die beiden Sender aus lizenzrechtlichen Gründen derzeit nicht verfügbar. Kunden, die
				Sky über dieses Netz empfangen, können ebenfalls wie Kunden anderer Netze, die DAZN Inhalte
				über Sky Q in der DAZN App empfangen. Zum Empfang über die DAZN App ist eine dauerhafte
				Internetverbindung nötig. Empfohlene Übertragungsrate von mindestens 8 Mbit/s für
				HD-Qualität. Durch eine parallele Nutzung von Inhalten erhöht sich die benötigte
				Mindestbandbreite. Erst mit Aktivierung des DAZN-Abonnements beginnt dessen
				zahlungspflichtige Laufzeit. Sky übersendet per E-Mail einen DAZN-Aktivierungslink. Über
				diesen kann das DAZN-Abonnement direkt bei DAZN aktiviert werden. Die Aktivierung ist bis 7
				Tage ab Versand des Aktivierungslinks möglich. Falls das DAZN-Abonnement nicht innerhalb
				dieser Frist aktiviert wird, wird die Buchung automatisch nach 7 Tagen storniert.
				Vertragspartner ist die DAZN Limited, Hanover House, Plane Tree Crescent, Feltham,
				Vereinigtes Königreich, TW137BZ. Voraussetzung für die Nutzung der linearen Kanäle im
				DAZN-Abonnement über Sky, ist ein aktives nicht-gewerbliches Sky Abonnement, dem steht ein
				Mietverhältnis eines Sky Receiver gleich. Das DAZN-Abonnement kann jederzeit mit Wirkung zum
				Ende der jeweiligen Laufzeit gekündigt.
			</p>
		</div>
		<div>
			<h3>Sky Go inkl. Download:</h3>
			<p>
				Mit Sky Go können einzelne Inhalte des Sky Abonnements (ausgenommen gewerbliche und Sky
				Ticket Abonnements) über das Internet (ausgeschlossen ist die Verbindung über einen
				VPN-Zugang) mit einem mobilen Endgerät (Smartphones/Tablets ab iOS 9.0, Android 4.2, Windows
				7, MacOS 10.9) empfangen und abgerufen werden. Die verfügbaren Inhalte sind abhängig von den
				gebuchten Sky Programmpaketen. Empfohlene Bandbreite 1 Mbit/s für SD-Qualität, 6 Mbit/s für
				HD-Qualität. Kunden können Sky Go gemäß EU-Portabilitätsverordnung auch während eines
				vorübergehenden Aufenthalts in einem anderen EU-Mitgliedstaat als Österreich oder
				Deutschland nutzen. Mit der Download-Funktion können bis zu 25 Titel (max. 5 Spielfilme)
				gleichzeitig und jeder Titel kann nur zweimal im Kalenderjahr heruntergeladen werden. Die
				heruntergeladenen Titel bleiben jeweils 30 Tage verfügbar. Nach Beginn der Wiedergabe stehen
				die Titel 48 Stunden lang zur Verfügung und werden anschließend gesperrt.
			</p>
		</div>
		<div>
			<h3>Sky Go Plus:</h3>
			<p>
				Mit Sky Go Plus können einzelne Inhalte des Sky Abonnements auf 3 mobilen Endgeräten mit der
				Sky Go App gestreamt werden (ausgeschlossen ist die Verbindung über einen VPN-Zugang).
			</p>
		</div>
		<div>
			<h3>UHD:</h3>
			<p>
				Für den Empfang der UHD-Kanäle ist ein Sky Q Receiver sowie ein UHD-fähiges Endgerät (z.B.
				Fernseher) erforderlich. Welche UHD-Sender enthalten sind, richtet sich nach den gewählten
				Programmpaketen und der Verfügbarkeit beim jeweiligen Netzbetreiber. Weitere Informationen
				unter www.sky.de/senderempfang. Vereinzelt sind aus lizenzrechtlichen Gründen bestimmte
				Inhalte nicht in UHD verfügbar. Über die Sky Q IPTV Box und Sky Q-Mini sind UHD-Inhalte
				nicht verfügbar.
			</p>
		</div>
		<div>
			<h3>Multiscreen (bis zu 5 Geräte):</h3>
			<p>
				Mit Multiscreen kann das Sky Programm mit Sky Q über das Internet auf bis zu 3 Endgeräten
				und auf Sky Q über SAT oder Kabel auf bis zu 5 Endgeräten gleichzeitig gestreamt werden.
				Voraussetzung ist die Nutzung von mindestens einem Sky Q Receiver oder einer Sky Q IPTV Box
				sowie eine stabile Internetverbindung (ausgeschlossen ist die Verbindung über einen
				VPN-Zugang). Empfohlene Bandbreite 6 Mbit/s für HD-Qualität. Für die Internetverbindung
				anfallende Kosten sind nicht Bestandteil des Abonnements. Das Streaming des Sky Programmes
				ist mit der Sky Q-Mini, der Sky Q IPTV Box, der Sky Q App (auf Apple TV ab Generation 4, auf
				Smart TV von LG Electronics mit Betriebssystem Web OS 2.0 oder höher oder Samsung Smart TV
				ab Modelljahr 2015 mit Tizen Betriebssystem oder einer Playstation 4 Konsole) und mit der
				Sky Go App auf mobilen Endgeräten (Betriebssysteme: Android, iOS, Windows; Hersteller: Mac,
				Huawei) möglich. Über die Sky Q IPTV Box und Sky Q-Mini sind UHD-Inhalte nicht verfügbar.
				Pro Sky Q Abonnement über SAT oder Kabel sind maximal 2 Sky Q Receiver (je € 49 durch Sky)
				zzgl. maximal 2 Sky Q-Mini (je € 29 durch Sky) oder bei einem Sky Q Abonnement über das
				Internet maximal 3 Sky Q IPTV Boxen (je € 29 durch Sky) buchbar.
			</p>
		</div>
		<div>
			<h3>Aufnahmekapazität:</h3>
			<p>
				Entspricht einer Aufnahmequalität in SD von einem Sky Sender (bspw. Sky Cinema Fun, Sky
				Sport Bundesliga 1, Sky Sport 3 usw.). <br />
				Apps: Nicht enthalten ist die Nutzung von kostenpflichtigen Apps/Mediatheken wie z. B. Prime
				Video, Netflix, DAZN etc. Hierfür ist ein separates Abonnement des jeweiligen Anbieters nötig.
			</p>
		</div>
		<div>
			<h3>Apps:</h3>
			<p>
				Nicht enthalten ist die Nutzung von kostenpflichtigen Apps/Mediatheken wie z. B. Prime
				Video, Netflix , DAZN etc. Hierfür ist ein separates Abonnement des jeweiligen Anbieters
				nötig. <br />
				Netflix und DAZN lassen sich über uns hinzubuchen.
			</p>
		</div>
		<div>
			<h3>HD+:</h3>
			<p>
				Bei Sat-Empfang werden die HD+ Sender für HD+ Neukunden 4 Monate kostenlos freigeschaltet.
				Die Freischaltung endet automatisch. Danach können die HD+ Sender gegen eine
				Servicepauschale weiterhin zugebucht werden. Bei gesonderter Buchung der HD+ Sender sind die
				ersten 6 Laufzeitmonate kostenlos und es gilt eine Mindestvertragslaufzeit von einem Monat.
				Das Abonnement verlängert sich nach Ablauf der Mindestlaufzeit um jeweils einen weiteren
				Monat, wenn es nicht mit einer Frist von 1 Monat auf den Ablauf der Laufzeit gekündigt wird.
				Danach beträgt die Abonnementgebühr € 6 mtl. Vertragspartner des HD+ Abonnements ist die HD
				PLUS GmbH. Die HD PLUS GmbH ermächtigt Sky, die Abonnementgebühren einzuziehen.
			</p>
		</div>
		<div>
			<h3>Sky Q Receiver:</h3>
			<p>
				Sky stellt einen Sky Q Receiver leihweise zur Verfügung (die Servicepauschale i. H. v. € 149
				entfällt).
			</p>
		</div>
		<div>
			<h3>Sky Q Mini:</h3>
			<p>
				Sky Q Mini wird leihweise für die Dauer des Sky Abonnements zur Verfügung gestellt. Mit Sky
				Q Mini können einzelne Inhalte des Sky Abonnements über das Internet auf einem TV-Gerät mit
				HDMI-Anschluss empfangen werden. Voraussetzung ist ein Sky Abonnement inkl. Sky Q.
				UHD-Inhalte sind über Sky Q Mini nicht verfügbar. Für die Internetverbindung anfallende
				Kosten sind kein Bestandteil des Sky Abonnements.
			</p>
		</div>
		<div>
			<h3>Sky Q IPTV Box:</h3>
			<p>
				Die Sky Q IPTV Box wird leihweise für die Dauer des Sky Abonnements zur Verfügung gestellt.
				Mit der Sky Q IPTV Box können einzelne Inhalte des Sky Abonnements über das Internet auf
				einem TV-Gerät mit HDMI-Anschluss empfangen werden. Voraussetzung ist ein Sky Abonnement
				inkl. Sky Q sowie eine dauerhafte Internetverbindung. Empfohlene Bandbreite mindestens 3,5
				Mbit/s für SD-Qualität, 6 Mbit/s für HD-Qualität. Für die Internetverbindung anfallende
				Kosten sind kein Bestandteil des Sky Abonnements. UHD-Inhalte sind über die Sky Q IPTV Box
				nicht verfügbar.
			</p>
		</div>
		<div>
			<h3>trendSports:</h3>
			<p>
				Nur für Sat-Empfang. Spektakulär - rund um die Uhr - live: Entdecke die Faszination von
				trendSports mit Sport1+, sportdigital fussball, EDGEsport, eSports1 und WAIDWERK. Über
				3.000h live, dazu News, Magazine und Dokumentationen.
			</p>
		</div>
		<div>
			<h3>18+:</h3>
			<p>
				In der Sky Paketabwicklung hinzubuchbar. Bei Anforderung einer Smartcard bzw. Leihe eines
				Receivers entfällt die Logistikpauschale. Filmabrufe bei Blue Movie und bei Select 18+ sind
				kostenpflichtig. Für die Nutzung von Sky On Demand ist ein Sky+ HD-Festplattenreceiver
				notwendig.
			</p>
		</div>
		<div>
			<h3>Zusätzliche Informationen:</h3>
			<p>
				Dieses Angebot gilt für Internet, Sat- oder Kabelanschluss. Es ist eine deutsche Adresse zur
				Bestellung erforderlich. Bestehende Geräte aus einem bisherigen Sky Vertrag, können in den
				meisten Fällen nicht übernommen werden. Sie erhalten kostenlos neue Geräte zugesendet und
				können bestehende Geräte einfach nach Ablauf Ihres Vertrags an Sky retournieren. Der
				Abobeginn ist bei Sky nicht nach hinten verlegbar. Der Vertrag startet innerhalb von 7 Tagen
				nach Erhalt der Ware.
			</p>
		</div>
		<div>
			<h3>€ 20 Prämie von uns:</h3>
			<p>
				Als Dankeschön erhalten Sie einen Prämie von € 20 auf Ihr Konto überwiesen. Sie erhalten den
				Betrag innerhalb von 6-8 Wochen nach Abobeginn gutgeschrieben.
			</p>
		</div>
	</span>
</ExpandableBox>
