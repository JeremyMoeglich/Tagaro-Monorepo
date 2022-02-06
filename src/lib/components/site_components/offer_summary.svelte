<script lang="ts">
	import type { priceable_asset_id } from '$lib/scripts/universal/asset_library/asset_types';
	import { indexed_priceable_assets } from '$lib/scripts/universal/asset_library/priceable_asset';

	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';

	export let selected_priceable_assets: ReadonlyArray<priceable_asset_id>;
</script>

<div class="alignment">
	<div class="prices">
		Total: {get_price_string(selected_priceable_assets, 'jahr')} mtl.
		<br />
		Nach Verlängerung: {get_price_string(selected_priceable_assets, 'monat')} mtl.
	</div>
	<div class="asset_images">
		{#each selected_priceable_assets as asset}
			<img src={indexed_priceable_assets[asset].image} alt={indexed_priceable_assets[asset].text} />
		{/each}
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
		gap: 30px;
		padding: 20px 40px;
		background-color: rgb(255, 255, 255);
		width: 100vw;
		box-shadow: 0px -5px 20px -15px black;
		flex-wrap: wrap;
		max-height: 30vh;
		overflow-y: scroll;
	}
	.prices {
		font-size: larger;
	}
	.asset_images {
		display: flex;
		align-items: center;
		gap: 10px;
		img {
			width: 80px;
		}
		flex-wrap: wrap;
	}
</style>
