<script>
	import AngeboteRotator from '$lib/site_components/angebote_rotator.svelte';
	import SchnellSkyAbonnieren from '$lib/site_components/schnell_sky_abonnieren.svelte';
</script>

<body>
	<div style="padding-top: max(2vh, 30px);" />
	<div class="top_header">
		<div class="next_to_title">
			<a target="_blank" href="/sky/bestellen"
				><img alt="Sky Logo" src="/images/badges/sky_signature.svg" class="sky_logo" /></a
			>
			<div class="sky_logo to_remove">
				<a target="_blank" href="/sky/bestellen"
					><img
						alt="Dazn Logo"
						src="/images/external/dazn.svg"
						class="dazn_logo to_remove maxwidth90"
					/></a
				>
				<p class="subtext">DAZN Jetzt hinzubuchbar</p>
			</div>
		</div>
		<div class="val_break" style="width: 100%;" />
		<div class="header_text">
			<h1 class="main_title">
				Nur für kurze Zeit: Jetzt Sky Wunschpakete buchen und gratis Fitbit Inspire 2 im Wert von
				€&nbsp;99,95 erhalten. Neue zusätzliche Empfangsart: Internet
			</h1>
			<h2 class="subtitle1">Bei Vermittlung über TAGARO zusätzlich mit €&nbsp;20 Bonus.</h2>
			<h3 class="subtitle2 to_remove">
				Wir sind autorisierter Sky Onlinehändler und stehen für eine schnelle & zuverlässige
				Bearbeitung.
			</h3>
		</div>
	</div>

	<div style="padding-top:max(1vw, 20px);" />
	<div class="imagesMain">
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img
				alt="Bundesliga Paket"
				src="/images/packages/sky_bundesliga.jpg"
				class="main_images"
			/></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img
				alt="Entertainment Paket"
				src="/images/packages/sky_entertainment.jpg"
				class="main_images"
			/></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="Cinema Paket" src="/images/packages/sky_cinema.jpg" class="main_images r3" /></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="Sport Paket" src="/images/packages/sky_sport.jpg" class="main_images" /></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="Kids Paket" src="/images/packages/sky_kids.jpg" class="main_images r1" /></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img
				alt="Entertainment Plus Paket"
				src="/images/packages/sky_entertainment-plus.jpg"
				class="main_images r2"
			/></a
		>
	</div>
	<div class="bottom_things">
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="20 Euro Prämie" src="/images/badges/praemie.png" class="bottom_icon" /></a
		>
		<div class="to_remove">
			<p>
				&#10004; Fitbit Inspire 2 Gutschein von Sky ab Buchung von Entertainment Plus + 1 Paket oder
				Entertainment + 2 Pakete
			</p>
			<p style="margin-right:30px;">&#10004; Vertrag für Internet, Sat- oder Kabel-Anschluss</p>
			<p>&#10004; Sky Q Receiver oder Sky Q IPTV Box</p>
			<p>&#10004; € 20 Bonus und versandkostenfreie Lieferung</p>
		</div>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="Monatlich kündbar" src="/images/badges/mtlkuendbar.png" class="bottom_icon" /></a
		>
		<a target="_blank" href="/sky/bestellen" aria-label="Aboformular Öffnen"
			><img alt="500 Payback Punkte" src="/images/badges/payback.png" class="bottom_icon" /></a
		>
	</div>
	<div style="padding-top:max(1vw, 20px);" />
	<AngeboteRotator />
	<div class="scaling_element">
		<SchnellSkyAbonnieren />
	</div>
</body>

<style lang="scss">
	@import '../lib/style/mixins.scss';
	.top_header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
	.scaling_element {
		transition-duration: 300ms;
	}
	.scaling_element:hover {
		transform: scale(1.03);
	}
	.bottom_icon {
		margin-right: 1vw;
		width: min(24vw, 141px);
	}

	.next_to_title {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.bottom_things {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.imagesMain {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.subtext {
		text-align: center;
		font-weight: 900;
		margin-top: 5px;
	}

	.main_images {
		order: 0;
		width: min(16vw, max(19vh, 150px));
		$total_padding: max(0px, min(110px, 10vw) - 100px);
		margin-left: $total_padding;
		margin-right: $total_padding;
		margin-top: 0px;
		padding: 5px;
		margin-bottom: 1vw;
		align-self: auto;
		transition-duration: 400ms;
	}
	.main_images:hover {
		transform: scale(1.1);
		padding: 5px;
		background: linear-gradient(
			142deg,
			rgba(253, 122, 29, 1) 0%,
			rgba(253, 29, 29, 1) 21%,
			rgba(194, 64, 159, 1) 51%,
			rgba(106, 92, 186, 1) 77%,
			rgba(29, 162, 253, 1) 100%
		);
	}

	.subtitle1 {
		color: #4a4a4a;
		text-align: center;
		margin-bottom: 8px;
	}

	.subtitle2 {
		color: #868686;
		text-align: center;
		margin-bottom: 0px;
	}

	.main_title {
		text-align: center;
		margin-bottom: 15px;
		@include gradient-text;
	}

	.maxwidth90 {
		width: 70px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.sky_logo {
		order: 0;
		width: 160px;
		padding-top: max(10px, 2vh);
		padding-bottom: 0px;
		align-self: auto;
		flex: 1 1 auto;
	}
	.dazn_logo {
		order: 0;
		width: 90px;
		padding-top: max(10px, 2vh);
		padding-bottom: 0px;
		align-self: auto;
		flex: 1 1 auto;
	}

	.header_text {
		order: 1;
		padding-left: max(1vw, 10px);
		max-width: max(60vw, 600px);
		align-self: auto;
		flex: 6 1 auto;
	}

	h1 {
		font-size: 25pt;
	}

	@media only screen and (max-width: 950px) {
		.main_images {
			width: min(20vw, 20vh);
		}

		.r1 {
			display: none;
		}
	}

	@media only screen and (max-width: 800px) {
		.main_images {
			width: min(25vw, 25vh);
		}

		.r2 {
			display: none;
		}
	}

	@media only screen and (min-width: 900px) {
		.val_break {
			display: none;
		}
	}

	@media only screen and (max-width: 900px) {
		.to_remove {
			display: none;
		}
	}
</style>
