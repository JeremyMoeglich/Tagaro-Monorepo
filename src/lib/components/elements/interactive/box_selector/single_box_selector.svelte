<script lang="ts">
	import type { Asset, asset_id } from '$lib/scripts/universal/asset_library/asset_types';
	import type { category_id } from '$lib/scripts/universal/asset_library/categories';
	import type { Priceable_Asset } from '$lib/scripts/universal/asset_library/priceable_asset_types';
	import BoxSelector from './box_selector.svelte';

	interface Box {
		asset: Asset | Priceable_Asset;
		disabled: boolean;
	}
	export let title: string;
	export let id: category_id | '' = '';
	export let boxes: ReadonlyArray<Box>;
	export let selected: asset_id | '' = '';
	export let selector_assets: ReadonlyArray<asset_id>;
	export let status = true;
	export let active = true;
	export let verbose = false;

	$: status = selected !== '' || !active;

	function select_box(v: asset_id) {
		selected = v;
	}
	let show_error: boolean;
	$: show_error = verbose && !status;
</script>

{#if active}
	<div class="alignment">
		<BoxSelector
			{title}
			{selector_assets}
			{boxes}
			{id}
			selection_function={select_box}
			selected={selected ? [selected] : []}
		/>
		{#if show_error}<p class="error">Eine Option muss ausgewählt werden.</p>{/if}
	</div>
{/if}

<style>
	.error {
		color: red;
	}
</style>
