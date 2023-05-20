<script lang="ts">
	import { page } from '$app/stores';
	import type { package_id } from 'asset_library/assets/packages';
	import PackageTemplate from 'components/templates/element/package_template.svelte';
	import Senders from 'components/layout/senders.svelte';
	import { indexed_priceable_assets } from 'asset_library/priceable_asset';
	import { sort_assets } from 'asset_library/all_assets';
	import Inklusive from 'components/complete/inklusive.svelte';
	import Meta from '../../meta.svelte';
	import { get_title } from 'asset_library/title';
	$: ids_string = $page.params.ids;
	$: ids = ids_string ? sort_assets(ids_string.split('-') as package_id[]) : [];
</script>

<Meta websiteTitle={`${get_title(ids, false, false)} vom Sky Onlinehändler seit 2006`} />

<div class="outer">
	<PackageTemplate price_asset_ids={ids} show_price={true} animated={true} />
	{#each ids as id}
		{#if indexed_priceable_assets[id].senders.length !== 0}
			<Senders {id} />
		{/if}
	{/each}
	<Inklusive version="tagaro" />
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
</style>
