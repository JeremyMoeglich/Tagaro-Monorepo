<script lang="ts">
	import type { Asset, asset_id } from 'asset_library/asset_types';
	import type { category_id } from 'asset_library/categories';
	import type { Priceable_Asset } from 'asset_library/priceable_asset_types';
	import ClickableBox from './clickable_box.svelte';

	interface Box {
		asset: Asset | Priceable_Asset;
		disabled: boolean;
	}
	export let title: string;
	export let boxes: ReadonlyArray<Box>;
	export let selector_assets: ReadonlyArray<asset_id>;
	export let selection_function: (v: asset_id) => void;
	export let selected: ReadonlyArray<asset_id>;
	export let id: category_id | '' = '';
</script>

<div class="alignment" {id}>
	<h2 class="gradient_text">{title}</h2>
	<div class="boxes">
		{#each boxes as box}
			<ClickableBox
				asset={box.asset}
				func={() => {
					selection_function(box.asset.id);
				}}
				selected={selected.includes(box.asset.id)}
				{selector_assets}
				hoverable={!selected.includes(box.asset.id)}
			/>
		{/each}
	</div>
</div>

<style>
	.boxes {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
	}
	h2 {
		margin-bottom: 15px;
	}
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
