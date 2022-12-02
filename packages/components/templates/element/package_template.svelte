<script lang="ts">
	//import GradientBadge from '../../elements/gradient_badge.svelte';

	import type { priceable_asset_id } from 'asset_library/asset_types';
	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import { typed_keys } from 'functional-utilities';
	import SquarePackageList from '../../generators/square_package_list.svelte';

	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	import { indexed_package_assets, type package_id } from 'asset_library/assets/packages';
	import AssetImage from '../../generators/asset_image.svelte';
	import { sort_assets } from 'asset_library/all_assets';

	export let price_asset_ids: priceable_asset_id[];
	export let animated = false;
	export let show_price: boolean;
	export let show_senders: boolean;

	$: offer_string = price_asset_ids.every((id) =>
		typed_keys(indexed_package_assets).includes(id as package_id)
	)
		? get_offer_note(price_asset_ids as package_id[])
		: '';

	$: sorted_assets = sort_assets(price_asset_ids);
	$: asset_square_images = sorted_assets.filter((v) => 'square' in indexed_package_assets[v].image);
</script>

<div class="package_overview">
	<div class="alignment">
		<AssetImage asset_ids={price_asset_ids} {animated} />

		<div class="description">
			<h2 class="title">
				{sort_assets(price_asset_ids)
					.map((v) => indexed_package_assets[v].name)
					.join(' + ')}
			</h2>
			<ul class="points">
				{#each sorted_assets as asset}
					{#each indexed_package_assets[asset].aspects as point}
						<li>{@html point}</li>
					{/each}
				{/each}
			</ul>
			{#if show_price}
				{#if asset_square_images.length > 0}
					<SquarePackageList package_ids={price_asset_ids} />
				{/if}
				<h3 class:spaced={asset_square_images.length === 0}>
					12 Monate nur {@html get_price_string(price_asset_ids, 'jahr')} mtl.*
				</h3>
				<p>
					(im Jahres-Abo, danach {@html get_price_string(price_asset_ids, 'monat')} mtl.* im Monats-Abo)
					<br />
					Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
				</p>
			{/if}
			{#if offer_string}
				<img
					src={make_url('/images/external/amazongiftcard.png', dev)}
					alt=""
					class="amazon_badge"
				/>
			{/if}
			<!-- {#if offer_string}
					<GradientBadge>{offer_string}</GradientBadge>
			{/if} -->
		</div>
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
		margin-bottom: 20px;
	}

	.amazon_badge {
		width: 170px;
		margin-top: 20px;
	}
	.points {
		list-style: none;
		font-size: 16px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		line-height: 150%;
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
		margin-top: 40px;
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
