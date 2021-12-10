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
		</div>
		<div class="val_break" style="width: 100%;" />
		<div class="header_text">
			<h1 class="main_title">
				Nur für kurze Zeit: Sky schenkt dir zu Weihnachten bis zu 12 Monate Sport*
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
	<a href={urls.aboformular}>
		<div class="showcase_alignment">
			<img alt="" src="/images/visuals/sky_21-12_spo-12m_text_s_v4.webp" class="showcased_image" />
		</div>
	</a>
	<div class="bottom_things">
		<a href={urls.aboformular}
			><img alt="" src="/images/badges/praemie.png" class="bottom_icon" /></a
		>
		<div class="to_remove">
			<p style="margin-right:30px;">
				✓ Bei Buchung des Fußball Bundesliga Pakets das Sport Paket 6 Monate gratis*
			</p>
			<p>✓ Bei Buchung von Cinema und Fußball Bundesliga das Sport Paket 12 Monate gratis*</p>
            <p>✓ € 20 Bonus und versandkostenfreie Vermittlung*</p>
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
	@import '../../shared/style/mixins.scss';
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


	.showcased_image {
		width: 80%;
        max-width: 900px;
        transition-duration: 1s;
        &:hover {
            transform: scale(103%);
        }
	}
	.showcase_alignment {
		display: flex;
		align-items: center;
        padding: 20px 0px;
		flex-direction: column;
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

	.sky_logo {
		order: 0;
		width: 160px;
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
