<script lang="ts">
	import type { imaged_package_id } from '$lib/scripts/universal/asset_library/imaged_packages';

	export let package_ids: imaged_package_id[];
	const base_url = '/images/assets/packages/square/';
	$: elements = package_ids.join(';+;').split(';');
</script>

<div class="alignment">
	{#each elements as element}
		{#if element === '+'}
			<div class="seperator">+</div>
		{:else}
			<img class="element" src={`${base_url}${element}.webp`} alt={element} />
		{/if}
	{/each}
</div>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
	}
	.element {
		width: 50px;
	}
	.seperator {
		font-size: 30px;
		padding: 10px;
	}
</style>
