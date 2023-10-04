<script lang="ts">
	import { bonus_string } from 'asset_library/prices';
	import { load_form } from 'frontend/load_aboformular';
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
	import { aboformular } from 'open_constants';
	import Enddate from 'components/generators/enddate.svelte';
	import ConditionalHref from '../../../../packages/components/layout/conditional_href.svelte';
	import type { priceable_asset_id } from 'asset_library/asset_types';
	import AImage from 'components/elements/aimage.svelte';
	import { indexed_package_assets } from 'asset_library/assets/packages';

	export let enddate:
		| {
				date: Date;
				format: string;
		  }
		| undefined = undefined;
	export let points = [
		'Vertrag für Internet, Sat- oder Kabel-Anschluss mit Sky Q Receiver oder Sky Q IPTV Box*',
		`${bonus_string()} Bonus und versandkostenfreie Vermittlung*`
	];
	export let primary_image: undefined | string = undefined;
	export let side_images: string[] = [];
	export let redirect_url: string | undefined = undefined;
	export let hide_left = false;
	export let top_margin = 10;

	export let buttons: {
		text: string;
		route: string;
	}[] = [
		{
			text: 'Jetzt Bestellen',
			route: aboformular
		}
	];

	const left_badges = ['/images/badges/einmalige_gebuehr.svg'] as const;
	const showcase_assets = [
		'entertainmentplus',
		'cinema',
		'sport',
		'bundesliga',
		'kids'
	] satisfies priceable_asset_id[];
</script>

<div class="alignment" style:margin-top={`${top_margin}px`}>
	<div class="side_alignment">
		{#if !primary_image && !hide_left}
			<button class="left_side" on:click={async () => load_form('Showcase_images')}>
				{#each left_badges as badge}
					<img src={badge} alt="" class="wrap_add" />
				{/each}
				{#each side_images as image}
					<img src={image} alt="" />
				{/each}

				{#if side_images.length < 2}
					<img class="wrap_remove" src="/images/badges/sky_signature.svg" alt="" />
				{/if}
			</button>
		{/if}
		<div class="right_side">
			<div class="text_side">
				{#if hide_left}
					<div class="wrap_remove">
						<img src="/images/badges/sky_signature.svg" alt="" />
					</div>
				{/if}
				<div>
					<h1><slot name="title">Jetzt Sky Wunschpakete buchen</slot>*</h1>
					{#if enddate}
						<h2>
							<Enddate enddate={enddate.date} format={enddate.format} />
						</h2>
					{/if}
					{#if $$slots.subtitle0}
						<h2 class="blue"><slot name="subtitle0" /></h2>
					{/if}
					<h2 class="gray">
						<slot name="subtitle1">
							Bei Vermittlung über TAGARO zusätzlich mit {@html bonus_string(true)} Bonus
						</slot>
					</h2>
					<h3 class="no_gradient">
						<slot name="subtitle2">
							Sky Neukunden-Angebote vom Onlinehändler mit schneller und zuverlässiger Bearbeitung.
						</slot>
					</h3>
				</div>
			</div>
			{#if primary_image}
				<ConditionalHref active={!!redirect_url} href={redirect_url ?? ''}>
					<img src={primary_image} alt="" class="primary_image" />
				</ConditionalHref>
			{/if}

			{#if !primary_image}
				<div class="package_overview">
					{#each showcase_assets.map((v) => indexed_package_assets[v]) as asset}
						<a
							href={asset.id.includes('entertainment')
								? `/angebote/${asset.id}`
								: `/angebote/${asset.id}-${
										['sport', 'bundesliga'].includes(asset.id)
											? 'entertainment'
											: 'entertainmentplus'
								  }`}
						>
							<AImage image={{ asset_id: asset.id, variant: 'normal' }} />
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div class="side_bottom_images">
		{#each left_badges as badge}
			<img src={badge} alt="" class="wrap_remove" />
		{/each}
		<ul class="points">
			{#each points as point}
				<li>
					{@html point}
				</li>
			{/each}
		</ul>
	</div>
	<div class="button">
		{#each buttons as button}
			<AboformularButton source={'Showcase_button'} text={button.text} route={button.route} />
		{/each}
	</div>
</div>

<style lang="scss">
	.alignment {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 70px;
	}
	.side_bottom_images {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: black;
		gap: 10px;
		img {
			width: 180px;
		}
		.points {
			list-style: none;
			text-align: left;
			font-size: large;
			margin-right: 20px;
			padding-left: 1em;
			text-indent: -1em;
			li:before {
				content: '✓';
				padding-right: 5px;
			}
		}
	}
	.side_alignment {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-top: 40px;
		margin-bottom: 10px;
		.left_side {
			display: flex;
			flex-direction: column-reverse;
			gap: 3vh;
			justify-content: center;
			img {
				width: 200px;
				max-width: 20vw;
				object-fit: contain;
			}
		}
		.right_side {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 500px;
			.primary_image {
				max-width: 100%;
				width: 100%;
				max-height: 400px;
				transition-duration: 500ms;
				&:hover {
					transform: scale(1.05);
				}
			}
			.package_overview {
				display: flex;
				max-width: 100vw;
				justify-content: center;
				gap: max(0px, calc(2vw - 20px));
			}
		}
	}

	.package_overview :global(img) {
		max-width: 100%;
		width: 200px;
		min-width: 0px;
		transition-duration: 200ms;
		padding: 2px;
		&:hover {
			z-index: 5;
			transform: scale(1.1);
			background: linear-gradient(
				142deg,
				rgba(253, 122, 29, 1) 0%,
				rgba(253, 29, 29, 1) 21%,
				rgba(194, 64, 159, 1) 51%,
				rgba(106, 92, 186, 1) 77%,
				rgba(29, 162, 253, 1) 100%
			);
			box-shadow: 0px 10px 36px -10px rgba(0, 0, 0, 0.75);
		}
	}
	.wrap_add {
		display: none;
	}
	@media only screen and (max-width: 830px) {
		.side_alignment {
			flex-wrap: wrap-reverse;
			.left_side {
				flex-direction: row;
			}
		}
		.wrap_remove {
			display: none;
		}
		.wrap_add {
			display: inline-block;
		}
	}
	h1 {
		margin-bottom: 0px;
		padding-bottom: 0px !important;
	}
	h2 {
		margin-bottom: 10px;
		margin-top: 0px;
	}
	h3 {
		color: #868686;
		margin-top: 0px;
		margin-bottom: 20px;
	}
	h1,
	h2,
	h3 {
		text-align: center;
		max-width: min(90vw, 1100px);
	}
	.button {
		margin-top: 20px;
	}

	.side_bottom_images {
		text-align: center;
		img {
			padding: 10px;
		}
	}
	.text_side {
		display: flex;
		gap: 50px;
		img {
			width: 150px;
		}
	}
</style>
