<script lang="ts">
	import type { Asset, asset_id } from '$lib/scripts/universal/asset_libary/asset_types';
	import type { Priceable_Asset } from '$lib/scripts/universal/asset_libary/priceable_asset_types';
	import { get_price_string } from '$lib/scripts/universal/asset_libary/prices';
	import {
		get_selector_error_strings,
		matches_selector
	} from '$lib/scripts/universal/asset_libary/selector';
	import { hasProperty } from '$lib/scripts/universal/util';

	export let asset: Asset | Priceable_Asset;
	export let func: () => unknown;
	export let selected: boolean;
	export let hoverable = true;
	export let selector_assets: Array<asset_id>;

	function click() {
		if (!disabled) {
			func();
		}
	}

	$: disabled = hasProperty(asset, 'selector')
		? !matches_selector(selector_assets, asset.selector)
		: false;

	$: {
		if (disabled && selected) {
			func();
		}
	}
	let error_message = '';
	$: {
		if (disabled && hasProperty(asset, 'selector')) {
			error_message = get_selector_error_strings(selector_assets, asset.selector).join('<br/>');
		}
	}
</script>

<button on:click={click} class:selected class:disabled class:hoverable>
	{#if disabled}<div class="overlay"><p>{@html error_message}</p></div>{/if}
	<img src={asset.image} alt={asset.text} on:dragstart|preventDefault />
	<p>
		{#if hasProperty(asset, 'price')}
			<b>{get_price_string([asset.id], 'jahr')}</b> -
		{/if}{asset.text}
	</p>
</button>

<style lang="scss">
	@use 'sass:math';

	$d: 25px;
	$angle: 135deg;
	$sinus: math.sin($angle);

	@keyframes moving-lines {
		0% {
			background-position: calc($d / $sinus) 0px;
		}
	}

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
			background-color: #e5e5f7;
			opacity: 0.8;
			background: repeating-linear-gradient(
				$angle,
				#4465f7,
				#7444f7 calc($d/5),
				#e5e5f7 calc($d/5),
				#e5e5f7 $d
			);
			background-size: calc($d/$sinus) 100%;
			animation: moving-lines 2s linear infinite reverse;
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
