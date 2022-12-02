<script lang="ts">
	import PackageTemplate from '../../../templates/element/package_template.svelte';
	export let animated = false;
	export let show_price: boolean;
</script>

<PackageTemplate {show_price} {animated} price_asset_ids={['dazn']} show_senders={false} />
