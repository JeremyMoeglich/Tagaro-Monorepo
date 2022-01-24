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
	export let selected: Array<asset_id> = [];
	export let selector_assets: Array<asset_id>;

	function select_box(v: asset_id) {
		if (selected.includes(v)) {
			selected.splice(selected.indexOf(v), 1);
			selected = selected;
		} else {
			selected = [...selected, v];
		}
	}
</script>

<BoxSelector {title} {selector_assets} {boxes} selection_function={select_box} {selected} />
