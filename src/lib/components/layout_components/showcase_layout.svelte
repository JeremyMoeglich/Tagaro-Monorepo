<script lang="ts">
	import * as urls from '$lib/scripts/frontend/urls';
	import Button from '$lib/components/layout_components/button.svelte';
	import { package_names } from '$lib/scripts/universal/packages';
	import { bonus_string } from '$lib/scripts/universal/prices';

	export let title = 'Jetzt Sky Wunschpakete buchen';
	export let subtitle1 = `Bei Vermittlung über TAGARO zusätzlich mit ${bonus_string} Bonus.`;
	export let subtitle2 =
		'Wir sind autorisierter Sky Onlinehändler und stehen für eine schnelle & zuverlässige Bearbeitung.';
	export let points = [
		'Vertrag für Internet, Sat- oder Kabel-Anschluss mit Sky Q Receiver oder Sky Q IPTV Box*',
		`${bonus_string} Bonus und versandkostenfreie Vermittlung*`
	];
	export let primary_image: undefined | string = undefined;
	export let side_images = [];

	const left_badges = ['/images/badges/praemie.png'];
	const right_badges = ['/images/badges/mtlkuendbar.svg', '/images/badges/payback.png'];
</script>

<div class="alignment">
	<div class="side_alignment">
		<a class="left_side" href={urls.aboformular}>
			{#each left_badges as badge}
				<img src={badge} alt="" class="wrap_add" />
			{/each}
			{#each side_images as image}
				<img src={image} alt="" />
			{/each}
			{#each right_badges as badge}
				<img src={badge} alt="" class="wrap_add" />
			{/each}

			<img class="wrap_remove" src="/images/badges/sky_signature.svg" alt="" />
		</a>
		<div class="right_side">
			<h1>{title}</h1>
			<h2>{subtitle1}</h2>
			<h3>{subtitle2}</h3>

			<a href={urls.aboformular}>
				{#if primary_image}
					<img src={primary_image} alt="" class="primary_image" />
				{:else}
					<div class="package_overview">
						{#each package_names as package_name}
							<a href={`/angebote/${package_name}`}>
								<img src={`/images/packages/${package_name}.jpg`} alt={package_name} />
							</a>
						{/each}
					</div>
				{/if}
			</a>
		</div>
	</div>
	<a class="side_bottom_images" href={urls.aboformular}>
		{#each left_badges as badge}
			<img src={badge} alt="" class="wrap_remove" />
		{/each}
		<ul class="points">
			{#each points as point}
				<li>✓ {point}</li>
			{/each}
		</ul>
		{#each right_badges as badge}
			<img src={badge} alt="" class="wrap_remove" />
		{/each}
	</a>
	<div class="btn">
		<Button text="Jetzt Bestellen" route={urls.aboformular} />
	</div>
</div>

<style lang="scss">
	@import 'lib/style/mixins.scss';
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
		@include gradient-text;
	}
	h2 {
		color: #4a4a4a;
		margin-bottom: 10px;
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
		max-width: min(90vw, 1000px);
	}
</style>
