<script lang="ts">
	import { package_combinations } from 'asset_library/assets/packages';
	import { empty_offer } from 'asset_library/offer_description';

	import { get_offer_note, get_offer_price, get_price } from 'asset_library/prices';
</script>

<div class="flex flex-col p-8 text-slate-300">
	{#each package_combinations as package_combination}
		{@const price = get_price(package_combination)}
		{@const default_price = get_offer_price(empty_offer, package_combination)}

		<div>
			<div>
				{package_combination.join(', ')} = {@html price.jahr.toFixed(2)} (default: {@html default_price.jahr.toFixed(
					2
				)}) => {@html price.monat.toFixed(2)}
				{@html get_offer_note(package_combination)}
			</div>
		</div>
	{/each}
</div>
