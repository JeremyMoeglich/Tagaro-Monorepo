<script lang="ts">
	import type { Asset, asset_id } from 'asset_library/asset_types';
	import type { Priceable_Asset } from 'asset_library/priceable_asset_types';
	import { get_price_string } from 'asset_library/prices';
	import { get_selector_error_strings, matches_selector } from 'asset_library/selector';

	export let asset: Asset | Priceable_Asset;
	export let func: () => unknown;
	export let selected: boolean;
	export let hoverable = true;
	export let selector_assets: ReadonlyArray<asset_id>;

	function click() {
		if (!disabled) {
			func();
		}
	}

	$: disabled = 'selector' in asset ? !matches_selector(selector_assets, asset.selector) : false;

	$: {
		if (disabled && selected) {
			func();
		}
	}
	let error_message = '';
	$: {
		if (disabled && 'selector' in asset) {
			error_message = get_selector_error_strings(selector_assets, asset.selector).join('<br/>');
		}
	}
</script>

{#if !disabled}
	<button on:click={click} class:selected class:disabled class:hoverable={hoverable && !disabled}>
		{#if disabled}<div class="overlay"><p>{@html error_message}</p></div>{/if}
		<img src={asset.image.normal} alt={asset.name} on:dragstart|preventDefault />
		<p>
			{#if 'price' in asset}
				<b>+ {@html get_price_string([asset.id], 'jahr')}</b> -
			{/if}{asset.name}
		</p>
	</button>
{/if}

<style lang="scss">
	button {
		position: relative;
		padding: 20px;
		width: 200px;
		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.404);
		transition-duration: 200ms;
		img {
			width: 100%;
			max-width: 100px;
		}
		&:hover.hoverable {
			background-color: rgb(247, 159, 171);
			box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.582);
		}
		&.selected {
			background-color: rgb(78, 87, 219);
			&:hover.hoverable {
				background-color: rgb(113, 122, 241);
			}
			box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.582);
		}
		&.disabled {
			background-color: #ededf8;
			opacity: 0.8;
		}
		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.445);
			top: 0px;
			left: 0px;
			p {
				color: white;
				background-color: rgba(0, 0, 0, 0.678);
			}
		}
	}
</style>
