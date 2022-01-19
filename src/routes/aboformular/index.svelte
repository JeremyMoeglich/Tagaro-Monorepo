<script lang="ts">
	import BoxSelector from '$lib/components/layout_components/box_selector.svelte';
	import { base_packages, premiumpackages, package_name } from '$lib/scripts/universal/packages';
	import { get_price_string } from '$lib/scripts/universal/prices';

	let selected_base_packages: Array<package_name>;
</script>

<BoxSelector
	boxes={base_packages.map((v) => ({
		image: `/images/square_packages/${v}.png`,
		text: v,
		disabled: false
	}))}
	bind:selected={selected_base_packages}
/>
