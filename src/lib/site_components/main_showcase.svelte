<script>
	import * as urls from '$lib/vars/urls';
	import Button from '$lib/layout_components/button.svelte';
</script>

<body>
	<div style="padding-top: 2vh;" />
	<div class="top_header">
		<div class="next_to_title">
			<a href={urls.aboformular}
				><img alt="" src="/images/badges/sky_signature.svg" class="sky_logo" /></a
			>
			<div class="sky_logo to_remove">
				<a href={urls.aboformular}
					><img
						alt=""
						src="/images/external/amazongiftcard.png"
						class="sky_logo to_remove maxwidth90"
					/></a
				>
			</div>
		</div>
		<div class="val_break" style="width: 100%;" />
		<div class="header_text">
			<h1 class="main_title">
				Nur für kurze Zeit: Jetzt Sky Wunschpakete buchen und einen Amazon Gutschein im Wert von bis
				zu € 125* erhalten
			</h1>
			<h2 class="subtitle1">Bei Vermittlung über TAGARO zusätzlich mit € 20 Bonus.</h2>
			<h3 class="subtitle2 to_remove">
				Wir sind autorisierter Sky Onlinehändler und stehen für eine schnelle & zuverlässige
				Bearbeitung.
			</h3>
		</div>
		<div style="order: 3;" />
	</div>

	<div style="padding-top:max(1vw, 20px);" />
	<div class="imagesMain">
		<a href="/sky_angebote/bundesliga"
			><img alt="" src="/images/packages/sky_bundesliga.jpg" class="main_images" /></a
		>
		<a href="/sky_angebote/entertainment"
			><img alt="" src="/images/packages/sky_entertainment.jpg" class="main_images" /></a
		>
		<a href="/sky_angebote/cinema"
			><img alt="" src="/images/packages/sky_cinema.jpg" class="main_images r3" /></a
		>
		<a href="/sky_angebote/sport"
			><img alt="" src="/images/packages/sky_sport.jpg" class="main_images" /></a
		>
		<a href="/sky_angebote#zubuchoptionen"
			><img alt="" src="/images/packages/sky_kids.jpg" class="main_images r1" /></a
		>
		<a href="/sky_angebote/entertainment"
			><img alt="" src="/images/packages/sky_entertainment-plus.jpg" class="main_images r2" /></a
		>
	</div>
	<div class="bottom_things">
		<a href={urls.aboformular}
			><img alt="" src="/images/badges/praemie.png" class="bottom_icon" /></a
		>
		<div class="to_remove">
			<p style="margin-right:30px;">
				*Bei Buchung von Sky Entertainment + mindestens 1 Paket ein € 50 Amazon Gutschein on top
			</p>
			<p>
				*Bei Buchung von Sky Entertainment + mindestens 2 Pakete ein € 125 Amazon Gutschein on top
			</p>
			<p>
				*Bei Buchung von Sky Entertainment Plus + mindestens 1 Paket ein € 125 Amazon Gutschein on
				top
			</p>
		</div>
		<a href={urls.aboformular}
			><img alt="" src="/images/badges/mtlkuendbar.png" class="bottom_icon" /></a
		>
		<a href={urls.aboformular}
			><img alt="" src="/images/badges/payback.png" class="bottom_icon" /></a
		>
	</div>
	<div class="btn">
		<Button text="Jetzt Bestellen" route={urls.aboformular} />
	</div>
</body>

<style lang="scss">
	@import '../style/mixins.scss';
	.btn {
		display: flex;
		justify-content: center;
		margin: 50px;
	}
	.top_header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		align-items: center;
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


	.main_images {
		order: 0;
		width: min(16vw, max(19vh, 150px));
		--total_padding: max(0px, calc(min(110px, 10vw) - 100px));
		padding-left: var(--total_padding);
		padding-right: var(--total_padding);
		padding-top: 0px;
		padding-bottom: 1vw;
		padding: 5px;
		align-self: auto;
		transition-duration: 400ms;
		z-index: 4;
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
		box-shadow: 0px 10px 36px -10px rgba(0, 0, 0, 0.75);
		z-index: 5;
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
		width: 150px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.sky_logo {
		order: 0;
		max-width: 160px;
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
