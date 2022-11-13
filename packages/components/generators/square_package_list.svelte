<script lang="ts">
	import { dev } from '$app/environment';
	import type { imaged_package_id } from 'asset_library/imaged_packages';
	import { make_url } from 'frontend/url';

	export let package_ids: imaged_package_id[];
	const base_url = '/images/assets/packages/square/';
	$: elements = package_ids.join(';+;').split(';');
</script>

<div class="alignment">
	{#each elements as element}
		{#if element === '+'}
			<div class="seperator">+</div>
		{:else}
			<img class="element" src={make_url(`${base_url}${element}.webp`, dev)} alt={element} />
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
