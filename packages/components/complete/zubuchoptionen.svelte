<script lang="ts">
	import { dev } from '$app/environment';
	import { get_price_string } from 'asset_library/prices';
	import { make_url } from 'frontend/url';

	interface Zubuchoption {
		html: string;
		image: string;
	}

	const zubuchoptionen: (Zubuchoption | 'empty')[] = [
		{
			html: /*html*/ `<b>UHD + ${get_price_string(
				['uhd'],
				'jahr'
			)} mtl. (für Sat oder Kabel-Empfang)</b>`,
			image: '/images/assets/zubuchoptionen/uhd.png'
		},
		{
			image: '/images/assets/zubuchoptionen/dazn.svg',
			html: /*html*/ `<b>DAZN jährlich + ${get_price_string(
				['dazn_yearly'],
				'jahr'
			)} mtl. </b>oder<b><br /> DAZN monatlich + ${get_price_string(
				['dazn_monthly'],
				'monat'
			)} mtl.</b>`
		},
		{
			image: '/images/assets/zubuchoptionen/multiscreen.png',
			html: /*html*/ `<b>Multiscreen + ${get_price_string(
				['multiscreen'],
				'jahr'
			)} mtl. <br /></b> Inkl. Sky Go Plusfür 3 mobile Geräte, 2. Sky Q Receiver für einmalig € 49, 1-2 Sky Q Mini für je einmalig € 29 (zurLeihe oder OHNE zusätzliche Hardware)`
		},
		{
			image: '/images/assets/zubuchoptionen/NetflixSDHD.png',
			html: /*html*/ `<b>Netflix Standard-Abo, HD/2 Streams + ${get_price_string(
				['netflixstandard'],
				'jahr'
			)} mtl.</b>oder <br /><b>Netflix Premium-Abo, UHD/4 Streams + ${get_price_string(
				['netflixpremium'],
				'jahr'
			)} mtl.</b>`
		},
		{
			image: '/images/assets/zubuchoptionen/kids.png',
			html: /*html*/ `<b>Sky Kids + ${get_price_string(['kids'], 'jahr')} mtl.</b>`
		},
		{
			image: '/images/assets/zubuchoptionen/trendsports.png',
			html: /*html*/ `<b>trendSports + ${get_price_string(['trendsports'], 'jahr')} mtl.</b>`
		},
		{
			image: '/images/assets/zubuchoptionen/plus18.png',
			html: /*html*/ `<b>18+ für Blue Movie € 0</b><br /> einmalige Versandpauschale 18+ PIN`
		}
	];
</script>

<div>
	<h2 class="title large center">Zubuchoptionen</h2>
	<div class="outer">
		{#each zubuchoptionen as zubuchoption}
			<div class="zubuchoption">
				{#if zubuchoption === 'empty'}
					<div class="empty" />
				{:else}
					<img src={make_url(zubuchoption.image, dev)} alt="" />
					<div class="text">
						{@html zubuchoption.html}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.outer {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
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
