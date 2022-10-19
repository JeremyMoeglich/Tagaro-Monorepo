<script lang="ts">
	import { page } from '$app/stores';
	import type { package_id } from 'asset_library/assets/packages';
	import { bonus, bonus_string } from 'asset_library/prices';
	import { make_url } from 'frontend/url';
	import Header from './header.svelte';
	import { dev } from '$app/environment';
	import PackageTable from 'components/complete/package_table.svelte';
	import Inklusive from 'components/complete/inklusive.svelte';
	import AllOverviews from 'components/complete/packages/overviews/all_overviews.svelte';
	import Vertragsinfomationen from 'components/complete/vertragsinfomationen.svelte';
	import Line from 'components/elements/line.svelte';
	import Block from './block.svelte';
	import Footer from './footer.svelte';

	let packages: package_id[] = [];
	$: packages = $page.params.packages.split(',') as package_id[];

	function get_title(packages: package_id[]): string {
		const titles: [package_id[], string][] = [
			[['entertainment'], 'Titel'],
			[['entertainment', 'sport'], 'Titel'],
			[['entertainment', 'cinema'], 'Titel'],
			[['entertainment', 'bundesliga'], 'Titel'],
			[['entertainment', 'sport', 'bundesliga'], 'Titel'],
			[['entertainment', 'cinema', 'sport'], 'Titel'],
			[['entertainment', 'cinema', 'bundesliga'], 'Titel'],
			[['entertainment', 'sport', 'bundesliga', 'cinema'], 'Titel'],
			[['entertainmentplus'], 'Titel'],
			[['entertainmentplus', 'sport'], 'Titel'],
			[['entertainmentplus', 'cinema'], 'Titel'],
			[['entertainmentplus', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'sport', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'cinema', 'sport'], 'Titel'],
			[['entertainmentplus', 'cinema', 'bundesliga'], 'Titel'],
			[['entertainmentplus', 'sport', 'bundesliga', 'cinema'], 'Titel']
		];
		const title = titles.find(([p, _]) => p.sort().join(',') === packages.sort().join(','));
		if (title) return title[1];
		return 'Kein Titel gefunden';
	}
</script>

