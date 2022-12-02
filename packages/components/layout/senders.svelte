<script lang="ts">
	import { dev } from '$app/environment';
	import type { priceable_asset_id } from 'asset_library/asset_types';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';
	import { make_url } from 'frontend/url';

	export let id: priceable_asset_id;
	$: asset = indexed_priceable_assets[id];
</script>

<div class="outer">
	<h2>
		{asset.name} Paket
	</h2>
	<div class="main_alignment">
		{#each asset.senders as element}
			<div class="sender_box">
				<img src={make_url(element.image, dev)} alt="" />
				<p>{element.text}</p>
			</div>
		{/each}
	</div>
	<p class="subtitle">
		Bei Kabelempfang hängt die Verfügbarkeit und Anzahl der enthaltenen Sender vom jeweiligen
		Netzbetreiber ab.
	</p>
</div>

<style lang="scss">
	.main_alignment {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-content: center;
		width: 100%;
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		gap: 25px;
		justify-items: center;
	}
	.sender_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		width: 7%;
		min-width: 150px;
		font-size: small;
	}
	.outer {
		width: 100%;
	}
	h2 {
		text-align: center;
		font-size: 25px;
		margin-bottom: 30px;
	}
	img {
		width: 100px;
		max-height: 60px;
		object-fit: contain;
		text-align: center;
		gap: 20px;
	}
	.subtitle {
		margin-top: 30px;
	}
	p {
		text-align: center;
	}
</style>
