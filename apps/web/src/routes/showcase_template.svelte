<script lang="ts">
	import { bonus_string } from 'asset_library/prices';
	import { load_form } from 'frontend/load_aboformular';
	import AboformularButton from 'components/elements/interactive/buttons/aboformular_button.svelte';
	import { aboformular } from 'open_constants';
	import Enddate from 'components/generators/enddate.svelte';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';
	import type { imaged_package_id } from 'asset_library/imaged_packages';
	import { crossfade } from 'frontend/crossfade';

	const [send] = crossfade;

	export let title = 'Jetzt Sky Wunschpakete buchen';
	export let enddate:
		| {
				date: Date;
				format: string;
		  }
		| undefined = undefined;
	export let subtitle1 = `Bei Vermittlung über TAGARO zusätzlich mit ${bonus_string} Bonus.`;
	export let subtitle2 =
		'Wir sind autorisierter Sky Onlinehändler und stehen für eine schnelle & zuverlässige Bearbeitung.';
	export let points = [
		'Vertrag für Internet, Sat- oder Kabel-Anschluss mit Sky Q Receiver oder Sky Q IPTV Box*',
		`${bonus_string} Bonus und versandkostenfreie Vermittlung*`
	];
	export let primary_image: undefined | string = undefined;
	export let side_images: string[] = [];

	export let buttons: {
		text: string;
		route: string;
	}[] = [
		{
			text: 'Jetzt Bestellen',
			route: aboformular
		}
	];

	const left_badges = [] as const;
	const right_badges = ['/images/badges/mtlkuendbar.svg'] as const;
	const showcase_assets: readonly imaged_package_id[] = [
		'entertainmentplus',
		'cinema',
		'sport',
		'bundesliga',
		'kids'
	] as const;
</script>

<div class="alignment">
	<div class="side_alignment">
		<button class="left_side" on:click={async () => load_form('Showcase_images')}>
			{#each left_badges as badge}
				<img src={badge} alt="" class="wrap_add" />
			{/each}
			{#each side_images as image}
				<img src={image} alt="" />
			{/each}
			{#each right_badges.slice(Math.max(side_images.length - 1, 0)) as badge}
				<img src={badge} alt="" class="wrap_add" />
			{/each}

			{#if side_images.length < 2}
				<img class="wrap_remove" src="/images/badges/sky_signature.svg" alt="" />
			{/if}
		</button>
		<div class="right_side">
			<h1>{@html title}*</h1>
			{#if enddate}
				<h2>
					<Enddate enddate={enddate.date} format={enddate.format} />
				</h2>
			{/if}
			<h2 class="gray">{@html subtitle1}</h2>
			<h3 class="no_gradient">{@html subtitle2}</h3>

			{#if primary_image}
				<img src={primary_image} alt="" class="primary_image" />
			{:else}
				<div class="package_overview">
					{#each showcase_assets.map((v) => indexed_priceable_assets[v]) as asset}
						{@const path = `/images/assets/packages/normal/${asset.id}.png`}
						<a href={`/angebote/${asset.id}`} data-sveltekit-prefetch>
							<img src={path} alt={asset.id} out:send={{ key: path }} in:send={{ key: path }} />
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<button class="side_bottom_images" on:click={async () => load_form('Showcase_points')}>
		{#each left_badges as badge}
			<img src={badge} alt="" class="wrap_remove" />
		{/each}
		<ul class="points">
			{#each points as point}
				<li>
					✓ {@html point}
				</li>
			{/each}
		</ul>
		{#each right_badges as badge}
			<img src={badge} alt="" class="wrap_remove" />
		{/each}
	</button>
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
		margin-top: 10px;
		margin-bottom: 70px;
	}
	.side_bottom_images {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: black;
		gap: 10px;
		img {
			width: 150px;
			height: 150px;
		}
		ul {
			list-style: none;
			font-size: large;
			margin-right: 20px;
		}
	}
	.side_alignment {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin: 30px 20px;
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
				max-width: 100vw;
				width: calc(500px + 14vw);
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
				img {
					max-width: 100%;
					width: 200px;
					min-width: 0px;
					transition-duration: 200ms;
					padding: 5px;
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
			}
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
		margin-bottom: 5px;
	}
	h2 {
		margin-bottom: 10px;
		margin-top: 0px;
	}
	h3 {
		color: #868686;
		margin-bottom: 48px;
		margin-top: 0px;
	}
	h1,
	h2,
	h3 {
		text-align: center;
		max-width: min(90vw, 1100px);
	}
</style>
