<script lang="ts">
	import type { Asset, asset_id } from '$lib/scripts/universal/asset_library/asset_types';
	import type { Priceable_Asset } from '$lib/scripts/universal/asset_library/priceable_asset_types';
	import BoxSelector from './box_selector.svelte';

	interface Box {
		asset: Asset | Priceable_Asset;
		disabled: boolean;
	}
	export let title: string;
	export let boxes: ReadonlyArray<Box>;
	export let selected: asset_id | '' = '';
	export let selector_assets: ReadonlyArray<asset_id>;

	function select_box(v: asset_id) {
		selected = v;
	}
</script>

<BoxSelector
	{title}
	{selector_assets}
	{boxes}
	selection_function={select_box}
	selected={selected ? [selected] : []}
/>
