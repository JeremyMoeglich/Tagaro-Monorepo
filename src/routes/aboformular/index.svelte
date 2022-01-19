<script lang="ts">
	import BoxSelector from '$lib/components/layout_components/box_selector.svelte';
	import {
		base_packages,
		premiumpackages,
		package_name,
		packages
	} from '$lib/scripts/universal/packages';
	import { get_price_string } from '$lib/scripts/universal/prices';

	let selected_base_packages: Array<package_name> = [base_packages[0]];
	$: selected_base_package = selected_base_packages[0];

	let selected_premium_packages: Array<package_name> = [];
</script>

<BoxSelector
	boxes={base_packages.map((v) => ({
		image: `/images/square_packages/${v}.png`,
		text: `${packages[v]} - ${get_price_string([v], 'jahr')}`,
		id: v,
		disabled: false
	}))}
	bind:selected={selected_base_packages}
/>
<BoxSelector
	boxes={premiumpackages.map((v) => ({
		image: `/images/square_packages/${v}.png`,
		text: `${packages[v]} - ${get_price_string([v], 'jahr')}`,
		id: v,
		disabled: false
	}))}
	multi_select
	bind:selected={selected_premium_packages}
/>

<div>
	Total: {get_price_string([...selected_premium_packages, selected_base_package], 'jahr')} mlt.
</div>
