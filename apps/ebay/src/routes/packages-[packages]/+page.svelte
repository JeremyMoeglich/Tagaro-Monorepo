<script lang="ts">
	import { page } from '$app/stores';
	import type { package_id } from 'asset_library/assets/packages';
	import { bonus, bonus_string, get_price_string } from 'asset_library/prices';
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

	function get_title(packages: package_id[] | 'allgemein'): string {
		const titles: [package_id[] | 'allgemein', string][] = [
			[['entertainment'], 'Titel'],
			[
				['entertainment', 'sport'],
				`Sky Sport Abo inkl. der Formel 1 2023 live für ${get_price_string(
					['entertainment', 'sport'],
					'jahr'
				)} mtl.*`
			],
			[['entertainment', 'cinema'], 'Titel'],
			[['entertainment', 'bundesliga'], 'Titel'],
			[['entertainment', 'sport', 'bundesliga'], 'Titel'],
			[['entertainment', 'cinema', 'sport'], 'Titel'],
			[['entertainment', 'cinema', 'bundesliga'], 'Titel'],
			[
				['entertainment', 'sport', 'bundesliga', 'cinema'],
				`Sky Abo mit Entertainment + 3 Paketen für ${get_price_string(
					['entertainment', 'sport', 'bundesliga', 'cinema'],
					'jahr'
				)} mtl. Dazu €&nbsp;20 Bonus*`
			],
			[['entertainmentplus'], 'Titel'],
			[['entertainmentplus', 'sport'], 'Titel'],
			[
				['entertainmentplus', 'cinema'],
				`Sky Entertainment Plus + Cinema inkl. Paramount+ für ${get_price_string(
					['entertainmentplus', 'cinema'],
					'jahr'
				)} mtl.*`
			],
			[['entertainmentplus', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'sport', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'cinema', 'sport'], 'Titel'],
			[['entertainmentplus', 'cinema', 'bundesliga'], 'Titel'],
			[
				['entertainmentplus', 'sport', 'bundesliga', 'cinema'],
				`Sky Komplett Abo inkl. Netflix & Paramount+ für ${get_price_string(
					['entertainmentplus', 'sport', 'bundesliga', 'cinema'],
					'jahr'
				)} mtl. Dazu €&nbsp;20 Bonus*`
			],
			[
				'allgemein',
				`Sky Abo nach Wahl z.B. Entertainment Plus für ${get_price_string(
					['entertainmentplus'],
					'jahr'
				)} mtl. Dazu €&nbsp;20 Bonus*`
			]
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
				<h1 class="title font-bold text-3xl">{@html get_title(packages)}</h1>
				<ul class="text-red-600 text-xl">
					<li>
						✓ Sky Aktion: Cinema hinzubuchen und Paramount+ im Wert von € 7,99 mtl. dazu erhalten*
					</li>
					{#if bonus > 0}
						<li>
							✓ Bonus von TAGARO: {@html bonus_string()} Bonus on top bei erfolgreichem Vertragsabschluss
						</li>
					{/if}
				</ul>
				<p class="max-w-6xl mt-2">
					Entdecken Sie die ganze Vielfalt von Sky mit unseren Wunschpaketen zum Vorteilspreis. Bei
					Buchung des Cinema Pakets, erhalten Sie Paramount+ dazu. Zusätzlich überweisen wir Ihnen
					einen Bonus von € 20. Der Empfang ist über Sat, Kabel oder Internet möglich. Wir bieten
					ebenso sämtliche Zubuchoptionen zu Ihrem Vertrag wie Multiscreen, DAZN & UHD an. Ihre
					PAYBACK Nummer für 500 Basis-Punkte tragen wir gerne ein. Über die PAYBACK App oder online
					sind weitere Punkte möglich, wenn Sie vor Aboaufnahme einen eCoupon aktivieren. Sie
					profitieren bei TAGARO von einer schnellen und zuverlässigen Betreuung sowie jahrelanger
					Erfahrung seit 2006.
				</p>
			</div>
			<img
				class="rounded-xl shadow-lg w-full border-slate-300 border-[1px] max-w-4xl"
				src={make_url('/images/visuals/sky0723_teaser.png', dev)}
				alt=""
			/>
			<div class="max-w-4xl w-full">
				<PackageTable />
			</div>
			<Block title="Abovermittlung mit TAGARO">
				<p>
					Nach dem eBay Sofort-Kauf erhalten Sie von uns eine leicht verständliche Nachricht zur
					Aboabwicklung zugesandt. Die Anmeldung erfolgt durch uns im Anschluss umgehend. Als
					Dankeschön erhalten Sie nach 8 Wochen eine €&nbsp;20 Prämie auf Ihr Konto überwiesen.
				</p>
				<p>
					Wir vermitteln Sky Verträge bereits seit 2006 und stehen für eine einfache und zügige
					Abwicklung mit tausenden zufriedenen Kunden (siehe Bewertungen).
				</p>
				<p>
					Haben Sie Fragen, helfen wir Ihnen gerne weiter: Stellen Sie uns über das eBay
					Nachrichten-System ihre Fragen. Wir antworten innerhalb von kurzer Zeit!
				</p>
			</Block>
			<AllOverviews clickable={false} ebay_version={true} />
			<Inklusive sky_q={false} space={'0px'} version={'ebay'} />
			<div>
				<Line />
				<div class="max-w-6xl mt-12 ml-auto mr-auto flex flex-col gap-7 items-center">
					<h2 class="text-2xl font-bold text-center">
						Sky Q als Receiver oder IPTV Box Neue flexible Empfangsmöglichkeiten auch übers Internet
					</h2>
					<p class="text-center mb-5">
						Die neue Sky Q IPTV Box bietet Plug and Play: Einfach mit dem Internet verbinden und
						losschauen – egal welcher Internetanbieter. Auf dem Smartphone, Tablet oder PC/ Mac über
						Sky Go – natürlich auch unterwegs. Darüber hinaus erhalten Sie alle wichtigen Free
						TV-Sender in brillanter HD-Qualität ohne Aufpreis. Mit dem Sky Q Receiver für Sat oder
						Kabel können Sie aufnehmen, haben Zugang auf Sky On Demand und können UHD-Inhalte
						genießen.
					</p>
					<img
						class="rounded-xl shadow-lg w-full border-slate-300 max-w-4xl border-[1px] p-4"
						src={make_url('/images/visuals/skyq_geraete.png', dev)}
						alt=""
					/>
				</div>
			</div>

			<div class="max-w-7xl w-full p-5">
				<Line />
				<h2 class="text-3xl mb-7 mt-14 font-bold text-center">*Angebotsdetails für Neukunden</h2>
				<Vertragsinfomationen />
				<div class="mb-4" />
				<Line space={'0px'} />
			</div>

			<div
				class="text-center flex flex-col gap-4 rounded-xl shadow-lg w-full border-slate-300 max-w-4xl border-[1px] p-8 pb-11"
			>
				<h3 class="text-2xl m-0">So einfach erhalten Sie Sky:</h3>
				<ul>
					<li>1. Bei eBay auf Sofort-Kaufen klicken.</li>
					<li>
						2. Auf unsere Nachricht warten.<br />
						Sie stellen Ihr Sky Programm mittels Aboformular zusammen.
					</li>
					<li>
						3. Bestätigung erhalten und Sky schauen<br />
						Wir und Sky bestätigen Ihnen den Auftrag und Sie werden beliefert<br />
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
					<li>Wählen Sie Ihr Sky Abo flexibel mit unserem Aboformular aus.</li>
				</ul>
			</div>
			<div class="text-center flex flex-col gap-7">
				<p>Holen Sie sich Sky mit exklusivem Preisvorteil nach Hause.</p>

				<p>
					Nach dem Sofort-Kauf bei eBay erhalten Sie von uns eine Nachricht zur Aboabwicklung
					zugesandt. <br />
					Die Anmeldung erfolgt durch uns im Anschluss umgehend.
				</p>

				<p>
					Nach erfolgreicher Anmeldung erhalten Sie von uns Ihr Sky Abonnement schriftlich
					bestätigt. <br />
					Ihre Unterlagen, die Smartcard sowie die bestellte Sky Hardware erhalten Sie umgehend zugeschickt.
				</p>

				<p>
					Sie bestellen bei TAGARO -
					<mark style="color: #0072c9;">Wir vermitteln Sky Verträge bereits seit 2006.</mark>
					<br />
					Wir stehen für eine einfache und zügige Abwicklung mit tausenden zufriedenen Kunden (siehe
					Bewertungen). <br />
					Unsere Angebote werden regelmäßig von Sky Deutschland überprüft.
				</p>

				<p>
					Haben Sie Fragen, helfen wir Ihnen gerne weiter. Stellen Sie uns über eBay Ihre Fragen. <br
					/>
					Wir antworten innerhalb von kurzer Zeit! Wir wünschen Ihnen gute Unterhaltung.
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
		border-radius: 20px;
		width: 100%;
		box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.192);
		z-index: 2;
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
