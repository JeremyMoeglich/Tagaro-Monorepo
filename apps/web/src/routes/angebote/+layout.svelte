<script lang="ts">
	import PackageTable from 'components/complete/package_table.svelte';
	import VertragsinfomationenBox from 'components/complete/vertragsinfomationen_box.svelte';
</script>

<div>
	<div>
		<slot />
	</div>

	<div class="bottom">
		<div class="table">
			<PackageTable />
		</div>
		<div>
			<VertragsinfomationenBox />
		</div>
	</div>
</div>

<style>
	.bottom {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 50px 0px;
	}
	.table {
		max-width: 1300px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
