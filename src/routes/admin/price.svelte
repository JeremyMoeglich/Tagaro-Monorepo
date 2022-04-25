<script lang="ts">
import { package_combinations } from "$lib/scripts/universal/asset_library/assets/packages";

    import { indexed_offers, offer_descriptions, type offer_id } from "$lib/scripts/universal/asset_library/offer_description";
import { get_offer_price } from "$lib/scripts/universal/asset_library/prices";
    let offer_id: offer_id | undefined = undefined
</script>

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
{#if offer_id}
	<div>
		{#each package_combinations as package_combination}
			<div>
				<div>
					{package_combination.join(', ')}
				</div>
				<div>
					{get_offer_price(indexed_offers[offer_id], package_combination)}
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
