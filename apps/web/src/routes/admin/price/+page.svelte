<script lang="ts">
	import { package_combinations } from 'asset_library/assets/packages';

	import { indexed_offers, offer_descriptions } from 'asset_library/offer_description';
	import type { offer_id as offer_id_type } from 'asset_library/offer_description';

	import { get_offer_note, get_offer_price, get_price } from 'asset_library/prices';
	let offer_id: offer_id_type | undefined =
		offer_descriptions.length === 1
			? offer_descriptions[0].id
				? offer_descriptions[0].id
				: undefined
			: undefined;
</script>

<div>
	{#each package_combinations as package_combination}
		{@const price = get_price(package_combination)}

		<div>
			<div>
				{package_combination.join(', ')} = {@html price.jahr.toFixed(2)} => {@html price.monat.toFixed(
					2
				)}
				{@html get_offer_note(package_combination)}
			</div>
		</div>
	{/each}
</div>
