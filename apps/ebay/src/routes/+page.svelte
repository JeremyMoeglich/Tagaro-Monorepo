<script>
	import { package_combinations } from 'asset_library/assets/packages';
</script>

<div>
	{#each package_combinations as combination}
		<a href={`/packages-${combination.join(',')}`}>{combination.join(',')}</a>
	{/each}
	<a href={`/packages-allgemein`}>Allgemein</a>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
