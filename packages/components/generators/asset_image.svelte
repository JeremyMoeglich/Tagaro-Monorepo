<script lang="ts">
	import { dev } from '$app/environment';
	import { indexed_assets } from 'asset_library/all_assets';
	import type { asset_id } from 'asset_library/asset_types';
	import { make_url } from 'frontend/url';
	import { crossfade } from 'frontend/crossfade';
	const [send, receive] = crossfade;

	export let ids: asset_id[];
	export let animated: boolean;
</script>

<div class="image" class:large={ids.length === 1}>
	{#each ids as id}
		{@const src = make_url(indexed_assets[id].image.normal, dev)}
		{@const alt = indexed_assets[id].name}
		{#if animated}
			<img {src} {alt} out:send={{ key: src }} in:receive={{ key: src }} />
		{:else}
			<img {src} {alt} />
		{/if}
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
	.large img {
		max-width: 280px;
	}
</style>
