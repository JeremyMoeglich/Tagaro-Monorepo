<script>
	import PackageTable from '$lib/components/site/routes/angebote_layout/package_table.svelte';
	import Vertragsinfomationen from '$lib/components/site/vertragsinfomationen.svelte';
</script>

<slot />

<div class="bottom">
	<div>
		<PackageTable />
	</div>
	<div>
		<Vertragsinfomationen />
	</div>
</div>

<style>
	.bottom {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 50px 0px;
	}
</style>