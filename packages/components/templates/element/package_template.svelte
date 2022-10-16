<script lang="ts">
	import GradientBadge from '../../elements/gradient_badge.svelte';
	import { indexed_package_assets } from 'asset_library/assets/packages';
	import type { package_id } from 'asset_library/assets/packages';

	import type { priceable_asset_id } from 'asset_library/asset_types';
	import { get_offer_note, get_price_string } from 'asset_library/prices';
	import { typed_keys } from 'functional-utilities';
	import SquarePackageList from '../../generators/square_package_list.svelte';
	import type { imaged_package_id } from 'asset_library/imaged_packages';
	import { imaged_package_ids } from 'asset_library/imaged_packages';

	import { crossfade } from 'frontend/crossfade';
	import { make_url } from 'frontend/url';
	import { dev } from '$app/environment';
	const [send, receive] = crossfade;

	export let title: string;
	export let points: ReadonlyArray<string>;
	export let image: string = undefined;
	export let price_asset_ids: priceable_asset_id[];
	export let animated = false;
	export let show_price: boolean;

	$: offer_string = price_asset_ids.every((id) =>
		typed_keys(indexed_package_assets).includes(id as package_id)
	)
		? get_offer_note(price_asset_ids as package_id[])
		: '';

	function is_imaged_package(id: priceable_asset_id): id is imaged_package_id {
		return imaged_package_ids.includes(id as imaged_package_id);
	}
</script>

<div class="package_overview">
	<div class="alignment">
		<div class="description">
			<h2 class="title gradient_text">{title}</h2>
			<ul class="points">
				{#each points as point}
					<li>{point}</li>
				{/each}
			</ul>
			{#if show_price}
				{#if price_asset_ids.every(is_imaged_package)}
					<SquarePackageList package_ids={price_asset_ids} />
				{/if}
				<h3 class="gradient_text">
					12 Monate nur {get_price_string(price_asset_ids, 'jahr')} mtl.*
				</h3>
				<p>
					(im Jahres-Abo, danach {get_price_string(price_asset_ids, 'monat')} mtl.* im Monats-Abo)
					<br />
					Der Vertrag hat eine Laufzeit von 12 Monaten und ist im Anschluss monatlich kündbar
				</p>
			{/if}
			<!-- {#if offer_string}
					<GradientBadge>{offer_string}</GradientBadge>
			{/if} -->
		</div>
		<div>
			<slot />
		</div>

		{#if image}
			{#if animated}
				<img
					src={make_url(image, dev)}
					alt=""
					class="image"
					out:send={{ key: image }}
					in:receive={{ key: image }}
				/>
			{:else}
				<img src={make_url(image, dev)} alt="" class="image" />
			{/if}
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
		align-items: center;
	}
	.title,
	:global(.description h3) {
		font-size: 25px;
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
	:global(h3) {
		margin-top: 40px;
	}

	.image {
		width: max(min(30%, 340px), 200px);
		align-self: center;
	}

	.description {
		min-width: max(340px, 25%);
		max-width: 700px;
		flex: 1 1 0;
	}
	.package_overview {
		transition-duration: 300ms;
	}
</style>
