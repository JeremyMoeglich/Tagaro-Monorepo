<script lang="ts">
	import type { priceable_asset_id } from 'asset_library/asset_types';
	import {
		get_offer_price,
		get_price,
		get_price_string,
		to_price_string
	} from 'asset_library/prices';
	// import { typed_keys } from 'functional-utilities';
	import SquarePackageList from '../../generators/square_package_list.svelte';

	import AssetImage from '../../generators/asset_image.svelte';
	import { sort_assets } from 'asset_library/all_assets';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';
	// import { indexed_package_assets, type package_id } from 'asset_library/assets/packages';
	import { get_title } from 'asset_library/title';
	import Senders from '../../layout/senders.svelte';
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import { empty_offer } from 'asset_library/offer_description';

	export let price_asset_ids: priceable_asset_id[];
	export let animated = false;
	export let show_price: boolean;
	export let show_senders: priceable_asset_id | undefined = undefined;

	// $: offer_string = price_asset_ids.every((id) =>
	// 	typed_keys(indexed_package_assets).includes(id as package_id)
	// )
	// 	? get_offer_note(price_asset_ids as package_id[])
	// 	: '';

	$: sorted_assets = sort_assets(price_asset_ids);
	$: asset_square_images = sorted_assets.filter((v) => {
		return 'square' in indexed_priceable_assets[v].image;
	});

	$: primary_price = get_price(price_asset_ids).jahr;
	$: base_price = get_offer_price(empty_offer, price_asset_ids).jahr;
</script>

<div class="package_overview">
	<div class="alignment">
		<div class="image flex flex-col items-center">
			<AssetImage ids={price_asset_ids} {animated} />
			{#if !price_asset_ids.includes('dazn_unlimited')}
				<img src={make_url('/images/badges/einmalige_gebuehr.svg', dev)} alt="" class="w-32 mt-4" />
			{/if}
		</div>

		<div class="description">
			<h2 class="title">
				{@html get_title(price_asset_ids, price_asset_ids.length === 1)}
				{#if price_asset_ids.length === 1}
					- {indexed_priceable_assets[price_asset_ids[0]].note}
				{/if}
			</h2>
			<ul class="points">
				{#each sorted_assets as asset}
					{#each indexed_priceable_assets[asset].aspects as point}
						<li>{@html point}</li>
					{/each}
				{/each}
			</ul>
			{#if show_price}
				{#if asset_square_images.length > 0}
					<SquarePackageList package_ids={price_asset_ids} />
				{/if}
				<div>
					<h3 class:spaced={asset_square_images.length === 0}>
						12 Monate nur {@html to_price_string(primary_price)} mtl.*
					</h3>
					<p class="small_text">
						{#if base_price > primary_price}
							statt {@html to_price_string(base_price)} mtl.
							<br />
						{/if}
						(im Jahres-Abo, danach {@html get_price_string(price_asset_ids, 'monat')} mtl.* im Monats-Abo)
						<br />
						Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
					</p>
				</div>
			{/if}

			<!-- {#if offer_string}
					<GradientBadge>{@html offer_string}</GradientBadge>
			{/if}  -->
		</div>
		{#if show_senders}
			<div class="senders">
				<Senders id={show_senders} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		width: 100%;
		gap: calc(5% + 50px);
		justify-content: center;
		flex-wrap: wrap;
	}
	.title,
	:global(.description h3) {
		font-size: 25px;
		margin-top: 0px;
	}
	.description {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.points {
		list-style: none;
		font-size: 16px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		line-height: 150%;
	}
	.small_text {
		font-size: 15px;
		color: gray;
	}
	.points > li {
		position: relative;
		padding-left: 20px;
	}
	.points > li::before {
		content: '✓';
		position: absolute;
		left: 0;
		top: 0;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--color-primary);
	}

	.image {
		width: max(min(30%, 340px), 200px);
		align-self: center;
	}

	.description {
		min-width: max(340px, 25%);
		max-width: 700px;
		flex: 1 1 0;
		margin-top: 0px;
	}
	.package_overview {
		transition-duration: 300ms;
		width: 100%;
	}
	.senders {
		width: 100%;
	}
	.spaced {
		margin-top: 20px;
	}
	h3 {
		margin-bottom: 10px;
	}
</style>
