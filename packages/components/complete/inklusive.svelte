<script lang="ts">
	import Button from '../elements/interactive/buttons/button.svelte';
	import SideBySide from '../layout/side_by_side.svelte';
</script>

<h2 class="gradient_text top_margin">Im Angebot inklusive</h2>
<SideBySide primary="left">
	<span slot="left">
		<h3 class="gradient_text">Sky Q</h3>
		<p>
			Mit unserem Sky Angebot können Sie Ihr Wunschprogramm über die gesamte Laufzeit von 12 Monaten
			zu Neukunden-Preisen genießen. Der Sky Vertrag hat eine Laufzeit von 12 Monaten und ist nach 1
			Jahr monatlich kündbar. Immer inklusive - Das Entertainment Paket oder das Entertainment Plus
			Paket, der Sky Q Receiver, Sky Go und das Programm in HD-Qualität! Das Fußball Bundesliga
			Paket, das Sport Paket, das Sky Cinema Paket und das Sky Kids Paket ist zubuchbar. Ebenso
			können Sie Ultra HD hinzubuchen oder die Multiscreen Option mit Sky Go Plus für noch mehr
			Flexibilität. Sehen Sie TV-Premieren, brandneue Top-Serien und spannende Dokumentationen. Dazu
			Samstags- und Sonntagsspiele der Bundesliga live, die Formel 1 und die größten Sport-Events
			live. Immer dabei Sky On Demand.
		</p>
		<p>
			Als autorisierter Sky-Onlinehändler seit 2006, stehen wir für eine einfache und zügige
			Abwicklung mit persönlichem Service. Schauen Sie sich unsere tausenden zufriedenen Kunden über
			<a
				rel="noreferrer"
				href="https://www.trustami.com/erfahrung/tagaro-medienshop-bewertung"
				target="_blank">Trustami</a
			> an.
		</p>
		<div class="button">
			<Button text="Alle Infomationen zu Sky Q" on_click="/sky_q" />
		</div>
	</span>
	<span slot="right">
		<img src="/images/visuals/skyq_header_4.png" alt="" />
	</span>
</SideBySide>
<SideBySide primary="right">
	<span slot="right">
		<h3 class="gradient_text">Peacock für alle Sky Q Kunden</h3>
		<ul>
			<li>
				<b>Exklusive Peacock Originals,</b> darunter die aktuellen Serien "Saved by the Bell", "Rutherford
				Falls" und "Girls5eva"; und zusätzlich die kommenden Serien "The Girl in the Woods", "MacGruber",
				"Joe vs. Carole", "Bel-Air" und "The Resort".
			</li>
			<li>
				<b>Alle Staffeln der beliebtesten Drama und Comedy-Serien</b> wie "The Office", "Monk", "30 Rock",
				"Psych" und "Will & Grace"; unverzichtbare Serien wie "Downton Abbey", "Dr. House", "Battlestar
				Galactica", "Bates Motel" und "Heroes"; die beliebten Franchise Hits "Chicago Fire", "Chicago
				P.D." und "Chicago Med"; und Reality-TV-Shows wie "Keeping Up With the Kardashians", "Below Deck"
				und "Botched".
			</li>
			<li>
				<b>Filme der letzten Jahre</b> wie "American Pie 2", "Back to the Future Part III", "Brüno",
				"Bulletproof", "Children of Men", "Erin Brockovich", "The Game", "Gladiator", "The Green Mile",
				"The Holiday", "Jason Bourne", "Identity Thief", "Lucy", "MacGruber", "Mamma Mia!", "Meet Joe
				Black", "Notting Hill", "Pitch Perfect", "The Purge", "The Secret Life of Pets", "Shaun of the
				Dead", "Snow White and the Huntsman", "Out of Sight", "Tower Heist", "Tremors" und "Van Helsing".
			</li>
		</ul>
	</span>
	<span slot="left">
		<img src="/images/visuals/sky_22-01_hilfecenter_peacock_1360x706.jpg" alt="" />
	</span>
</SideBySide>
<SideBySide primary="left">
	<span slot="left">
		<h3 class="gradient_text">discovery+ 1 Jahr geschenkt als Extra für alle Sky Q Kunden</h3>
		<ul>
			<li>Der Streaming Dienst für großartige Real-Life Unterhaltung die du lieben wirst</li>
			<li>Mehr als 10.000 Inhalte aller Discovery Sender jederzeit auf Abruf verfügbar</li>
			<li>
				Premium Inhalte wie BBC Dokus, discovery+ Originals, Eurosport HD und viele mehr inklusive
			</li>
		</ul>
		<p>
			1 Jahr lang gratis für alle Sky Q Kunden. Sky Abo abschließen und Gutschein sichern.
			Aktivierung der App auf dem Sky Q Receiver mit Anmeldung bei discovery+ mittels QR-Code.
		</p>
	</span>
	<span slot="right">
		<img src="/images/visuals/sky_22-06_discovery-plus_teaser.webp" alt="" />
	</span>
</SideBySide>

<style lang="scss">
	h2 {
		text-align: center;
		font-size: 38px;
	}
	.button {
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
	}

	img {
		width: 100%;
	}
</style>
