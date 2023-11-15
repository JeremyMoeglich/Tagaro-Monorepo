<script lang="ts">
	import { dev } from '$app/environment';
	import { get_price_string } from 'asset_library/prices';
	import { make_url } from 'frontend/url';

	interface Zubuchoption {
		html: string;
		image: string;
		mobile_order?: number;
	}

	const zubuchoptionen: Zubuchoption[] = [
		{
			html: /*html*/ `<b>UHD + ${get_price_string(
				['uhd'],
				'jahr'
			)} mtl.</b> <br> Für Sat oder Kabel-Empfang`,
			image: '/images/assets/zubuchoptionen/uhd.png'
		},
		{
			image: '/images/assets/zubuchoptionen/dazn.svg',
			html: /*html*/ `<div style="font-size: 15px;">
				<b>DAZN Unlimited + ${get_price_string(['dazn_unlimited'], 'jahr')} mtl.</b>
				<br />
				im Jahresabo <br />
				(nach 12 Monaten ${get_price_string(
					['dazn_unlimited'],
					'monat'
				)} pro Monat und monatlich kündbare Mitgliedschaft)    
			</div>
				`
		},
		{
			image: '/images/assets/zubuchoptionen/multiscreen.png',
			html: /*html*/ `<b>Multiscreen + ${get_price_string(
				['multiscreen'],
				'jahr'
			)} mtl. <br /></b> Inkl. Sky Go Plus für 3 mobile Geräte, 2. Sky Q Receiver für einmalig €&nbsp;49, 1-2 Sky Q Mini für je einmalig €&nbsp;29 (zur Leihe oder OHNE zusätzliche Hardware)`
		},
		{
			image: '/images/assets/zubuchoptionen/kids.png',
			html: /*html*/ `<b>Sky Kids + ${get_price_string(['kids'], 'jahr')} mtl.</b>`
		},
		// {
		// 	html: /*html*/ `<b>Dyn Jahresabo + ${get_price_string(
		// 		['dyn'],
		// 		'jahr'
		// 	)} mtl. statt €&nbsp;12,59 mtl.</b> <br>
		// 	(Wird als Einmalzahlung für 12 Monate in Höhe von € 114 berechnet, <br>
		// 	nach 12 Monaten € 14,50 pro Monat und monatlich kündbare Mitgliedschaft)
		// 	`,
		// 	image: '/images/assets/zubuchoptionen/dyn.png'
		// },
		// {
		// 	image: '/images/assets/zubuchoptionen/dyn.png',
		// 	html: /*html*/ `<div style="font-size: 15px;">
		// 		<b>Dyn 3-Monate-Schnupperangebot für €&nbsp;14,50 einmalig statt €&nbsp;43,50 mtl.</b> <br />
		// 		(Wird als Einmalzahlung für 3 Monate in Höhe von € 14,50 berechnet, <br />
		// 		danach € 14,50 pro Monat und monatlich kündbare Mitgliedschaft)
		// 	</div>
		// 		`
		// },
		{
			image: '/images/assets/zubuchoptionen/netflix_standard.png',
			html: /*html*/ `<b>Netflix Standard-Abo (Full HD 1080p) <br> + ${get_price_string(
				['netflixstandard'],
				'jahr'
			)} mtl.</b> <br> 2 Geräte`
		},
		{
			image: '/images/assets/zubuchoptionen/netflix_premium.png',
			html: /*html*/ `<b>Netflix Premium-Abo (UHD) <br> + ${get_price_string(
				['netflixpremium'],
				'jahr'
			)} mtl.</b>  <br> 4 Geräte`
		},

		{
			image: '/images/assets/zubuchoptionen/trendsports.png',
			html: /*html*/ `<b>trendSports + ${get_price_string(['trendsports'], 'jahr')} mtl.</b>`
		},
		{
			image: '/images/assets/zubuchoptionen/plus18.png',
			html: /*html*/ `<b>18+ für Blue Movie €&nbsp;0</b><br /> einmalige Versandpauschale 18+ PIN`
		}
	];
</script>

<div class="outer">
	<h2 class="title large center">Zubuchoptionen</h2>
	<div class="grid">
		{#each zubuchoptionen as zubuchoption}
			<div class="zubuchoption" style:--order={zubuchoption.mobile_order}>
				<img src={make_url(zubuchoption.image, dev)} alt="" />
				<div class="text">
					{@html zubuchoption.html}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.outer {
		width: 100%;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-auto-rows: 1fr;
		width: 100%;
		gap: 1rem;
	}
	img {
		width: 100px;
		max-width: 100%;
	}
	.zubuchoption {
		display: flex;
		align-items: center;
		gap: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.219);
		padding: 1rem;
	}
	h2 {
		margin-bottom: 30px;
	}
</style>
