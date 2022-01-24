<script lang="ts">
	import type { Asset, asset_id } from '$lib/scripts/universal/asset_libary/asset_types';
	import type { Priceable_Asset } from '$lib/scripts/universal/asset_libary/priceable_asset_types';
	import BoxSelector from './box_selector.svelte';

	interface Box {
		asset: Asset | Priceable_Asset;
		disabled: boolean;
	}
	export let title: string;
	export let boxes: Array<Box>;
	export let selected: asset_id = boxes[0].asset.id;
	export let selector_assets: Array<asset_id>;

	function select_box(v: asset_id) {
		selected = v;
	}
</script>

<BoxSelector
	{title}
	{selector_assets}
	{boxes}
	selection_function={select_box}
	selected={[selected]}
/>
