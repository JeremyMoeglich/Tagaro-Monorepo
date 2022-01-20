<script lang="ts">
	import BoxSelector from '$lib/components/layout_components/box_selector.svelte';
	import {
		base_packages,
		premiumpackages,
		package_id,
		packages_assets
	} from '$lib/scripts/universal/assets/packages';
	import { get_price_string } from '$lib/scripts/universal/prices';
	import { receive_id, receive_assets } from '$lib/scripts/universal/assets/receive_type';
	import { zubuchoptionen_assets } from '$lib/scripts/universal/assets/zubuchoptionen';
	import type { zubuchoption_id } from '$lib/scripts/universal/assets/zubuchoptionen';

	let selected_base_packages: Array<package_id> = [base_packages[0]];
	$: selected_base_package = selected_base_packages[0];

	let selected_premium_packages: Array<package_id> = [];
	let selected_receive_type: Array<receive_id> = [];
	let selected_zubuchoptionen: Array<zubuchoption_id> = [];
</script>

<BoxSelector
	boxes={receive_assets.map((v) => ({
		image: `/images/receive_types/${v.id}`,
		text: v.text,
		id: v.id,
		disabled: false
	}))}
	bind:selected={selected_receive_type}
/>

<BoxSelector
	boxes={base_packages.map((v) => ({
		image: `/images/square_packages/${v}.png`,
		text: `${packages_assets[v]} - ${get_price_string([v], 'jahr')}`,
		id: v,
		disabled: false
	}))}
	bind:selected={selected_base_packages}
/>
<BoxSelector
	boxes={premiumpackages.map((v) => ({
		image: `/images/square_packages/${v}.png`,
		text: `${packages_assets[v]} - ${get_price_string([v], 'jahr')}`,
		id: v,
		disabled: false
	}))}
	multi_select
	bind:selected={selected_premium_packages}
/>
<BoxSelector
	boxes={zubuchoptionen_assets.map((v) => ({
		image: `/images/zubuchoptionen/${v.id}.png`,
		text: `${v.text} - ${get_price_string([v.id], 'jahr')}`,
		id: v.id,
		disabled: false
	}))}
	bind:selected={selected_zubuchoptionen}
/>
<div>
	Total: {get_price_string([...selected_premium_packages, selected_base_package, ...selected_zubuchoptionen], 'jahr')} mlt.
	<br />
	Nach Verlängerung: {get_price_string(
		[...selected_premium_packages, selected_base_package],
		'monat'
	)} mlt.
</div>
