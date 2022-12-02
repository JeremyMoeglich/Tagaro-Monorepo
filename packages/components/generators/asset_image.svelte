<script lang="ts">
	import { dev } from '$app/environment';
	import { indexed_assets } from 'asset_library/all_assets';
	import { type asset_id } from 'asset_library/asset_types';
	import { make_url } from 'frontend/url';

	export let ids: asset_id[];
	export let animated: boolean;
</script>

<div class="image">
	{#each ids as id}
		<img src={make_url(indexed_assets[id].image.normal, dev)} alt={indexed_assets[id].name} />
	{/each}
</div>

<style>
	.image {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
	}
	img {
		width: 100%;
		height: 100%;
		max-width: 160px;
	}
</style>
