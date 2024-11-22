<script lang="ts">
	import { page } from '$app/stores';
	import type { package_id } from 'asset_library/assets/packages';
	import { bonus, get_price_string } from 'asset_library/prices';
	import { make_url } from 'frontend/url';
	import Header from './header.svelte';
	import { dev } from '$app/environment';
	import PackageTable from 'components/complete/package_table.svelte';
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from '../../../../../packages/components/complete/all_overviews.svelte';
	import Vertragsinfomationen from 'components/complete/vertragsinfomationen.svelte';
	import Line from 'components/elements/line.svelte';
	import Block from './block.svelte';
	import Footer from './footer.svelte';
	import Copyright from 'components/complete/copyright.svelte';

	let packages: package_id[] | 'allgemein' = [];
	$: packages =
		$page.params.packages === 'allgemein'
			? 'allgemein'
			: ($page.params.packages.split(',') as package_id[]);

	function get_overview_title(packages: package_id[] | 'allgemein'): string {
		const titles: [package_id[] | 'allgemein', string][] = [
			[['entertainment'], 'Titel'],
			[
				['entertainment', 'sport'],
				`Sky Sport Abo inkl. der Formel 1 2024 live in HD für € 25 mtl.*`
			],
			[['entertainment', 'cinema'], 'Titel'],
			[
				['entertainment', 'bundesliga'],
				'Sky Entertainment + Fußball Bundesliga Abo in HD für € 30 mtl.*'
			],
			[
				['entertainment', 'sport', 'bundesliga'],
				'Sky Entertainment + Sport + Bundesliga Abo in HD für € 35 mtl.*'
			],
			[['entertainment', 'cinema', 'sport'], 'Titel'],
			[['entertainment', 'cinema', 'bundesliga'], 'Titel'],
			[
				['entertainment', 'sport', 'bundesliga', 'cinema'],
				'Sky Abo mit Entertainment + 3 Paketen in HD für € 40 mtl.*'
			],
			[['entertainmentplus'], 'Titel'],
			[['entertainmentplus', 'sport'], 'Titel'],
			[
				['entertainmentplus', 'cinema'],
				'Sky Entertainment Plus + Cinema in HD inkl. Paramount+ für € 25 mtl.*'
			],
			[['entertainmentplus', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'sport', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'cinema', 'sport'], 'Titel'],
			[['entertainmentplus', 'cinema', 'bundesliga'], 'Titel'],
			[
				['entertainmentplus', 'sport', 'bundesliga', 'cinema'],
				'Sky Komplett Abo in HD inklusive Netflix & Paramount+ für € 45 mtl.*'
			],
			['allgemein', `Sky Abo nach Wahl z.B. Entertainment Plus mit Netflix für € 15 mtl.*`]
		];
		const title = titles.find(([p]) =>
			typeof p === 'string'
				? p
				: p.sort().join(',') ===
				  (typeof packages === 'string' ? packages : packages.sort().join(','))
		);
		if (title) return title[1];
		return 'Kein Titel gefunden';
	}
</script>

