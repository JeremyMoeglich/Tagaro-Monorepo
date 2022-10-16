<script>
	import { package_combinations } from 'asset_library/assets/packages';
</script>

<div>
	{#each package_combinations as combination}
		<a href={`/packages-${combination.join(',')}`}>{combination.join(',')}</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
