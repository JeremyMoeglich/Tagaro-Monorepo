<script lang="ts">
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';
	import Line from '../elements/line.svelte';
	import Button from '../elements/interactive/buttons/button.svelte';
	import SideBySide from '../layout/side_by_side.svelte';

	export let sky_q = true;
	export let paramount_plus = true;
	export let peacock = true;
	export let discovery = true;
	export let space = '70px';

	export let version: 'tagaro' | 'ebay';

	const title_class = 'light';
</script>

<Line {space} />
<div>
	<h2 class="large title">Im Angebot inklusive</h2>
	{#if sky_q}
		<SideBySide primary="left">
			<span slot="left">
				<h3 class={title_class}>Sky Q</h3>
				<p>
					Mit unserem Sky Angebot können Sie Ihr Wunschprogramm über die gesamte Laufzeit von 12
					Monaten zu Neukunden-Preisen genießen. Der Sky Vertrag hat eine Laufzeit von 12 Monaten
					und ist nach 1 Jahr monatlich kündbar. Immer inklusive - Das Entertainment Paket oder das
					Entertainment Plus Paket, der Sky Q Receiver, Sky Go und das Programm in HD-Qualität! Das
					Fußball Bundesliga Paket, das Sport Paket, das Sky Cinema Paket und das Sky Kids Paket ist
					zubuchbar. Ebenso können Sie Ultra HD hinzubuchen oder die Multiscreen Option mit Sky Go
					Plus für noch mehr Flexibilität. Sehen Sie TV-Premieren, brandneue Top-Serien und
					spannende Dokumentationen. Dazu Samstags- und Sonntagsspiele der Bundesliga live, die
					Formel 1 und die größten Sport-Events live. Immer dabei Sky On Demand.
				</p>
				<p>
					Als Sky Onlinehändler seit 2006 stehen wir für eine einfache und zügige Abwicklung mit
					persönlichem Service. Schauen Sie sich unsere tausenden zufriedenen Kunden über
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
				<img src={make_url('/images/visuals/skyq_header_4.png', dev)} alt="" />
			</span>
		</SideBySide>
	{/if}
	{#if paramount_plus}
		<SideBySide primary="right">
			<span slot="left">
				<img
					src={make_url('/images/visuals/sky_22-11_paramount-preregistration_v2.webp', dev)}
					alt=""
					class:tagaro={version === 'tagaro'}
				/>
			</span>
			<span slot="right">
				<h3 class={title_class}>Paramount+ für alle Sky Cinema Kunden mit diesen Inhalten</h3>
				<ul>
					<li>✓ Grandiose Hollywood-Blockbuster</li>
					<li>✓ Exklusive Originals</li>
					<li>✓ Herausragende Serien</li>
					<li>✓ Spektakuläre Shows</li>
					<li>
						✓ Ab 8.12.2022: Paramount+ ist im Sky Cinema Paket inklusive im Wert von €7,99 mtl.*
					</li>
				</ul>
			</span>
		</SideBySide>
	{/if}
	{#if peacock}
		<SideBySide primary="left">
			<span slot="left">
				<h3 class={title_class}>Peacock für alle Sky Q Kunden</h3>
				<ul>
					<li>
						<b>Exklusive Peacock Originals,</b> darunter die aktuellen Serien "Saved by the Bell", "Rutherford
						Falls" und "Girls5eva"; und zusätzlich die kommenden Serien "The Girl in the Woods", "MacGruber",
						"Joe vs. Carole", "Bel-Air" und "The Resort".
					</li>
					<li>
						<b>Alle Staffeln der beliebtesten Drama und Comedy-Serien</b> wie "The Office", "Monk", "30
						Rock", "Psych" und "Will & Grace"; unverzichtbare Serien wie "Downton Abbey", "Dr. House",
						"Battlestar Galactica", "Bates Motel" und "Heroes"; die beliebten Franchise Hits "Chicago
						Fire", "Chicago P.D." und "Chicago Med"; und Reality-TV-Shows wie "Keeping Up With the Kardashians",
						"Below Deck" und "Botched".
					</li>
					<li>
						<b>Filme der letzten Jahre</b> wie "American Pie 2", "Back to the Future Part III", "Brüno",
						"Bulletproof", "Children of Men", "Erin Brockovich", "The Game", "Gladiator", "The Green
						Mile", "The Holiday", "Jason Bourne", "Identity Thief", "Lucy", "MacGruber", "Mamma Mia!",
						"Meet Joe Black", "Notting Hill", "Pitch Perfect", "The Purge", "The Secret Life of Pets",
						"Shaun of the Dead", "Snow White and the Huntsman", "Out of Sight", "Tower Heist", "Tremors"
						und "Van Helsing".
					</li>
				</ul>
			</span>
			<span slot="right">
				<img
					src={make_url('/images/visuals/sky_22-01_hilfecenter_peacock_1360x706.jpg', dev)}
					alt=""
				/>
			</span>
		</SideBySide>
	{/if}
	{#if discovery}
		<SideBySide primary="right">
			<span slot="right">
				<h3 class={title_class}>discovery+ 1 Jahr geschenkt als Extra für alle Sky Q Kunden</h3>
				<ul>
					<li>Der Streaming Dienst für großartige Real-Life Unterhaltung die du lieben wirst</li>
					<li>Mehr als 10.000 Inhalte aller Discovery Sender jederzeit auf Abruf verfügbar</li>
					<li>
						Premium Inhalte wie BBC Dokus, discovery+ Originals, Eurosport HD und viele mehr
						inklusive
					</li>
				</ul>
				<p>
					1 Jahr lang gratis für alle Sky Q Kunden. Sky Abo abschließen und Gutschein sichern.
					Aktivierung der App auf dem Sky Q Receiver mit Anmeldung bei discovery+ mittels QR-Code.
				</p>
			</span>
			<span slot="left">
				<img src={make_url('/images/visuals/sky_22-06_discovery-plus_teaser.webp', dev)} alt="" />
			</span>
		</SideBySide>
	{/if}
</div>

<style lang="scss">
	h2 {
		text-align: center;
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
	.title {
		margin-bottom: 20px;
	}
	h3 {
		margin-bottom: 15px;
	}
	.tagaro {
		padding: 25px;
	}
</style>