<div class="outer">
	<Header />
	<div class="content w-full">
		<div class="spacer">
			<div class="text-center flex flex-col gap-2">
				<h1 class="title font-bold text-3xl gradient_text">{@html get_overview_title(packages)}</h1>
				<ul class="text-red-600 text-xl">
					<li>
						✓ Der beste TV-Deal des Jahres: € 50 Wunschgutschein von Sky und € 20 Bonus von TAGARO
						(Aktion bis 26.11.2024)*
					</li>
				</ul>
				<p class="max-w-6xl mt-2">
					Der beste TV-Deal des Jahres. Zu vielen Paket-Kombinationen gibt es jetzt von Sky nach
					Abschluss einen € 50 Wunschgutschein durch Cadooz für zahlreiche Anbieter dazu (z.B.
					Amazon, Douglas, MediaMarkt, Zalando uvm.). On top überweisen wir dir einen Bonus von € 20
					auf dein Konto. Als Empfangsart kannst du Sat oder Kabel auswählen (Internet / Sky Stream
					ist momentan noch nicht vermittelbar). Den passenden Sky Q Receiver schickt dir Sky
					kostenlos zu. Wir bieten ebenso sämtliche Zubuchoptionen wie Multiscreen zu deinem Vertrag
					an. Und Sky Go ist immer inklusive! Deine PAYBACK Nummer für 500 °Punkte tragen wir
					ebenfalls gerne ein. Über die App oder online kannst du für weitere Punkte vorab einen
					eCoupon aktivieren. Du profitierst bei TAGARO von einer zuverlässigen Betreuung sowie
					jahrelanger Erfahrung seit 2006.
				</p>
			</div>
			<img
				class="rounded-xl shadow-lg w-full border-slate-300 border-[1px] max-w-4xl"
				src={make_url('/images/visuals/sky1124_teaser.png', dev)}
				alt=""
			/>
			<!-- <Wunschgutschein /> -->
			<div class="max-w-4xl w-full">
				<PackageTable />
			</div>
			<Block title="Abovermittlung mit TAGARO">
				<p>
					Nach dem eBay Sofort-Kauf erhältst du von uns eine leicht verständliche Nachricht zur
					Aboabwicklung zugesandt. Die Anmeldung erfolgt durch uns im Anschluss umgehend.
				</p>
				<p>
					Wir vermitteln Sky Verträge bereits seit 2006 und stehen für eine einfache und zügige
					Abwicklung mit tausenden zufriedenen Kunden (siehe Bewertungen).
				</p>
				<p>
					Hast du Fragen, helfen wir dir gerne weiter: Stelle uns über das eBay Nachrichten-System
					deine Fragen. Wir antworten innerhalb von kurzer Zeit!
				</p>
			</Block>
			<AllOverviews clickable={false} ebay_version={true} />
			<Inklusive sky_q={false} space={'0px'} version={'ebay'} />

			<div class="max-w-7xl w-full p-5">
				<Line />
				<h2 class="text-3xl mb-7 mt-14 font-bold text-center gradient_text">
					*Angebotsdetails für Neukunden
				</h2>
				<Vertragsinfomationen />
				<div class="mb-16" />
				<Line space={'0px'} />
			</div>

			<div
				class="text-center flex flex-col gap-4 rounded-xl shadow-lg w-full border-slate-300 max-w-4xl border-[1px] p-8 pb-11"
			>
				<h3 class="text-2xl m-0">So einfach erhältst du Sky:</h3>
				<ul>
					<li>1. Bei eBay auf Sofort-Kaufen klicken.</li>
					<li>
						2. Auf unsere Nachricht warten.<br />
						Du stellst dein Sky Programm mittels Aboformular zusammen.
					</li>
					<li>
						3. Bestätigung erhalten und Sky schauen<br />
						Wir und Sky bestätigen dir den Auftrag und du wirst beliefert<br />
					</li>
				</ul>
				<h3 class="text-2xl mt-4">Benötigte Anmeldedaten nach dem eBay Sofort-Kauf:</h3>
				<ul class="centered_list spaced_paragraphs">
					<li>Vorname / Name: ...</li>
					<li>Straße / Hausnummer: ...</li>
					<li>Postleitzahl / Ort: ...</li>
					<li>Geburtsdatum: ...</li>
					<li>Telefonnummer: ...</li>
					<li>Name der Bank: ...</li>
					<li>Kontonummer: ...</li>
					<li>Bankleitzahl: ...</li>
					<li>Kontoinhaber: ...</li>
					<li>Empfangsart: Sat oder Kabel (Kabel-Anbieter falls bekannt)</li>
					<li>Gewünschte Programmpakete: ...</li>
					<li>Wähle dein Sky Abo flexibel mit unserem Aboformular aus.</li>
				</ul>
			</div>
			<div class="text-center flex flex-col gap-7">
				<p>Hole dir Sky mit exklusivem Preisvorteil nach Hause.</p>

				<p>
					Nach dem Sofort-Kauf bei eBay erhältst du von uns eine Nachricht zur Aboabwicklung
					zugesandt. <br />
					Die Anmeldung erfolgt durch uns im Anschluss umgehend.
				</p>

				<p>
					Nach erfolgreicher Anmeldung erhältst du von uns dein Sky Abonnement schriftlich
					bestätigt. <br />
					Deine Unterlagen, die Smartcard sowie die bestellte Sky Hardware erhältst du umgehend zugeschickt.
				</p>

				<p>
					Du bestellst bei TAGARO -
					<mark style="color: #0072c9;">Wir vermitteln Sky Verträge bereits seit 2006.</mark>
					<br />
					Wir stehen für eine einfache und zügige Abwicklung mit tausenden zufriedenen Kunden (siehe
					Bewertungen). <br />
					Unsere Angebote werden regelmäßig von Sky Deutschland überprüft.
				</p>

				<p>
					Hast du Fragen, helfen wir dir gerne weiter. Stelle uns über eBay deine Fragen. <br />
					Wir antworten innerhalb von kurzer Zeit! Wir wünschen dir eine gute Unterhaltung.
				</p>

				<div class="flex justify-center items-center gap-4">
					<img
						src={make_url('/images/external/landbell_logo.gif', dev)}
						alt=""
						width="107px"
						height="130px"
					/>

					<img
						src={make_url('/images/external/versandkostenfrei.gif', dev)}
						alt=""
						width="198px"
						height="79px"
					/>
				</div>

				<p>
					tagaro.medien ist langjähriger eBay-Verkäufer mit großartigen Bewertungen <br />
					und beteiligt sich am Rücknahmesystem der Landbell AG
				</p>
				<br />
			</div>
		</div>
	</div>
	<Footer />
</div>

<Copyright />

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.content {
		position: relative;
		bottom: 20px;
		background-color: white;
		width: 100%;
		box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.192);
		z-index: 2;
		border-top: 3px solid transparent;
		border-bottom: 3px solid transparent;
		border-image: linear-gradient(to right, rgb(255, 197, 37), rgb(255, 37, 37), rgb(0, 47, 255)) 1;
	}
	.outer {
		border-radius: 20px;
		overflow: hidden;
		border: 1px solid rgba(128, 128, 128, 0.514);
		width: 100%;
		max-width: 1150px;
		max-width: min(100vw, 1150px);
		margin-left: auto;
		margin-right: auto;
	}
	.spacer {
		width: calc(100% - 80px);
		min-width: min(500px, 95%);
		max-width: 100%;
		padding-top: 50px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		gap: 60px;
		align-items: center;
	}
</style>