<Header />
<div class="p-12 flex flex-col items-center max-w-6xl ml-auto mr-auto w-full gap-16">
	<div class="text-center flex flex-col gap-2">
		<h1 class="gradient_text title font-bold text-3xl">{get_title(packages)}</h1>
		<ul class="text-red-600 text-xl">
			<li>+ Sky Paketkombis mit bis zu € 156 Sparvorteil und Vorteilspreis für DAZN Jahresabo</li>
			{#if bonus > 0}
				<li>+ Bonus von TAGARO: {bonus_string} Bonus on top bei erfolgreichem Vertragsabschluss</li>
			{/if}
		</ul>
		<p class="max-w-6xl mt-2">
			Bei unserem neuen Angebot erhalten alle Besteller von Sky die beliebtesten Paketkombis mit
			Sparvorteil. Insgesamt ist eine Ersparnis von bis zu € 156 möglich (siehe unsere
			Preistabelle). Die Vermittlung erfolgt versandkostfrei. Zusätzlich überweisen wir Ihnen einen
			Bonus von € 20. Der Empfang ist über Sat, Kabel oder Internet möglich. Wir bieten ebenso
			sämtliche Zubuchoptionen zu Ihrem Vertrag wie Multiscreen, Netflix, DAZN (jetzt € 18,99 mtl.
			im Jahresabo) und UHD an. Ihre PAYBACK Nummer für 500 Basis-Punkte tragen wir gerne für Sie
			ein. Über die PAYBACK App oder online sind weitere Punkte möglich, wenn Sie vor Aboaufnahme
			einen eCoupon aktivieren. Sie profitieren bei TAGARO von einer schnellen und zuverlässigen
			Betreuung sowie jahrelanger Erfahrung seit 2006.
		</p>
	</div>
	<img
		class="rounded-xl shadow-lg w-full border-slate-300 border-[1px] max-w-4xl"
		src={make_url('/images/visuals/sky0522_teaser_12mbasic.png', dev)}
		alt=""
	/>
	<div class="max-w-4xl">
		<PackageTable />
	</div>
	<Block title="Abovermittlung mit TAGARO">
		<p>
			Nach dem eBay Sofort-Kauf erhalten Sie von uns eine leicht verständliche Nachricht zur
			Aboabwicklung zugesandt. Die Anmeldung erfolgt durch uns im Anschluss umgehend. Als Dankeschön
			erhalten Sie nach 6-8 Wochen eine € 20 Prämie auf Ihr Konto überwiesen.
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
	<Line />
	<Inklusive sky_q={false} />
	<div class="mt-10 max-w-6xl ml-auto mr-auto flex flex-col gap-7 items-center">
		<h2 class="gradient_text text-2xl font-bold text-center">
			Sky Q als Receiver oder IPTV Box Neue flexible Empfangsmöglichkeiten auch übers Internet
		</h2>
		<p class="text-center">
			Die neue Sky Q IPTV Box bietet Plug and Play: Einfach mit dem Internet verbinden und
			losschauen – egal welcher Internetanbieter. Auf dem Smartphone, Tablet oder PC/ Mac über Sky
			Go – natürlich auch unterwegs. Darüber hinaus erhalten Sie alle wichtigen Free TV-Sender in
			brillanter HD-Qualität ohne Aufpreis. Mit dem Sky Q Receiver für Sat oder Kabel können Sie
			aufnehmen, haben Zugang auf Sky On Demand und können UHD-Inhalte genießen.
		</p>
		<img
			class="rounded-xl shadow-lg w-full border-slate-300 max-w-4xl border-[1px] p-4"
			src={make_url('/images/visuals/skyq_geraete.png', dev)}
			alt=""
		/>
	</div>
	<Line />
	<div class="max-w-7xl w-full p-5">
		<h2 class="gradient_text text-3xl font-bold text-center">*Angebotsdetails für Neukunden</h2>
		<Vertragsinfomationen />
	</div>
	<Line />
	<div
		class="text-center flex flex-col gap-4 rounded-xl shadow-lg w-full border-slate-300 max-w-4xl border-[1px] p-8 pb-11"
	>
		<h3 class="text-2xl gradient_text m-0">So einfach erhalten Sie Sky:</h3>
		<ul class="">
			<li>1. Bei eBay auf Sofort-Kaufen klicken.</li>
			<li>
				2. Auf unsere Nachricht warten.<br />
				Sie stellen Ihr Sky Programm mittels Aboformular zusammen.
			</li>
			<li>
				3. Bestätigung erhalten und Sky schauen<br />
				Wir und Sky bestätigen Ihnen den Auftrag und Sie werden beliefert<br />
				Eine Freischaltung auf eine Karte oder ein Gerät ist ebenso möglich.
			</li>
		</ul>
		<h3 class="text-2xl gradient_text mt-4">Benötigte Anmeldedaten nach dem eBay Sofort-Kauf:</h3>
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
	<div class="mt-12 text-center flex flex-col gap-7">
		<p>Holen Sie sich Sky mit exklusivem Preisvorteil nach Hause.</p>

		<p>
			Nach dem Sofort-Kauf bei eBay erhalten Sie von uns eine Nachricht zur Aboabwicklung zugesandt. <br
			/>
			Die Anmeldung erfolgt durch uns im Anschluss umgehend.
		</p>

		<p>
			Nach erfolgreicher Anmeldung erhalten Sie von uns Ihr Sky Abonnement schriftlich bestätigt. <br
			/>
			Ihre Unterlagen, die Smartcard sowie die bestellte Sky Hardware erhalten Sie umgehend zugeschickt.
		</p>

		<p>
			Sie bestellen bei TAGARO -
			<mark>Wir vermitteln Sky Verträge bereits seit 2006.</mark>
			<br />
			Wir stehen für eine einfache und zügige Abwicklung mit tausenden zufriedenen Kunden (siehe Bewertungen).
		</p>

		<p>
			Haben Sie Fragen, helfen wir Ihnen gerne weiter. Stellen Sie uns über eBay Ihre Fragen. <br />
			Wir antworten innerhalb von kurzer Zeit! Wir wünschen Ihnen gute Unterhaltung.
		</p>

		<div class="flex justify-center items-center gap-4">
			<img
				src="http://static.tagaro.de/ebay_2/landbell_logo.gif"
				alt=""
				width="107px"
				height="130px"
			/>

			<img
				src="http://static.tagaro.de/ebay_4/versandkostenfrei.gif"
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
<Footer />

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
