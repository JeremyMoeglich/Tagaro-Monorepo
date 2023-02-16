<script lang="ts">
	import { indexed_package_assets, type package_id } from 'asset_library/assets/packages';
	export let packages: package_id[];
	export let offset_multiplier = 1;
	const image_width_percentage = 0.4;

	function get_scale(index: number): number {
		return 3 / (10 * (packages.length - index)) + 0.7;
	}

	$: assets = packages.map((package_id) => indexed_package_assets[package_id]);
	$: offset = (0.603 / packages.length) * offset_multiplier;

	let back_scale = 1;
	$: packages.length, (back_scale = get_scale(0));
	$: total_width =
		offset * (packages.length - 1) + image_width_percentage * (1 + (1 - back_scale) / 2);
</script>

{#if packages.length > 0}
	<div
		class="outer"
		style:--img_width={`${image_width_percentage * 100}%`}
		style:transform={`translateX(${50 - (total_width * 100) / 2}%)`}
	>
		<img
			src={`/images/assets/packages/normal/${assets[0].id}.png`}
			alt={assets[0].id}
			class="size_image"
			style:transform={`scale(${back_scale})`}
		/>
		<div>
			{#each assets.slice(1) as asset, i}
				{@const index = i + 1}
				<img
					src={`/images/assets/packages/normal/${asset.id}.png`}
					alt={asset.id}
					class="positioned_images"
					style:transform={`translateX(${
						(offset * 100 * index) / image_width_percentage
					}%) scale(${get_scale(index)})`}
				/>
			{/each}
		</div>
	</div>
{/if}

<style>
	.outer {
		position: relative;
		width: 100%;
		margin: 10px 0px;
	}
	.positioned_images {
		position: absolute;
		width: var(--img_width);
		top: 0;
		left: 0;
	}
	.size_image {
		width: var(--img_width);
	}
	img {
		filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.637));
	}
</style>
