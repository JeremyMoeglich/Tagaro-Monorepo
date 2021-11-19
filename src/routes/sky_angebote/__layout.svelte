<script>
	import PackageTable from '$lib/site_components/package_table.svelte';
	import EmptySpacer from '$lib/site_components/empty_spacer.svelte';
	import Vertragsinfomationen from '$lib/site_components/vertragsinfomationen/vertragsinfomationen.svelte';
</script>

<slot />

<PackageTable />
<EmptySpacer />
<Vertragsinfomationen />
<EmptySpacer />
