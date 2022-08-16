<script lang="ts">
	import { package_combinations } from '$lib/scripts/universal/asset_library/assets/packages';

	import {
		indexed_offers,
		offer_descriptions
	} from '$lib/scripts/universal/asset_library/offer_description';
	import type { offer_id as offer_id_type } from '$lib/scripts/universal/asset_library/offer_description';

	import { get_offer_price } from '$lib/scripts/universal/asset_library/prices';
	let offer_id: offer_id_type | undefined =
		offer_descriptions.length === 1
			? offer_descriptions[0].id
				? offer_descriptions[0].id
				: undefined
			: undefined;
</script>

{#if offer_descriptions.length > 1}
	<div>
		{#each offer_descriptions as offer_description}
			<button
				class="offer_button"
				on:click={() => {
					if (offer_description.id) {
						offer_id = offer_description.id;
					}
				}}
			>
				{offer_description.id}
			</button>
		{/each}
	</div>
{/if}
{#if offer_id}
	<div>
		{#each package_combinations as package_combination}
			<div>
				<div>
					{package_combination.join(', ')} = {get_offer_price(
						indexed_offers[offer_id],
						package_combination
					).jahr.toFixed(2)}
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.offer_button {
		padding: 10px;
	}
</style>
