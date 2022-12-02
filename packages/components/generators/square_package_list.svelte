<script lang="ts">
	import { dev } from '$app/environment';
	import { indexed_assets } from 'asset_library/all_assets';
	import type { asset_id } from 'asset_library/asset_types';
	import { make_url } from 'frontend/url';

	export let package_ids: asset_id[];
	$: elements = package_ids
		.map((v) => indexed_assets[v].image.square)
		.filter((v) => v)
		.join(';+;')
		.split(';');
</script>

<div class="alignment">
	{#each elements as element}
		{#if element === '+'}
			<div class="seperator">+</div>
		{:else}
			<img class="element" src={make_url(`${element}`, dev)} alt={element} />
		{/if}
	{/each}
</div>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
		margin-top: 10px;
	}
	.element {
		width: 50px;
	}
	.seperator {
		font-size: 30px;
		padding: 10px;
	}
</style>
